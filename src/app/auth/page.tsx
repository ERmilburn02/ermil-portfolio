import LoginComponent from "@/components/Login";
import checkAuth from "@/lib/checkAuth";
import { Database } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SigninPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  if (await checkAuth(supabase)) redirect("/admin");

  return (
    <>
      <LoginComponent />
    </>
  );
}
