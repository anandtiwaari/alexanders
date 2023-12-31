import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <header className="bg-[red]">
        <nav
          className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-white
          bg-[#353535]
        "
        >
          <div>
            <a href="#" className="text-white">
              Aleksandra's Poems
            </a>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li>
                <Link
                  className="md:p-4 py-2 block text-white hover:text-purple-400"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <Link
                to={"/poemDetail"}
                className="md:p-4 py-2 block text-white hover:text-purple-400"
              >
                Poem
              </Link>
              {/* <li>
                <Link to="/poem" preventScrollReset={true} />
              </li> */}

              <li>
                <a
                  className="md:p-4 py-2 block text-white hover:text-purple-400"
                  href="#"
                >
                  About Us
                </a>
              </li>
              {/* <li>
                <a
                  className="md:p-4 py-2 block text-white hover:text-purple-400"
                  href="#"
                >
                  Blog
                </a>
              </li> */}
              {/* <li>
                <a
                  className="md:p-4 py-2 block text-white hover:text-purple-400 text-purple-500"
                  href="#"
                >
                  Sign Up
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
