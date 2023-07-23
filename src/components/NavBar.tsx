import { faHouse, faScroll, faUser } from "@fortawesome/free-solid-svg-icons";
import NavBarItem from "./NavBarItem";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types";
import { cookies } from "next/headers";
import NavBarLogoutButton from "./admin/NavBarLogoutButton";

export default async function NavBar() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <>
      <aside
        className="lg:w-60 lg:h-full h-16 w-full bg-gray-50 dark:bg-gray-800"
        aria-label="Sidebar"
      >
        <div className="w-full py-2 lg:w-auto lg:h-full lg:overflow-y-auto lg:py-4 px-3">
          <ul className="flex flex-row lg:flex-col justify-evenly lg:justify-start h-full">
            <NavBarItem name="Home" link="/" icon={faHouse} />
            <NavBarItem name="Projects" link="/projects" icon={faScroll} grow />
            <NavBarItem name="Admin" link="/admin" icon={faUser} />
            {session && <NavBarLogoutButton />}
          </ul>
        </div>
      </aside>
    </>
  );
}
