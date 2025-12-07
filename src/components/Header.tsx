import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchBarProps {
  onSearch: (searchItem: string) => void;
}

const Header: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchItem(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchItem);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // refresh UI
  };

  const navlinks = [
    { id: "home", name: "Home" },
    { id: "shop", name: "Shop" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <div className="flex items-center justify-around p-4 shadow-md bg-white">
      {/* LOGO */}
      <div className="logo mr-36 font-bold text-2xl">
        <h1>Shopz</h1>
      </div>

      {/* NAVIGATION */}
      <div>
        <ul className="flex space-x-8 gap-7">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link to={`/${link.id}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="user flex items-center gap-4">

        {/* SEARCH */}
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchItem}
            onChange={handleSearchChange}
            onKeyDown={handleKeyPress}
            className="search-input border px-2 py-1 rounded"
          />
        </div>

        {/* CONDITIONAL RENDERING */}
        {!isLoggedIn ? (
          // ============================
          // 🔹 SHOW LOGIN / SIGNUP BUTTONS WHEN LOGGED OUT
          // ============================
          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-3 py-1 border rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Signup
            </Link>
          </div>
        ) : (
          // ============================
          // 🔹 SHOW USER DROPDOWN WHEN LOGGED IN
          // ============================
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <User className="bg-gray-300 rounded-full p-1 size-9 cursor-pointer" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>Profile</DropdownMenuItem>

              <DropdownMenuItem>
                <Link to="/mylist" className="cursor-default">
                  Shopping list
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                variant="destructive"
                onClick={handleLogout}
              >
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default Header;
