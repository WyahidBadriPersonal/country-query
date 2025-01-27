import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 border-b-4 border-indigo-400">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <NavLink
          className="flex-none font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
          to="/"
          aria-label="Brand"
        >
          Country Explorer
        </NavLink>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <NavLink
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            to="/countries"
          >
            Countries
          </NavLink>
          <NavLink
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            to="/about"
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
