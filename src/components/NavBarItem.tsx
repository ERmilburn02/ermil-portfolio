import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { UrlObject } from "url";
type Url = string | UrlObject;

export default function NavBarItem({
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
          className="flex items-center p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FontAwesomeIcon
            icon={icon}
            className="w-6 h-6 text-gray-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          />
          <span className="ml-3 lg:block hidden lg:text-lg">{name}</span>
        </Link>
      </li>
    </>
  );
}
