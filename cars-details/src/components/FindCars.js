/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

function FindCars() {
    const [active,setActive] =useState("budget");
    const dataSet=[ "budget","body type", "fuel type","transmission","seating capacity"]
    const ShowDetails=()=>{
        switch (active) {
            case "budget":
                return <Budget/>
            case "body type":
                return <BodyType/>
            default:
                break;
        }
    }
  return (
    <div className="p-3  m-auto w-3/4 h-full">
        
        <div>
        <h2 className='pb-2 font-bold'>Find Your Car</h2>
      </div>
        <ul className='flex gap-2 uppercase'>
           {dataSet.map((curr,index)=>(
            <li key={index} onClick={()=>{setActive(curr)}} style={{color:active===curr?"#00afa0":"white"}} className={` p-1 ${active===curr?"  bg-slate-400/[0.6] underline underline-offset-8":""}`} >
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
        <div className='w-full h-full p-5'>
            <div className='flex flex-wrap gap-3 uppercase'>
                {
                    budgetList.map((curr)=>(
                        <>
<a href='#' className='p-2 px-4 rounded-2xl bg-gray-100/[0.3]'> {curr}</a>
                        </>
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
        <div className='grid grid-cols-2  uppercase'>
            {
                bodyType.map((curr)=>(
                    <>
                    <a href='#' >
                    <div className=' flex p-2 px-4 h-20  items-center bg-white text-black border-2'>
                        <img src="https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1" className='w-40 h-full p-3' alt={curr}/> 
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