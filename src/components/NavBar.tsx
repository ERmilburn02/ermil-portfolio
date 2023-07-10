import { faHouse } from "@fortawesome/free-solid-svg-icons";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <>
      <aside className="lg:w-60 lg:h-full h-16 w-full" aria-label="Sidebar">
        <div className="w-full py-2 lg:w-auto lg:h-full lg:overflow-y-auto lg:py-4 px-3 bg-gray-50 dark:bg-gray-800">
          <ul className="flex flex-row lg:[display:initial;] lg:[flex-direction:unset;] mb-2 justify-around">
            <NavBarItem name="Home" link="/" icon={faHouse} />
          </ul>
        </div>
      </aside>
    </>
  );
}
