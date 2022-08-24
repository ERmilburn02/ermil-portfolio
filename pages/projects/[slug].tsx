import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";

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
    <>
      <Head>
        <meta name="og:description" content={frontmatter.metaDesc} />
        <meta name="description" content={frontmatter.metaDesc} />
        <meta property="og:description" content={frontmatter.metaDesc} />
        <meta name="twitter:description" content={frontmatter.metaDesc} />
        <meta name="keywords" content={frontmatter.tags.toString()} />
        <meta
          content={`https://ERmilburn02.com/` + frontmatter.socialImage}
          property="og:image"
        />
        <meta
          content={`https://ERmilburn02.com/` + frontmatter.socialImage}
          property="og:image"
        />
        <meta
          content={`https://ERmilburn02.com/` + frontmatter.socialImage}
          property="twitter:image"
        />
        <meta name="og:title" content={frontmatter.metaTitle} />
        <meta property="og:title" content={frontmatter.metaTitle} />
        <meta name="twitter:title" content={frontmatter.metaTitle} />
        <meta name="og:type" content="website" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ERmilburn02" />
        <meta name="og:site_name" content="ERmilburn02" />
        <meta property="og:site_name" content="ERmilburn02" />
      </Head>
      <div className="prose mx-auto text-center">
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: md({ html: true, xhtmlOut: true }).render(content),
          }}
        />
      </div>
    </>
  );
}
