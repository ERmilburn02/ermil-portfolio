import RemoteMarkdownComponent from "@/components/RemoteMarkdown";

export default async function IndividualProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  // TODO: Temp code to get it working
  let url = process.env.VERCEL_BRANCH_URL
    ? process.env.VERCEL_BRANCH_URL
    : "localhost:3000";

  // TODO: Pull from Supabase
  const res = await fetch(`http://${url}/hello.mdx`);
  const markdown = await res.text();

  return (
    <>
      <div className="my-4">
        <RemoteMarkdownComponent md={markdown} />
      </div>
    </>
  );
}
