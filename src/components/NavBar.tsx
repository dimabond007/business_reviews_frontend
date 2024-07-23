import { useAuth } from "@/context/AuthContext";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./ui/mode-toggle";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

interface User {
  username: string;
}

function NavBar() {
  const { loggedInUser, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 bg-blue-900 shadow-md flex z-40 items-center p-4">
      <div className="max-w-5xl w-full mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-3xl font-bold text-white transition-colors hover:text-gray-300"
          style={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : {}
          }
        >
          RevieU
        </NavLink>

        <div className="md:hidden">
          <Button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        <div
          className={`md:flex md:items-center md:gap-6 md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-900 md:static md:bg-transparent md:top-0 md:relative md:flex-row`}
        >
          <ul className="flex flex-col md:flex-row gap-6 items-center text-white font-medium p-4 md:p-0">
            <li>
              <NavLink
                to="/contact"
                className="hover:text-gray-300 transition-colors"
                style={({ isActive }) =>
                  isActive ? { textDecoration: "underline" } : {}
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-300 transition-colors"
                style={({ isActive }) =>
                  isActive ? { textDecoration: "underline" } : {}
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bsnss"
                style={({ isActive }) =>
                  isActive ? { textDecoration: "underline", color: "#fff" } : {}
                }
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
                    style={({ isActive }) =>
                      isActive ? { textDecoration: "underline" } : {}
                    }
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/auth/login"
                    className="hover:text-gray-300 transition-colors"
                    style={({ isActive }) =>
                      isActive ? { textDecoration: "underline" } : {}
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {loggedInUser ? (
            <div className="relative">
              <Button
                onClick={toggleDropdown}
                className="bg-inherit hover:bg-inherit mt-2 flex items-center"
              >
                <Avatar className="mr-2">
                  <AvatarImage
                    src={`/src/images/${loggedInUser.imgUrl}`}
                    className="size-14 rounded-full"
                  />
                  <AvatarFallback className="size-8 rounded-full flex items-center justify-center">
                    {loggedInUser.username.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:inline">
                  {loggedInUser.username}
                </span>
                <ChevronDown className="ml-2" />
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
                      <Button
                        onClick={() => logout()}
                        variant="destructive"
                        className="w-full"
                      >
                        Logout
                      </Button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
