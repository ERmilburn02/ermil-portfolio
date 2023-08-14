import ProjectPreview from "@/components/ProjectPreview";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types";
import { cookies } from "next/headers";

// TODO: Move this to it's own component to better handle errors

export default async function ProjectsPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase.from("projects").select("*");

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
    if (data.length == 0) {
      return (
        <>
          <div className="text-center mx-16 my-8">
            <h1 className="font-bold text-5xl mb-2">Projects</h1>
            <p>
              Various projects I have worked on over the years. Some are still
              in development.
            </p>
          </div>
          <div className="p-4 md:p-0 mx-auto text-center">
            <p>No projects? Maybe some will turn up soon.</p>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="text-center mx-16 my-8">
          <h1 className="font-bold text-5xl mb-2">Projects</h1>
          <p>
            Various projects I have worked on over the years. Some are still in
            development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
          {data.map((project) => (
            <ProjectPreview
              name={project.post_title}
              link={project.id}
              image={project.post_image_link}
              key={project.id}
            />
          ))}
        </div>
      </>
    );
  }
}
