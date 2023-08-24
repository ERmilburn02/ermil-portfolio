import Link from "next/link";
import Image from "next/image";

import { Database, Url } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// TODO: Add marker if it's a hidden post

export default function ProjectPreview({
  name,
  image,
  link,
}: {
  name: string;
  image: Url;
  link: Url;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  if (image == "") image = "placeholder.jpg";

  const imageUrl = supabase.storage
    .from("portfolio-public-data")
    .getPublicUrl(`images/${image}`).data.publicUrl;

  return (
    <>
      <Link
        href={`/projects/${link}`}
        key={name}
        className="border my-4 border-gray-800 m-2 rounded-2xl shadow-lg overflow-hidden flex flex-col duration-75 text-gray-400 group-hover:text-white text-start hover:-translate-y-3 transition-transform hover:cursor-pointer"
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
