/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

function FindCars() {
    const [active,setActive] =useState("budget");
    const dataSet=[ "budget","body type", "fuel type","transmission","seating capacity"]
    const ShowDetails=()=>{
        switch (active) {
            case "budget":
                return <Budget/>;
            case "body type":
                return <BodyType/>;
            case "fuel type":
                return <FuelType/>;
            case "transmission":
                return <Transmission/>;
            case "seating capacity":
                return <SeatingCapacity/>;
            default:
                break;
        }
    }
  return (
    <div className="p-3  m-auto sm:w-3/4 h-full ">  
        <div>
        <h2 className='pb-2 font-bold'>Find Your Car</h2>
      </div>
        <ul className='flex gap-2 uppercase flex-wrap'>
           {dataSet.map((curr,index)=>(
            <li key={index} onClick={()=>{setActive(curr)}}  className={` p-1 ${active===curr?" text-[#00afa0] bg-slate-400/[0.6] underline underline-offset-8 rounded-t-lg":"white"}`} >
               {curr}
            </li>
           ))} 
        </ul>
        <div className='w-full bg-gray-400 border-2 rounded-b-lg'>
        <ShowDetails/>
        </div>
    </div>
  )
}

export default FindCars

const Budget =()=>{
   const budgetList=["under 5 lakh","under 6 lakh","under 7 lakh","under 8 lakh","under 10 lakh","under 15 lakh","under 20 lakh","under 25 lakh","under 30 lakh","Luxury Cars"]
    return(
        <div className='w-full h-full p-4'>
            <div className='flex flex-wrap gap-3 uppercase '>
                {
                    budgetList.map((curr,index)=>(
                        
<a href='#' key={index} className='p-2 px-4 rounded-2xl bg-gray-100/[0.3] hover:bg-[#00afa0]'> {curr}</a>
                    
                    ))
                }

            </div>
        </div>
    )
}
const BodyType = ()=>{
    const bodyType=["suv","sedan","hatchback","compact suv","compact saden","muv","covertible","coupe","station wagon","Minivan","truck",""]
    return(
        <div className='w-full h-full '>
        <div className='grid grid-cols-3  uppercase'>
            {
                bodyType.map((curr,index)=>(
                   
                    <a href='#' key={index}>
                    <div className=' flex flex-wrap   p-2 px-4 h-20  items-center  bg-gray-100/[0.3] text-black border-2'>
                        <img src="https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1" className='w-40 h-full p-3' alt={curr}/> 
 <p>{curr}</p>
                    </div>
                    </a>
                  
                ))
            }

        </div>
    </div>
    )
}
const FuelType = ()=>{
    const feulType=["Petrol","Diesel","CNG","Electric","Hybrid",""]
    return(
        <div className='w-full h-full '>
        <div className='grid grid-cols-2  uppercase'>
            {
               feulType.map((curr,index)=>(
                    <>
                    <a href='#' key={index} >
                    <div className=' flex p-2 px-4 h-20  items-center  bg-gray-100/[0.3] text-black border-2'>
                        <img src="https://imgd.aeplcdn.com/0x0/cw/fuel/svg/petrol.svg?v=1" className='w-40 h-full p-3' alt={curr}/> 
 {curr}
                    </div>
                    </a>
                    </>
                ))
            }

        </div>
    </div>
    )
}

const Transmission = ()=>{
    const transmission=["Automatic","Manual"]
    return(
        <div className='w-full h-full '>
        <div className='grid grid-cols-2  uppercase'>
            {
               transmission.map((curr,index)=>(
                    <>
                    <a href='#' key={index}>
                    <div className=' flex p-2 px-4 h-20  items-center  bg-gray-100/[0.3] text-black border-2'>
                        <img src="https://imgd.aeplcdn.com/0x0/cw/transmission/svg/automatic_clr.svg?v3.0" className='w-40 h-full p-3' alt={curr}/> 
 {curr}
                    </div>
                    </a>
                    </>
                ))
            }

        </div>
    </div>
    )
}

const SeatingCapacity =()=>{
    const SeatingCapacity=["5 Seater","6 Seater","7 Seater","8 Seater"]
     return(
         <div className='w-full h-full p-5'>
             <div className='flex flex-wrap gap-3 uppercase '>
                 {
                     SeatingCapacity.map((curr,index)=>(
                         <>
 <a href='#' key={index} className='p-2 px-4 rounded-2xl bg-gray-100/[0.3] hover:bg-[#00afa0]'> {curr}</a>
                         </>
                     ))
                 }
 
             </div>
         </div>
     )
 }