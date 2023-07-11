import RemoteMarkdownComponent from "@/components/RemoteMarkdown";

export default async function IndividualProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  // TODO: Pull from Supabase
  const res = await fetch("http://localhost:3000/hello.mdx");
  const markdown = await res.text();

  return (
    <>
      <div className="my-4">
        <RemoteMarkdownComponent md={markdown} />
      </div>
    </>
  );
}
