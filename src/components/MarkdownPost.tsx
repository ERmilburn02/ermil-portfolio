import { marked } from "marked";
import sanitize from "sanitize-html";

export default function MarkdownPost({}: {}) {
  // TODO: Load in markdown from AWS
  const unsanitized = marked.parse(
    "# Test of markdown rendering\n\nLet's hope this works!\n\n<iframe src='https://www.youtube.com/embed/o4eSYUnXwPM?modestbranding=1&iv_load_policy=3' frameborder='0' allowfullscreen=true style='margin-left: auto; margin-right: auto; aspect-ratio: 16 / 9;'></iframe>",
    { async: false, mangle: false, headerIds: false }
  );
  const sanitized = sanitize(unsanitized, {
    allowedTags: sanitize.defaults.allowedTags.concat(["iframe"]),
    allowedAttributes: {
      iframe: [
        "src",
        "width",
        "height",
        "allow",
        "allowfullscreen",
        "frameborder",
        "style",
      ],
    },
    allowedIframeHostnames: ["www.youtube.com"],
  });

  return (
    <>
      <div className="prose dark:prose-invert mx-auto text-center">
        <div dangerouslySetInnerHTML={{ __html: sanitized }} className="py-4" />
      </div>
    </>
  );
}
