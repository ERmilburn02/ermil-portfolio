import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export async function getStaticProps() {
  const files = fs.readdirSync("changelog");
  let fileContent: string = "";
  files.reverse();
  files
    .map((fileName) => fileName.replace(".md", ""))
    .forEach((file) => {
      fileContent += `# ${file}\n`;
      fileContent += fs.readFileSync(`changelog/${file}.md`, "utf-8");
    });

  return {
    props: {
      fileContent,
    },
  };
}

export default function Changelog({ fileContent }: { fileContent: string }) {
  return (
    <div className="mx-auto text-center">
      <h1 className="text-5xl lg:text-7xl mb-10 font-bold">Changelog</h1>
      <div className="prose mx-auto text-center lg:prose-lg">
        <div
          dangerouslySetInnerHTML={{
            __html: md({ html: true, xhtmlOut: true }).render(fileContent),
          }}
        ></div>
      </div>
    </div>
  );
}
