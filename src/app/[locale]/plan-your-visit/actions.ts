"use server";

import { z } from "zod";
import { isWriteConfigured, writeClient } from "@/lib/sanity/write-client";

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
  status: "idle" | "success" | "error";
};

export async function submitInquiry(
  _prevState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const parsed = inquirySchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { status: "error" };
  }

  const data = parsed.data;

  if (isWriteConfigured) {
    await writeClient.create({
      _type: "inquiry",
      name: data.name,
      email: data.email || undefined,
      phone: data.phone,
      preferredDate: data.preferredDate || undefined,
      groupSize: data.groupSize ? Number(data.groupSize) : undefined,
      language: data.language || undefined,
      interests: data.interests || undefined,
      message: data.message || undefined,
      consentGiven: true,
      source: "plan-your-visit",
      status: "new",
      submittedAt: new Date().toISOString(),
    });
  }

  return { status: "success" };
}
