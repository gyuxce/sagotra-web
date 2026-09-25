import "server-only";
import { createClient } from "@supabase/supabase-js";

export interface PublicExperiencePrice {
  experience_id: string;
  experience_slug: string;
  sale_price: number;
}

export async function getPublicExperiencePrices(): Promise<PublicExperiencePrice[]> {
  const supabase = createSupabaseServerClient();
  if (!supabase) return [];

  const { data, error } = await supabase.rpc("crm_public_experience_prices");
  if (error) throw new Error(`Load public experience prices: ${error.message}`);
  return (data ?? []) as PublicExperiencePrice[];
}

export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;

  return createClient(url, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
