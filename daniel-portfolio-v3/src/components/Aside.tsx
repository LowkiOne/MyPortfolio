import { NavLink } from "react-router-dom";
import { navItems } from "../data/pagePaths";

function Aside() {
  return (
    <aside>
      <menu>
        {navItems.map(({ path, label, icon: Icon }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <Icon />
              {label}
            </NavLink>
          </li>
        ))}
      </menu>
    </aside>
  );
}

export default Aside;
