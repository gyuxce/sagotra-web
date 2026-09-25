"use server";

import { client } from "@/lib/sanity/client";
import { z } from "zod";
import { isSanityConfigured } from "@/lib/sanity/env";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

const inquirySchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email().optional().or(z.literal("")),
  phone: z.string().trim().min(1),
  experienceSlug: z.string().trim().optional(),
  preferredDate: z.string().trim().optional(),
  groupSize: z.string().trim().optional(),
  language: z.string().trim().optional(),
  interests: z.string().trim().optional(),
  message: z.string().trim().optional(),
  consent: z.literal("on"),
});

export type InquiryFormState = {
  status: "idle" | "success" | "error" | "unavailable";
};

export async function submitInquiry(
  _prevState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const parsed = inquirySchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { status: "error" };
  }

  if (!isSupabaseConfigured) return { status: "unavailable" };

  const data = parsed.data;
  try {
    const experience = data.experienceSlug && isSanityConfigured
      ? await client.fetch<{ _id: string; slug: string; title: string } | undefined>(
          '*[_type == "experience" && slug.current == $slug][0]{_id, "slug": slug.current, "title": coalesce(title.en, title.id)}',
          { slug: data.experienceSlug },
        )
      : undefined;

    const supabase = createSupabaseServerClient();
    if (!supabase) return { status: "unavailable" };
    const { error } = await supabase.from("crm_leads").insert({
      name: data.name,
      email: data.email || null,
      phone: data.phone,
      experience_id: experience?._id ?? null,
      experience_slug: experience?.slug ?? (data.experienceSlug || null),
      experience_title: experience?.title ?? null,
      preferred_date: data.preferredDate || null,
      group_size: data.groupSize ? Number(data.groupSize) : null,
      language: data.language || null,
      interests: data.interests || null,
      message: data.message || null,
      consent_given: true,
      source: "plan-your-visit",
      channel: "form",
    });
    if (error) return { status: "unavailable" };
  } catch {
    return { status: "unavailable" };
  }

  return { status: "success" };
}
