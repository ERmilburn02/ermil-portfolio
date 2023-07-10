import { MDXRemote } from "next-mdx-remote/rsc";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:3000/hello.mdx");
  const markdown = await res.text();

  const components = {
    Link: (props: NextLinkProps) => <NextLink {...props} />,
  };

  return (
    <>
      <MDXRemote source={markdown} components={components} />
    </>
  );
}
