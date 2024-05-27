import React, { useState } from "react";
import CarVariants from "./CarVariants";

const CarFullDetail = () => {
  const [active, setActive] = useState("");
  const dataSet = [
    "Variants",
    "Price",
    "Specs & Features",
    "Images",
    "Colours",
    "seating capacity",
  ];

  return (
    <div className="p-3  ">
      <ul className="flex gap-2 uppercase flex-wrap">
        {dataSet.map((curr, index) => (
          <li
            key={index}
            onClick={() => {
              setActive(curr);
            }}
            className={` p-1 ${active === curr
                ? " text-[#00afa0] bg-slate-400/[0.6] underline underline-offset-8 rounded-t-lg"
                : ""
              }`}
          >
            {curr}
          </li>
        ))}
      </ul>
      <div>
        <h1 className="font-bold text-xl bold">Variants</h1>
       <CarVariants/>
      </div>
      <div>Price</div>
      <div>Specs & Features</div>
      <div>Images</div>
      <div>Colours</div>
      <div>seating capacity</div>
    </div>
  );
};

export default CarFullDetail;
