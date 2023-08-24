import RemoteMarkdownComponent from "@/components/RemoteMarkdown";

export default async function AdminDebugPage() {
  const res = await fetch("http://localhost:3000/DEBUG.mdx");

  if (!res.ok) {
    return (
      <>
        <h1>Error!</h1>
        <pre>{JSON.stringify(res, undefined, 2)}</pre>
      </>
    );
  }

  const data = await res.text();

  return (
    <>
      <div className="my-4">
        <RemoteMarkdownComponent md={data} />
      </div>
    </>
  );
}
