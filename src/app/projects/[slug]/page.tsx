import MarkdownPost from "@/components/MarkdownPost";

export default function IndividualProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <MarkdownPost />
    </>
  );
}
