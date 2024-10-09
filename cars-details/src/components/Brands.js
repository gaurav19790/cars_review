/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const brand = [
    {
      title: "Maruti Suzuki",
      brandName: "Maruti Suzuki",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=80",
    },
    {
      title: "Mahindra",
      brandName: "Mahindra",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=80",
    },
    {
      title: "Tata",
      brandName: "Tata",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=80",
    },
    {
      title: "Toyota",
      brandName: "Toyota",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=80",
    },
    {
      title: "Hyundai",
      brandName: "Hyundai",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=80",
    },
    {
      title: "BMW",
      brandName: "BMW",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=80",
    },
    {
      title: "Mercedes-Benz",
      brandName: "Mercedes-Benz",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80",
    },
    {
      title: "Audi",
      brandName: "Audi",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80",
    },
    {
      title: "Kia",
      brandName: "Kia",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=80",
    },
    {
      title: "Land Rover",
      brandName: "Land Rover",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/23/brands/logos/land-rover1647236056893.jpg?v=1647236057234&q=80",
    },
    {
      title: "Porsche",
      brandName: "Porsche",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/19/brands/logos/porsche.jpg?v=1631164048727&q=80",
    },
    {
      title: "MG",
      brandName: "MG",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=80",
    },
    {
      title: "Skoda",
      brandName: "Skoda",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/15/brands/logos/skoda1681982956420.jpg?v=1681982956529&q=80",
    },
    {
      title: "Lamborghini",
      brandName: "Lamborghini",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/30/brands/logos/lamborghini.jpg?v=1631163814246&q=80",
    },
    {
      title: "Lexus",
      brandName: "Lexus",
      image: "https://imgd.aeplcdn.com/0X0/cw/brands/logos/lexus.png?v=10&q=80",
    },
    {
      title: "Citroen",
      brandName: "Citroen",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/74/brands/logos/citroen1649763818937.jpg?v=1649763819072&q=80",
    },
    {
      title: "Volvo",
      brandName: "Volvo",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/37/brands/logos/volvo.jpg?v=1641478299001&q=80",
    },
    {
      title: "Honda",
      brandName: "Honda",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/7/brands/logos/honda.jpg?v=1630056209549&q=80",
    },
    {
      title: "Volkswagen",
      brandName: "Volkswagen",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/20/brands/logos/volkswagen.jpg?v=1630056096439&q=80",
    },
    {
      title: "Jeep",
      brandName: "Jeep",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/43/brands/logos/jeep.jpg?v=1631163646486&q=80",
    },
    {
      title: "Renault",
      brandName: "Renault",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/45/brands/logos/renault.jpg?v=1630057266767&q=80",
    },
    {
      title: "Ferrari",
      brandName: "Ferrari",
      image:
        "https://imgd.aeplcdn.com/0X0/cw/brands/logos/ferrari.png?v=10&q=80",
    },
    {
      title: "Jaguar",
      brandName: "Jaguar",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/44/brands/logos/jaguar.jpg?v=1631163525508&q=80",
    },
    {
      title: "MINI",
      brandName: "MINI",
      image: "https://imgd.aeplcdn.com/0X0/cw/brands/logos/mini.png?v=10&q=80",
    },
    {
      title: "BYD",
      brandName: "BYD",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/111/brands/logos/byd1650348943682.jpg?v=1650348943775&q=80",
    },
    {
      title: "Aston Martin",
      brandName: "Aston Martin",
      image:
        "https://imgd.aeplcdn.com/0X0/cw/brands/logos/aston-martin.png?v=10&q=80",
    },
    {
      title: "Nissan",
      brandName: "Nissan",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/21/brands/logos/nissan.jpg?v=1631163973143&q=80",
    },
    {
      title: "Maserati",
      brandName: "Maserati",
      image: "https://imgd.aeplcdn.com/0X0/n/gph63sa_1483779.jpg?q=80",
    },
    {
      title: "Rolls-Royce",
      brandName: "Rolls-Royce",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/25/brands/logos/rolls-royce.jpg?v=1631164135042&q=80",
    },
    {
      title: "McLaren",
      brandName: "McLaren",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/77/brands/logos/mclaren1649762557086.jpg?v=1649762557267&q=80",
    },
    {
      title: "Force Motors",
      brandName: "Force Motors",
      image:
        "https://imgd.aeplcdn.com/0X0/cw/brands/logos/force-motors.png?v=10&q=80",
    },
    {
      title: "Isuzu",
      brandName: "Isuzu",
      image: "https://imgd.aeplcdn.com/0X0/cw/brands/logos/isuzu.png?v=10&q=80",
    },
    {
      title: "Bentley",
      brandName: "Bentley",
      image:
        "https://imgd.aeplcdn.com/0X0/cw/brands/logos/bentley.png?v=10&q=80",
    },
    {
      title: "Bugatti",
      brandName: "Bugatti",
      image:
        "https://imgd.aeplcdn.com/0X0/cw/brands/logos/bugatti.png?v=10&q=80",
    },
    {
      title: "Lotus",
      brandName: "Lotus",
      image:
        "https://imgd.aeplcdn.com/0X0/n/cw/ec/123/brands/logos/lotus1700211136329.jpg?v=1700211136743&q=80",
    },
  ];
  //   const showBrand=false;
  const [brands, setBrands] = useState(brand);
  const [showBrand, setShowBrand] = useState(true);
  const showBrands = () => {
    setShowBrand(!showBrand);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/v1/brands");
        const carData = await res.json();
        setBrands(carData);
        console.log(carData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-3  m-auto sm:w-3/4">
      <div>
        {" "}
        <h2 className="pb-2 font-bold">All Brands</h2>
      </div>
      <div className="border-2 text-center rounded-md ">
        <div
          className={`flex text-center py-4 px-1  ${
            showBrand ? "h-56 md:h-72 " : "h-full"
          } max-h-full `}
        >
          <ul className=" flex  flex-wrap   justify-center overflow-hidden text-center">
            {brands.map(({ brandName, image }, index) => (
              <li
                key={index}
                className="h-24 w-28 px-1 py-4 md:w-40 md:h-32 max-w-full border-2 rounded-xl border-[#6f6f6f] text-[#6f6f6f] bg-white"
              >
                <Link to={`/new/${brandName?.toLowerCase()}`}>
                  <img src={image} className=" w-full px-6 py-2" alt="no" />
                  <h2 className="text-sm text-black font-semibold">
                    {brandName}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5 bg-gray-300/[0.6] font-bold">
          <button onClick={showBrands}>
            {showBrand ? "show More" : "Show Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brands;
