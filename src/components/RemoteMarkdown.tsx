import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote/rsc";

// TODO: We have to explicitly make an allow list of custom components.
// TODO: Wrap Next components in custom components
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MarkdownImage, { MarkdownImageProps } from "./markdown/MarkdownImage";
import MarkdownIframe, { MarkdownIframeProps } from "./markdown/MarkdownIframe";
import MarkdownYouTube, {
  MarkdownYouTubeProps,
} from "./markdown/MarkdownYouTube";
import MarkdownItchio, { MarkdownItchioProps } from "./markdown/MarkdownItchio";
import MarkdownCode, { MarkdownCodeProps } from "./markdown/MarkdownCode";

export default async function RemoteMarkdownComponent({ md }: { md: string }) {
  const components: React.ComponentProps<typeof MDXProvider>["components"] = {
    Link: (props: NextLinkProps) => <NextLink {...props} />,
    Image: (props: MarkdownImageProps) => <MarkdownImage {...props} />,
    Iframe: (props: MarkdownIframeProps) => <MarkdownIframe {...props} />,
    YouTube: (props: MarkdownYouTubeProps) => <MarkdownYouTube {...props} />,
    Itchio: (props: MarkdownItchioProps) => <MarkdownItchio {...props} />,
    Code: (props: MarkdownCodeProps) => <MarkdownCode {...props} />,
  };

  return (
    <>
      <div className="prose prose-invert mx-auto px-2 text-center">
        <MDXRemote source={md} components={components} />
      </div>
    </>
  );
}
