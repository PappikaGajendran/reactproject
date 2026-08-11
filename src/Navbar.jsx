import React from "react";
import { Search, Bell, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-indigo-600">
        Notes App
      </h1>

      {/* Search */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
        <Search className="text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search notes..."
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={22} className="text-gray-700 hover:text-indigo-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
          <User size={20} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;