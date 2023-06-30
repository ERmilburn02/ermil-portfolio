export default function IndividualProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <>{params.slug}</>
    </>
  );
}
