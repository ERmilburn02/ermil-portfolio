import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { Url } from "@/types";

export default function AdminNavItemComponent({
  name,
  icon,
  link,
  external,
}: {
  name: string;
  icon: IconDefinition;
  link: Url;
  external?: boolean;
}) {
  const target = external ? "_blank" : undefined;

  return (
    <>
      <li>
        <Link
          href={link}
          target={target}
          className="flex items-center p-2 font-normal rounded-lg text-white hover:bg-gray-700"
        >
          <FontAwesomeIcon
            icon={icon}
            className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
          />
          <span className="ml-3">{name}</span>
        </Link>
      </li>
    </>
  );
}
