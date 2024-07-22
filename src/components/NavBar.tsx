import { useAuth } from "@/context/AuthContext";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./ui/mode-toggle";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
// import { ChevronDown } from "@lucide/react"; // Import ChevronDown from Lucid React

interface User {
  username: string;
}

function NavBar() {
  const { loggedInUser, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="sticky top-0 bg-blue-900 shadow-md flex z-40 items-center p-4">
      <div className="max-w-5xl w-[1024px] mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-3xl font-bold text-white transition-colors hover:text-gray-300"
          style={({ isActive }) => (isActive ? { textDecoration: "underline" } : {})}
        >
          RevieU
        </NavLink>
        <ul className="flex gap-6 items-center text-white font-medium">
          <li>
            <NavLink
              to="/contact"
              className="hover:text-gray-300 transition-colors"
              style={({ isActive }) => (isActive ? { textDecoration: "underline" } : {})}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-gray-300 transition-colors"
              style={({ isActive }) => (isActive ? { textDecoration: "underline" } : {})}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bsnss"
              style={({ isActive }) => (isActive ? { textDecoration: "underline", color: "#fff" } : {})}
            >
              Businesses
            </NavLink>
          </li>
          {!loggedInUser && (
            <>
              <li>
                <NavLink
                  to="/auth/register"
                  className="hover:text-gray-300 transition-colors"
                  style={({ isActive }) => (isActive ? { textDecoration: "underline" } : {})}
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/auth/login"
                  className="hover:text-gray-300 transition-colors"
                  style={({ isActive }) => (isActive ? { textDecoration: "underline" } : {})}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {loggedInUser ? (
          <div className="relative">
            <Button onClick={toggleDropdown} className="bg-inherit hover:bg-inherit mt-2">
              <Avatar className="mr-2">
                <AvatarImage
                  src={`/src/images/${loggedInUser.imgUrl}`}
                  className="size-14 rounded-full"
                />
                <AvatarFallback className="size-8 rounded-full flex items-center justify-center">
                  {loggedInUser.username.charAt(0)}
                </AvatarFallback>
              </Avatar>
              {/* <span>{loggedInUser.username}</span> */}
              <ChevronDown className="ml-2" /> {/* Use ChevronDown from Lucid React */}
            </Button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                <ul className="p-2">
                  <li className="flex justify-center items-center p-2 hover:bg-gray-200">
                    <Avatar className="mr-2">
                      <AvatarImage
                        src={`/src/images/${loggedInUser.imgUrl}`}
                        className="size-8 rounded-full"
                      />
                      <AvatarFallback className="size-6 rounded-full flex items-center justify-center">
                        {loggedInUser.username.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span>{loggedInUser.username}</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-200">
                    <Button onClick={() => logout()} variant="destructive" className="w-full">
                      Logout
                    </Button>
                  </li>
                  <li className="flex p-2 justify-center hover:bg-gray-200 ">
                    <ModeToggle />
                  </li>
                </ul>
              </div>
            )}
          </div>
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
