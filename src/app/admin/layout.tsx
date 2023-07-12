import AdminNavComponent from "@/components/admin/AdminNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col h-full">
        <AdminNavComponent />
        <div className="flex-1 h-auto overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
