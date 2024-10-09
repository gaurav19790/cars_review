import React, { useState } from "react";
import Search from "./SearchBar";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState("Home");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const lists = [
    {
      id: 1,
      title: "Home",
      page: "/",
    },
    { id: 2, title: "Blogs", page: "/blogs" },
    {
      id: 3,
      title: "About",
      page: "/about",
    },
    {
      id: 4,
      title: "Contact",
      page: "contact",
    },
  ];
  return (
    <div>
      <header
        className=" w-full flex  justify-between h-auto lg:h-12 fixed bg-transparent px-3
      p-1    md:justify-items-center  z-20 items-center  "
      >
        <div className="font-bold p-1 ">
          <Link to={"/"}>Gaurav😎</Link>
        </div>
        <div className="flex items-center ">
          <div className="w-full  lg:hidden">
            {showSearchBar ? <Search /> : ""}
          </div>
          <div className="w-full hidden lg:flex">
            <Search />
          </div>
          <ul className="p-1 m-0  justify-center gap-5 font-bold hidden md:flex bg-transparent">
            {lists.map(({ title, page }, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(title);
                }}
                className={` ${
                  active === title
                    ? " text-[#00afa0]  underline underline-offset-8 rounded-lg"
                    : "white"
                }`}
              >
                <Link to={page}> {title}</Link>
              </li>
            ))}
          </ul>
          <div
            className="hover:cursor-pointer lg:hidden p-1"
            onClick={() => setShowSearchBar(!showSearchBar)}
          >
            {!showSearchBar ? (
              <svg
                className="w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            ) : (
              <div className=" px-2 rounded-2xl w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
              </div>
            )}
          </div>
          <div
            className="hover:cursor-pointer md:hidden p-1"
            onClick={() => setShowNavBar(!showNavBar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill="#e8eaed"
            >
              <g fill="none">
                <path d="M0 0h24v24H0V0z" />
                <path d="M0 0h24v24H0V0z" opacity=".87" />
              </g>
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
            </svg>
          </div>
        </div>
      </header>
      {/* <div className="pt-11"></div> */}
      <div
        className={`hover:cursor-pointer md:hidden ${
          showNavBar ? "" : "hidden"
        }`}
      >
        <div className="w-full">
          <ul className="flex bg-[#353232] border-2 px-2 ">
            {lists.map(({ title, page }, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(title);
                }}
                className={`p-2 ${
                  active === title
                    ? " text-[#00afa0]  underline underline-offset-8 rounded-lg"
                    : "white"
                }`}
              >
                <Link to={page}> {title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Header;
