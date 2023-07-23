import { SupabaseClient } from "@supabase/supabase-js";

export default async function checkAuth(
  client: SupabaseClient
): Promise<boolean> {
  const {
    data: { session },
  } = await client.auth.getSession();

  return !!session;
}
