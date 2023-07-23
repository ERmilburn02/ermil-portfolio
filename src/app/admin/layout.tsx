import AdminNavComponent from "@/components/admin/AdminNav";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import checkAuth from "@/lib/checkAuth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  if (!(await checkAuth(supabase))) redirect("/auth");

  return (
    <>
      <div className="flex flex-col h-full">
        <AdminNavComponent />
        <div className="flex-1 h-auto overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
