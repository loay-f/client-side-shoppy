import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import SideCart from "./SideCart";
import Footer from "../components/Footer";

const Navigation = () => {
  const [sideNav, setSideNav] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-11/12 mx-auto">
        <nav className="flex flex-row justify-between items-center py-5 bg-white xs:hidden">
          <NavLink to={`/`} className=" text-4xl font-semibold font-serif">
            Shoppy
          </NavLink>
          <ul className="flex flex-row items-center justify-around gap-10">
            <li className="flex items-center font-medium cursor-pointer relative group/nav">
              <NavLink className="hover:text-red-500">Men</NavLink>
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
              <ul className="bg-white z-10 hidden flex-col gap-2 absolute left-[-10px] top-5 w-40 rounded shadow-md py-3 text-gray-700 text-sm group-hover/nav:flex">
                <li className="relative group/drop-down px-2">
                  <div className="flex items-center justify-between py-1 hover:text-red-500">
                    T-shirts
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <ul className="bg-white hidden flex-col gap-2 absolute -top-2 right-[-100%] z-10 w-40 rounded  px-2 py-3 text-gray-700 text-sm group-hover/drop-down:flex">
                    <li className="py-1 hover:text-red-500">All T-shirts</li>
                    <li className="py-1 hover:text-red-500">basic T-shirt</li>
                    <li className="py-1 hover:text-red-500">printed T-shirt</li>
                    <li className="py-1 hover:text-red-500">
                      long sleeve T-shirt
                    </li>
                    <li className="hover:text-red-500 py-1">polo shirts</li>
                  </ul>
                </li>
                <li className="hover:text-red-500 py-1 px-2">shirts</li>
                <li className="relative group/drop-down px-2">
                  <div className="flex items-center justify-between py-1 hover:text-red-500">
                    trousers
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <ul className="bg-white hidden flex-col gap-2 absolute -top-3 right-[-100%] z-10 w-40 rounded -md px-2 py-3 text-gray-700 text-sm group-hover/drop-down:flex">
                    <li className="py-1 hover:text-red-500">Jeans</li>
                    <li className="py-1 hover:text-red-500">chino</li>
                    <li className="py-1 hover:text-red-500">cargo</li>
                    <li className="py-1 hover:text-red-500">joggers</li>
                  </ul>
                </li>
                <li className="hover:text-red-500 py-1 px-2">shoes</li>
              </ul>
            </li>
            <li className="flex items-center font-medium cursor-pointer relative group/nav">
              <NavLink>Kids</NavLink>
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
              <ul className="bg-white z-10 hidden flex-col gap-2 absolute left-[-10px] top-5 w-40 rounded shadow-md py-3 text-gray-700 text-sm group-hover/nav:flex">
                <li className="hover:text-red-500 py-1 px-2">T-shirts</li>
                <li className="hover:text-red-500 py-1 px-2">shirts</li>
                <li className="hover:text-red-500 py-1 px-2">trousers</li>
              </ul>
            </li>
            <li className="flex items-center font-medium cursor-pointer relative group/nav">
              <NavLink>Accessories</NavLink>
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
              <ul className="bg-white z-10 hidden flex-col gap-2 absolute left-[-10px] top-5 w-40 rounded shadow-md py-3 text-gray-700 text-sm group-hover/nav:flex">
                <li className="hover:text-red-500 py-1 px-2">Perfumes</li>
                <li className="hover:text-red-500 py-1 px-2">Socks</li>
                <li className="hover:text-red-500 py-1 px-2">Caps</li>
              </ul>
            </li>
            <li className="flex items-center font-medium cursor-pointer hover:text-red-500">
              <NavLink>Branches</NavLink>
            </li>
          </ul>
          <div className="flex gap-5">
            <Link to={"/register"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="gray"
                className="size-5 cursor-pointer hover:stroke-red"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>
            <div className="relative">
              <span className="absolute top-[-10px] right-[-10px] px-1 text-xs rounded-full bg-red-500 text-white">
                2
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="gray"
                className="size-5 cursor-pointer hover:stroke-red"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <SideCart open={open} setOpen={setOpen} />
          </div>
        </nav>

        {sideNav && <SideNavbar setSideNav={setSideNav} />}

        <nav className="hidden flex-row justify-between items-center py-5 bg-white px-3 xs:flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 cursor-pointer"
              onClick={() => {
                setSideNav(true);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <NavLink to={"/"} className="font-semibold text-3xl font-serif">
            shoppy
          </NavLink>
          <div>
            <div className="flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="gray"
                className="size-5 cursor-pointer hover:stroke-red"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <div className="relative">
                <span className="absolute top-[-10px] right-[-10px] px-1 text-xs rounded-full bg-red-500 text-white">
                  2
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="gray"
                  className="size-5 cursor-pointer hover:stroke-red"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />

      <Footer />
    </>
  );
};

export default Navigation;
