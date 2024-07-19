import { NavLink } from "react-router-dom";

const activeStyles = "text-black";
const inactiveStyles = "text-white";
export const NavBar = () => {
  return (
    <nav className="space-x-2">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        HOME
      </NavLink>
      <NavLink
        to={"/students"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        STUDENTS
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        CONTACT
      </NavLink>
    </nav>
  );
};
