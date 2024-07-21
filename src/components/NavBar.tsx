import { useAuth } from "@/context/AuthContext";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

function NavBar() {
  const { loggedInUser, logout } = useAuth();
  //yghy
  return (
    <nav className="sticky top-0 bg-slate-600 flex flex-wrap justify-between items-center p-4 ">
      <div className="m-auto max-w-3xl w-full flex justify-between items-center">
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return isActive
              ? { textDecoration: "underline", color: "#fff" }
              : {};
          }}
          className="text-2xl"
        >
          RevieU
        </NavLink>
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "underline", color: "#fff" }
                  : {};
              }}
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "underline", color: "#fff" }
                  : {};
              }}
            >
              About us
            </NavLink>
          </li>
          {loggedInUser ? (
            <>
              <li>
                <NavLink
                  to={"/bsnss"}
                  style={({ isActive }) => {
                    return isActive
                      ? { textDecoration: "underline", color: "#fff" }
                      : {};
                  }}
                >
                  Businesses
                </NavLink>
              </li>
              <li>
                <Button onClick={() => logout()} variant="destructive">
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to={"/auth/register"}
                  style={({ isActive }) => {
                    return isActive
                      ? { textDecoration: "underline", color: "#fff" }
                      : {};
                  }}
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/auth/login"}
                  style={({ isActive }) => {
                    return isActive
                      ? { textDecoration: "underline", color: "#fff" }
                      : {};
                  }}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
