export default function ProjectsLoadingPage() {
  return (
    <>
      <div className="grid place-items-center h-full w-full">
        <div className="lg:mx-16 text-center">
          <h1 className="font-bold lg:text-5xl text-2xl mb-2">Loading...</h1>
          <p className="lg:mx-16 mx-4 text-sm lg:text-base">
            If this takes more than a few seconds, please check your internet
            connection.
          </p>
        </div>
      </div>
    </>
  );
}
