/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
const Card = ({ photo, title }, index) => {
  return (
    <a href="/" className="flex h-full w-40">
      <img
        aria-hidden={index !== 0}
        src={photo}
        alt="dd"
        className="w-full h-full rounded-2xl hover:scale-[1] hover:transform-gpu object-cover "
      />
      <p className="absolute bottom-6 p-2 px-3 bg-slate-400/[0.6] rounded-xl">
        {title}
      </p>
    </a>
  );
};
const Cards = ({ data, title }) => {
  return (
    <div className=" p-3 pt-0  m-auto ">
      <div>
        <h2 className="pb-2 font-bold">{title}</h2>
      </div>
      <div className=" flex gap-3 h-36 p-5 relative rounded-2xl overflow-x-auto no-scrollbar">
        {data.map(({ photo, title }, index) => (
          <div key={index}>
            <Card photo={photo} title={title} />
          </div>
        ))}
      </div>

      {/* <div className='h-52 flex gap-2 p-5 relative rounded-2xl overflow-x-auto no-scrollbar'> */}

      {/* <img  src={data[0].photo} alt='dd' className='rounded-2xl hover:scale-[1.08] hover:transform-gpu '/>
            <span className='absolute p-2'>Cards</span> */}

      {/* {data.map(({photo})=>(
<img src={photo} alt='dd'/>
        ))} */}
      {/* </div> */}
    </div>
  );
};

export default Cards;
