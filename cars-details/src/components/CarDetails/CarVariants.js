import React from "react";

const CarVariants = () => {
  return (
    <div className="border-2 px-2 w-full">
      <table class="table-auto w-full">
        <thead>
          <tr className="border-b-2 text-justify">
            <th className="px-2">variants</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 ">
            <td className="px-2">Swift LXI</td>
            <td>Rs 7.45lakh</td>
          </tr>
          <tr className="border-b-2 ">
            <td className="px-2">Swift LXI</td>
            <td>Rs 7.45lakh</td>
          </tr>
          <tr className="border-b-1 ">
            <td className="px-2">Swift LXI</td>
            <td>Rs 7.45lakh</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarVariants;
