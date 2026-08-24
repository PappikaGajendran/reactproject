import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen fixed top-0 left-0 bg-slate-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-8">
        Notes
      </h1>

      <div className="flex flex-col gap-3">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 rounded-lg ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700"
            }`
          }
        >
          All Notes
        </NavLink>

        <NavLink
          to="/studies"
          className={({ isActive }) =>
            `p-3 rounded-lg ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700"
            }`
          }
        >
          Studies
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `p-3 rounded-lg ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700"
            }`
          }
        >
          Work
        </NavLink>

        <NavLink
          to="/personal"
          className={({ isActive }) =>
            `p-3 rounded-lg ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700"
            }`
          }
        >
          Personal
        </NavLink>

      </div>

    </div>
  );
}

export default Sidebar;