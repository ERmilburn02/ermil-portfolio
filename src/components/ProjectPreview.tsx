import Link from "next/link";
import Image from "next/image";

import { Database, Url } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function ProjectPreview({
  name,
  image,
}: {
  name: string;
  image: Url;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  if (image == "") image = "placeholder.jpg";

  const imageUrl = supabase.storage
    .from("portfolio-public-data")
    .getPublicUrl(`images/${image}`).data.publicUrl;

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
            src={imageUrl}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1 className="p-4 pb-2 font-bold">{name}</h1>
      </Link>
    </>
  );
}
