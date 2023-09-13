"use client";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import type { Database } from "@/types";

export default function NavBarLogoutButton() {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();

    router.refresh();
    router.push("/");
  };

  return (
    <>
      <li>
        <div
          className="flex items-center p-2 text-3xl font-normal rounded-lg text-white hover:bg-gray-700 cursor-pointer"
          onClick={handleSignOut}
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
          />
          <span className="ml-3 lg:block hidden lg:text-lg">Log Out</span>
        </div>
      </li>
    </>
  );
}