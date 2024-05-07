/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const List = () => {
    const data=[ 
        "Maruti Suzuki"

   ,"Mahindra"

   ,"Tata"

   ,"Toyota"

   ,"Hyundai"

   ,"BMW"

   ,"Mercedes-Benz"

   ,"Audi"

   ,"Kia"

   ,"Land Rover"

   ,"Porsche"

   ,"MG"

   ,"Skoda"

   ,"Lamborghini"

   ,"Lexus"

   ,"Citroen"

   ,"Volvo"

   ,"Honda"

   ,"Volkswagen"

   ,"Jeep"

   ,"Renault"

   ,"Ferrari"

   ,"Jaguar"

   ,"MINI"

   ,"BYD"

   ,"Aston Martin"

   ,"Nissan"

   ,"Maserati"

   ,"Rolls-Royce"

   ,"McLaren"

   ,"Force Motors"

   ,"Isuzu"

   ,"Bentley"

   ,"Bugatti"

   ,"Lotus"]
//   const showBrand=false;
  const [showBrand,setShowBrand]=useState(true)
  console.log("hello",showBrand)
  const showBrands=()=>{
    setShowBrand(!showBrand);
  }
    return (
        <div className="p-3  m-auto w-3/4">
        <div > <h2 className='pb-2 font-bold'>All Brands</h2></div>
        <div className="border-2 text-center ">
        <div className= {`flex text-center p-3  ${showBrand?"h-72":"h-full"} max-h-full `}>
                  <ul className=" flex  flex-wrap   justify-center overflow-hidden  gap-2  text-center">
              {data.map((curr)=>(
                <>
                    <li  className="h-32 w-40 max-w-full border-2">
                        <a href="#" > 
                              <img src="data:image/png;base64,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" 
                              className=" w-full" alt="no"/>
                    <h2 >{curr}</h2>
                        </a>
                  
                </li>
                </>
              ))}
                 </ul>
    
          
        </div>
          <div className="p-5 bg-gray-300/[0.6] font-bold">
                <button onClick={showBrands}>{showBrand?"show More":"Show Less"}</button>
            </div>
            </div>
        </div>
    );
};

export default List;
