import { useAuth } from "@/context/AuthContext";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./ui/mode-toggle";

function NavBar() {
  const { loggedInUser, logout } = useAuth();

  return (
    <nav className="sticky top-0 bg-blue-900 shadow-md flex items-center p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-3xl font-bold text-white transition-colors hover:text-gray-300"
          style={({ isActive }) => isActive ? { textDecoration: "underline" } : {}}
        >
          RevieU
        </NavLink>
        <ul className="flex gap-6 items-center text-white font-medium">
          <li>
            <NavLink
              to="/contact"
              className="hover:text-gray-300 transition-colors"
              style={({ isActive }) => isActive ? { textDecoration: "underline" } : {}}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-gray-300 transition-colors"
              style={({ isActive }) => isActive ? { textDecoration: "underline" } : {}}
            >
              About Us
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
                  to="/auth/register"
                  className="hover:text-gray-300 transition-colors"
                  style={({ isActive }) => isActive ? { textDecoration: "underline" } : {}}
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/auth/login"
                  className="hover:text-gray-300 transition-colors"
                  style={({ isActive }) => isActive ? { textDecoration: "underline" } : {}}
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
