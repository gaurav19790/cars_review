import React, { useState } from "react";
import Search from "./SearchBar";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState("Home");
const [showSearchBar,setShowSearchBar]=useState(false);
  const lists = [
    {
      id: 1,
      title: "Home",
      page:"/"
    },
    { id: 2, title: "Blogs" ,page:"/blogs"},
    {
      id: 3,
      title: "About me",
      page:"/about"
    },
    {
      id: 4,
      title: "Contact us",
      page:"contact"
    },
  ];
  return (
    <div>
      <header className=" w-full flex flex-wrap justify-around relative
       lg:grid grid-cols-2  lg:grid-cols-3 grid-rows-1    h-12 lg:justify-center md:justify-items-center  z-20 items-center ">
        <div className="font-bold"><Link to={"/"}>Gaurav😎</Link></div>
        <ul className="p-1 m-0 flex justify-center gap-5 font-medium">
          {lists.map(({ title ,page}, index) => (
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
        <div className="hover:cursor-pointer lg:hidden" onClick={()=>(setShowSearchBar(!showSearchBar))}>
            {!showSearchBar?<svg
                className="w-6"
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
            :<div className="bg-white text-black px-2 rounded-2xl" >X</div>}  
            </div>
            {
              showSearchBar?<Search />:""
            }
            <div className="w-full hidden lg:flex">
                   <Search/>
            </div>
  
   
         
       
      </header>
      <Outlet/>
    </div>
  );
};

export default Header;
