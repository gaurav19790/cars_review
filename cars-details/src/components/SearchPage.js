import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSearchParams } from "react-router-dom";

export const useURLID = () => {
  const [searchParams] = useSearchParams();
  const names = searchParams.get("name")?.toLowerCase();
  const brands = searchParams.get("brand")?.toLowerCase();
  const budgets = searchParams.get("budget")?.toLowerCase();
  const under = searchParams.get("under")?.toLowerCase();
  const query = searchParams.get("query")?.toLowerCase();
  return { names, brands, budgets, under, query };
};
const SearchPage = () => {
  const [search, setSearch] = useState([]);
  const { names, brands, budgets, under, query } = useURLID();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/v1/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstParam: names,
            // secondParam: 'yourOtherValue',
          }),
        });
        const carData = await res.json();
        setSearch(carData);
        console.log(carData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen w-full relative  m-auto sm:w-3/4 pt-14 ">
      <div className=" gap-2 w-full h-full">
        {search.length ? (
          search
            ?.filter(
              ({ name, brand }) =>
                name?.includes(names) ||
                brand?.includes(brands) ||
                (names == null && brands == null)
            )
            .map(
              (
                { name, price, model, mileage, engine, fuel, seatingCapacity },
                index
              ) => (
                // curr
                <Link
                  to={`/search/carDetail=${name.toLowerCase()}`}
                  key={index}
                >
                  <div className="flex border-2  gap-2 m-2 ">
                    <img
                      className="w-56 h-full"
                      src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80"
                      alt="car"
                    />
                    <div className=" text-center rounded-md ">
                      <h1>{name} , </h1>
                      {model} , {price} ,
                      <p>
                        {mileage} ,{engine} ,{fuel} ,{seatingCapacity} ,
                      </p>
                    </div>
                  </div>
                </Link>
              )
            )
        ) : (
          <div>data is not coming backend broke</div>
        )}
      </div>
      <div>{/* {search.filter(names).} */}</div>
    </div>
  );
};

export default SearchPage;
