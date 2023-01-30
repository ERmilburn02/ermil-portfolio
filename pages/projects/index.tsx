import fs from "fs";
// import Image from "next/image";
import CustomImage from "../../components/customImage";
import Link from "next/link";
import matter from "gray-matter";

export async function getStaticProps() {
  const files = fs.readdirSync("projects");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`projects/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return { slug, frontmatter };
  });
  return {
    props: {
      posts,
    },
  };
}

export default function Projects({
  posts,
}: {
  posts: { slug: string; frontmatter: { [key: string]: any } }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-200 m-2 rounded-x1 shadow-lg overflow-hidden flex flex-col"
        >
          <Link legacyBehavior href={`/projects/${slug}`}>
            <a>
              <CustomImage
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className="p-4">{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
