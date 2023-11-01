import Image, { ImageProps } from "next/image";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types";
import { cookies } from "next/headers";

// TODO: Update to be a client component

export type MarkdownImageProps = {
  src: string;
  quality: number;
  contain: boolean;
  priority: boolean;
};

export default function MarkdownImage({
  src,
  quality = 75,
  contain = false,
  priority = false,
}: MarkdownImageProps) {
  const supabase = createServerComponentClient<Database>({ cookies });
  if (src == "") src = "placeholder.jpg";

  const imageUrl = supabase.storage
    .from("portfolio-public-data")
    .getPublicUrl(`images/${src}`).data.publicUrl;

  return (
    <>
      <div className="relative w-11/12 md:w-[48rem] h-48 md:h-96 mx-auto">
        <Image
          alt=""
          src={imageUrl}
          fill
          style={{ objectFit: contain ? "contain" : "cover" }}
          quality={quality}
          priority={priority}
        />
      </div>
      <br /> {/* The extra line is to avoid overflow */}
    </>
  );
}
