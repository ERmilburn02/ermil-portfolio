import Link from "next/link";
import Image from "next/image";

import { Url } from "@/types";

// TODO: Replace images with Supabase

export default function ProjectPreview({
  name,
  image,
}: {
  name: string;
  image: Url;
}) {
  if (image == "") image = "images/placeholder.jpg";

  return (
    <>
      <Link
        href={`/projects/${name}`}
        key={name}
        className="border my-4 border-gray-200 dark:border-gray-800 m-2 rounded-2xl shadow-lg overflow-hidden flex flex-col text-gray-500 duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-start hover:-translate-y-3 transition-transform hover:cursor-pointer"
      >
        <div className="relative w-full h-40">
          <Image
            alt={name}
            src={`/${image}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1 className="p-4 pb-2 font-bold">{name}</h1>
      </Link>
    </>
  );
}
