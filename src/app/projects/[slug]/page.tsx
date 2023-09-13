import RemoteMarkdownComponent from "@/components/RemoteMarkdown";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types";
import { cookies } from "next/headers";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.slug)
    .single();

  if (error) {
    return {
      title: "Invalid project",
      description: "That project ID is invalid",
      authors: { name: "ERmilburn02", url: "https://www.ermilburn02.com" },
    };
  } else if (data) {
    const imageUrl = supabase.storage
      .from("portfolio-public-data")
      .getPublicUrl(`images/${data.post_image_link}`).data.publicUrl;

    const desc = "A project by ERmilburn02"; // temp

    return {
      title: data.post_title,
      openGraph: {
        images: [imageUrl],
      },
      twitter: {
        title: data.post_title,
        description: desc,
        images: [imageUrl],
      },
      description: desc,
      // TODO: add description,
      authors: { name: "ERmilburn02", url: "https://www.ermilburn02.com" },
    };
  }

  return {
    title: "Something went wrong",
    authors: { name: "ERmilburn02", url: "https://www.ermilburn02.com" },
  };
}

export default async function IndividualProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.slug)
    .single();
  if (error) {
    console.error(error);
    return (
      <>
        <div className="my-4 mx-auto text-center">
          <h1 className="font-bold lg:text-5xl text-2xl mb-2">
            An error occurred
          </h1>
          <p className="lg:mx-16 mx-4 text-sm lg:text-base">
            Extra info
            <br />
            Hint: {error.hint}
            <br />
            Code {error.code}
          </p>
        </div>
      </>
    );
  } else if (data) {
    const markdownUrl = supabase.storage
      .from("portfolio-public-data")
      .getPublicUrl(`projects/${data.post_content_link}`).data.publicUrl;
    const markdownResponse = await fetch(markdownUrl);
    const markdownText = await markdownResponse.text();

    return (
      <>
        <div className="my-4">
          <RemoteMarkdownComponent md={markdownText} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="my-4">
          <h1 className="font-bold lg:text-5xl text-2xl">
            There&apos;s nothing here...
          </h1>
        </div>
      </>
    );
  }
}
