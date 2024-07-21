import { useAuth } from "@/context/AuthContext";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./ui/mode-toggle";

function NavBar() {
  const { loggedInUser, logout } = useAuth();
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
          {loggedInUser ? (
            <></>
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
        {loggedInUser ? (
          <ul className="flex gap-2 items-center">
            <li>
              <Button onClick={() => logout()} variant="destructive">
                Logout
              </Button>
            </li>
            <li>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="size-8 rounded-full"
                />
                <AvatarFallback className="size-8 rounded-full flex items-center justify-center">
                  {loggedInUser.username.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <ModeToggle />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
