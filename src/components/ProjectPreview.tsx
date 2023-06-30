import Link from "next/link";
import Image from "next/legacy/image";

export default function ProjectPreview({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  if (image == "") image = "thumbnails/placeholder.png";

  return (
    <>
      <Link href={`/projects/${name}`} key={name}>
        <div className="border border-gray-200 dark:border-gray-800 m-2 rounded-2xl shadow-lg overflow-hidden flex flex-col text-gray-500 duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-start hover:-translate-y-3 transition-transform hover:cursor-pointer">
          <Image
            width={650}
            height={340}
            layout="responsive"
            alt={name}
            src={`/img/${image}`}
          />
          <h1 className="p-4 pb-2 font-bold">{name}</h1>
        </div>
      </Link>
    </>
  );
}
