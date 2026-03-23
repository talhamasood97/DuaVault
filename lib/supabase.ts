import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Client-side Supabase client — only initialised when env vars are present
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

/**
 * Server-side client for PUBLIC read-only content (duas, categories, etc.).
 * Uses the anon key — RLS already grants public SELECT on the duas table.
 * Prefer this over createAdminClient() for anything that doesn't touch
 * subscriber data or require bypassing RLS.
 */
export function createPublicServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } }
  );
}

/**
 * Server-side client with service-role privileges.
 * Bypasses RLS — use ONLY for subscriber management and admin operations.
 * Never use this for public content reads.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

/** @deprecated Use createPublicServerClient() or createAdminClient() instead. */
export function createServerClient() {
  return createAdminClient();
}
