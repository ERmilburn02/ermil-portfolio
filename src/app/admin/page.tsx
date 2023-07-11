import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function AdminPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth");
  }

  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
