/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Banner = ({ data }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === data.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return data.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="h-screen w-full relative">
      <div className=" col flex gap-2  m-auto rounded-xl  h-full  ">
        {data.map(({ title, photo, header, para }, index) => (
          <Link
            to={`/new/name=${title}`}
            key={index}
            href="#"
            className='w-full  relative inset-0 opacity-100 transition no-scrollbar overflow-hidden after:content-["] after:w-screen after:h-full after:absolute  after:left-0 after:bottom-0 after:bg-gradient-to-t after:from-black/[0.6] after:to-transparent  after:rounded-xl '
            aria-hidden={imageIndex !== index}
            style={{ display: imageIndex !== index ? "none" : "" }}
          >
            <img
              className="w-full h-full object-cover"
              aria-hidden={imageIndex !== index}
              src={photo}
              alt={title}
            />
            <div
              className="absolute left-1/4 top-3/4 z-20 w-10/12  flex   justify-center text-3xl"
              style={{ color: "antiquewhite" }}
            >
              <p className="uppercase " style={{ letterSpacing: "10px" }}>
                {title}
              </p>
              <h2 className="text-5xl p-5">{header}</h2>
              <p className="flex items-end">{para}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <button
          type="button"
          className="z-10 absolute top-24 sm:top-32 left-3 sm:left-12 bg-gray-400 p-1 rounded-lg"
          onClick={showPrevImage}
        >
          {"<"}
        </button>
        <button
          type="button"
          className="z-10 absolute top-24 sm:top-32 right-3 sm:right-12 bg-gray-400 p-1 rounded-lg "
          onClick={showNextImage}
        >
          {">"}
        </button>
      </div>
      {/* <div>
   <Search/>
</div> */}
    </div>
  );
};

export default Banner;
