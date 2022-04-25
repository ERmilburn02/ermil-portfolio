import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export async function getStaticPaths() {
  const files = fs.readdirSync("projects");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const fileName = fs.readFileSync(`projects/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function ProjectPage({
  frontmatter,
  content,
}: {
  frontmatter: { [key: string]: any };
  content: string;
}) {
  return (
    <div className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: md({html: true, xhtmlOut: true}).render(content)}} />
    </div>
  );
}
