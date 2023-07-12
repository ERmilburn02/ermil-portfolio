import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AdminNavItemComponent from "./AdminNavItem";

export default function AdminNavComponent() {
  return (
    <>
      <aside
        className="h-16 w-full bg-gray-50 dark:bg-gray-800"
        aria-label="Admin Nav"
      >
        <div className="w-full py-2 px-3">
          <ul className="flex flex-row mb-2 justify-evenly h-full">
            <AdminNavItemComponent
              name="TODO: Add stuff"
              icon={faPlus}
              link="#"
            />
          </ul>
        </div>
      </aside>
    </>
  );
}
