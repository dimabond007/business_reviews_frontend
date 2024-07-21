import { useAuth } from "@/context/AuthContext";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

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
          {loggedInUser ? (
            <>
              <li>
                <NavLink
                  to="/bsnss"
                  className="hover:text-gray-300 transition-colors"
                  style={({ isActive }) => isActive ? { textDecoration: "underline" } : {}}
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
      </div>
    </nav>
  );
}

export default NavBar;
