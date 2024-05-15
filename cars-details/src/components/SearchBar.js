import React, { useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${search}`);
      }
  return (
    <form onSubmit={handleSubmit}  className=" items-center relative rounded-lg flex bg-white p-1 w-3/4 m-auto  ">
            <input
              type="text"
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="cars" value={search} 
              className=" block w-full rounded-md border-0  pl-2  focus:outline-white sm:text-sm sm:leading-6 text-black"
            />
            {/* <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00"/> */}

            <div className="hover:cursor-pointer">
           
              <svg
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
            </div>
          </form>
  )
}

export default Search