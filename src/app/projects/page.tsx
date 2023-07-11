// TODO: Load public projects from API

import ProjectPreview from "@/components/ProjectPreview";

export default function ProjectsPage() {
  return (
    <>
      <div className="text-center mx-16 my-8">
        <h1 className="font-bold text-5xl mb-2">Projects</h1>
        <p>
          Various projects I have worked on over the years. Some are still in
          development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
        {/* TODO: Fill these in with dynamic data */}
        <ProjectPreview name="DEBUG 1" image="" />
        <ProjectPreview name="DEBUG 2" image="" />
        <ProjectPreview name="DEBUG 3" image="" />
        <ProjectPreview name="DEBUG 4" image="" />
        <ProjectPreview name="DEBUG 5" image="" />
      </div>
    </>
  );
}
