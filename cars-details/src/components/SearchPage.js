import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSearchParams } from "react-router-dom";

export const useURLID = () => {
  const [searchParams] = useSearchParams();
  const names = searchParams.get("name")?.toLowerCase();
  const brands = searchParams.get("brand")?.toLowerCase();
  const budgets = searchParams.get("budget")?.toLowerCase();
  return { names,brands,budgets };
};
const SearchPage = () => {
  const [search, setSearch] = useState([]);
  const {names,brands,budgets}=useURLID();
console.log(budgets)
  useEffect( ()=> {
    const  fetchData=async()=> {
      try {
         const res = await fetch("http://localhost:4000/");
      const carData = await res.json();
      setSearch(carData);
      } catch (error) {
       console.log(error); 
      }
     
    }
    fetchData();
  }, []);

  return (
    <div className="h-full w-full relative">
      <div className=" gap-2 w-full h-96">
<<<<<<< HEAD
        {search.length? search?.filter(({name,brand})=>((name?.includes(names))||(brand?.includes(brands))||((names==null)&&(brands==null)))).map(
=======
        {search?.filter(({name,brand})=>((name?.includes(names))||(brand?.includes(brands))||((names==null)&&(brands==null)))).map(
>>>>>>> 6947db36ea80d38ca976c8f6e230937f5ace8e64
          (
            { name, price, model, mileage, engine, fuel, seatingCapacity },
            index
          ) => (
            // curr
            <Link to={`/search?name=${name.toLowerCase()}`} key={index}>
              <div className="flex ">
                <h1>{name} , </h1>{model} , {price} ,<p>{mileage}  ,{engine}  ,{fuel}  ,{seatingCapacity}  ,</p> </div>
            </Link>
          )
<<<<<<< HEAD
        ):<div>Error backend broke</div>}
=======
        )}
>>>>>>> 6947db36ea80d38ca976c8f6e230937f5ace8e64
      </div>
      <div>
        {/* {search.filter(names).} */}
      </div>
    </div>
  );
};

export default SearchPage;
