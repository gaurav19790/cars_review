import "./App.css";
import { Banner, Footer, Header, Brands, Cards, FindCars, SearchPage, CarDetail } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./components/pages/Contact";
import Blogs from "./components/pages/Blogs";
import AboutUs from "./components/pages/AboutUs";
import React, { Suspense } from "react";
const AA =React.lazy(() => import('./components/SearchPage'));
const Search =()=>{
  return <Suspense  fallback={<div>loading..</div>}> <AA/></Suspense>}

const Home = () => {
  const data = [
    {
      title: "swift",
      photo:
        "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2019/10/Dodge-Challenger-Demon-1.jpg",
      header: "Slider 01",
      para: "love the car drive the fast",
    },
    {
      title: "design",
      photo:
        "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Slider 02",
      para: "love the car drive the fast",
    },
    {
      title: "design",
      photo:
        "https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Slider 03",
      para: "love the car drive the fast",
    },
    {
      title: "design",
      photo:
        "https://images.unsplash.com/photo-1608340821332-3a73fadd890c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Slider 04",
      para: "love the car drive the fast",
    },
    {
      title: "design",
      photo:
        "https://images.unsplash.com/photo-1573074556015-71d2140a6372?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Slider 05",
      para: "love the car drive the fast",
    },
    {
      title: "design",
      photo:
        "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2019/10/Dodge-Challenger-Demon-1.jpg",
      header: "Slider 01",
      para: "love the car drive the fast",
    },
    {
      title: "design",
      photo:
        "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Slider 02",
      para: "love the car drive the fast",
    },
    {
      title: "design",
      photo:
        "https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Slider 03",
      para: "love the car drive the fast",
    },
    {
      title: "design",
      photo:
        "https://images.unsplash.com/photo-1608340821332-3a73fadd890c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Slider 04",
      para: "love the car drive the fast",
    },
    {
      title: "design",
      photo:
        "https://images.unsplash.com/photo-1573074556015-71d2140a6372?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Slider 05",
      para: "love the car drive the fast",
    },
  ];
  return (
    <div className="App text-sm md:text-base">
      
      {/* banner */}
      <Banner data={data} />
      <div className=" ml-3">
        <Brands />
        <FindCars />
        <Cards data={data} />
        <Cards data={data} />
      </div>
      <Footer />
    </div>
  );
};

const NoPage =()=>{
return (
  <div className="m-auto">
    NO Page found 404
  </div>
)
}
const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="About" element={<AboutUs />} />
          <Route path="*" element={<NoPage />} /> 
          
          <Route path="search" element={<Search />} />
          <Route path="search/*" element={<CarDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
