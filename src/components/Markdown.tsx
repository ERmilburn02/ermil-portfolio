import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote/rsc";

// TODO: We have to explicitly make an allow list of custom components.
// For now, we only allow the Next Link component
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export default async function MarkdownComponent({ md }: { md: string }) {
  const components: React.ComponentProps<typeof MDXProvider>["components"] = {
    Link: (props: NextLinkProps) => <NextLink {...props} />,
  };

  return (
    <>
      <MDXRemote source={md} components={components} />
    </>
  );
}
