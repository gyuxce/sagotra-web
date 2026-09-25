import { NextResponse } from "next/server";
import { z } from "zod";
import { client } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

const intentSchema = z.object({
  source: z.string().min(1).max(2048),
  experienceSlug: z.string().trim().min(1).max(200).optional(),
});

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) {
    return new NextResponse(null, { status: 403 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return new NextResponse(null, { status: 400 });
  }

  const parsed = intentSchema.safeParse(payload);
  if (!parsed.success) return new NextResponse(null, { status: 400 });

  const { source, experienceSlug } = parsed.data;
  if (!source.startsWith("/") || source.startsWith("//")) {
    return new NextResponse(null, { status: 400 });
  }

  const sourceUrl = new URL(source, request.url);
  if (sourceUrl.origin !== new URL(request.url).origin || sourceUrl.pathname !== source || source.includes("?") || source.includes("#")) {
    return new NextResponse(null, { status: 400 });
  }

  if (!isSupabaseConfigured) return new NextResponse(null, { status: 503 });

  try {
    const experience = experienceSlug && isSanityConfigured
      ? await client.fetch<{ _id: string; slug: string; title: string } | undefined>(
          '*[_type == "experience" && slug.current == $slug][0]{_id, "slug": slug.current, "title": coalesce(title.en, title.id)}',
          { slug: experienceSlug },
        )
      : undefined;

    const supabase = createSupabaseServerClient();
    if (!supabase) return new NextResponse(null, { status: 503 });
    const { error } = await supabase.from("crm_leads").insert({
      experience_id: experience?._id ?? null,
      experience_slug: experience?.slug ?? experienceSlug ?? null,
      experience_title: experience?.title ?? null,
      source,
      channel: "whatsapp",
    });
    if (error) return new NextResponse(null, { status: 500 });

    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse(null, { status: 500 });
  }
}
