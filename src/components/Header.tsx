import React, { useState } from "react";
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
  const [searchItem, setSearchItem] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchItem(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchItem);
    }
  };

  const navlinks = [
    { id: "home", name: "Home" },
    { id: "shop", name: "Shop" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <div className="flex items-center justify-around p-4 shadow-md bg-white">
      <div className="logo mr-36">
        <h1>LOGO</h1>
      </div>

      <div>
        <ul className="flex space-x-8 gap-7">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link to={`/${link.id}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="user flex items-center gap-4">
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

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild><User className="bg-gray-300 rounded-full p-1 size-9"/></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem variant="default">Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
