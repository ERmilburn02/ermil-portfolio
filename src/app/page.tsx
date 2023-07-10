import MarkdownComponent from "@/components/Markdown";

export default async function Home() {
  const res = await fetch("http://localhost:3000/hello.mdx");
  const markdown = await res.text();

  return (
    <>
      <MarkdownComponent md={markdown} />
    </>
  );
}
