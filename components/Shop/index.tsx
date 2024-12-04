'use client';

import React from "react";
import SectionHeader from "../Common/SectionHeader";
// import BlogItem from "./BlogItem";
import ShopItem from "./ShopItem";
// import BlogData from "./blogData";
import { useEffect, useState } from 'react';
import axios from "axios";
const Shop =  () => {
  const[books,setBooks] = useState([])

  useEffect( ()=>{
    const fetchAllBooks = async () =>{
    try{
      // const res = await axios.get(`http://localhost:8800/shop`);

      const res = await axios.get("https://kk.pp.paxcatholictv.org/posts")
      setBooks(res.data)
      console.log(res)
    }
    catch(err){
      console.log(err)
    }
  }
    fetchAllBooks()
  },[])
  return (
    <section className="py-24 relative">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full md:px-16 px-10 md:pt-16 pt-10 pb-10 bg-carColor rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
      <div className="flex-col justify-end items-center lg:gap-16 gap-10 flex">
        {/* <img src="https://pagedone.io/asset/uploads/1717500460.png" alt="pagedone logo image" className="object-cover" /> */}
        <div className="flex-col justify-center items-center gap-10 flex">
          <div className="flex-col justify-start items-center gap-2.5 flex">
            <h2 className="text-center text-emerald-400 md:text-6xl text-5xl font-bold font-manrope leading-normal">Coming Soon</h2>
            <p className="text-center text-black text-base font-normal leading-relaxed">Our Shop Will Be available soon!</p>
          </div>
          <div className="flex items-start justify-center w-full gap-2 count-down-main">
            <div className="timer flex flex-col gap-0.5">
              <div >
                <h3 className="countdown-element days text-center text-white text-2xl font-bold font-manrope leading-9" />
              </div>
              <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">DAYS</p>
            </div>
            <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
            <div className="timer flex flex-col gap-0.5">
              <div >
                <h3 className="countdown-element hours text-center text-white text-2xl font-bold font-manrope leading-9" />
              </div>
              <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">HRS</p>
            </div>
            <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
            <div className="timer flex flex-col gap-0.5">
              <div >
                <h3 className="countdown-element minutes text-center text-white text-2xl font-bold font-manrope leading-9" />
              </div>
              <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">MINS</p>
            </div>
            <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
            <div className="timer flex flex-col gap-0.5">
              <div >
                <h3 className="countdown-element seconds text-center text-white text-2xl font-bold font-manrope leading-9" />
              </div>
              <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full"></p>
            </div>
          </div>
          <div className="w-full flex-col justify-center items-center gap-5 flex">
            <h6 className="text-center text-emerald-400 text-base font-semibold leading-relaxed"></h6>
            <div className="justify-center items-center gap-2.5 flex sm:flex-row flex-col">
              <input type="text" className="w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex" placeholder="Type your mail..." />
              <button className="sm:w-fit w-full px-3.5 py-2 bg-cardColor hover:bg-emerald-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-gray-900 text-sm font-medium leading-6 whitespace-nowrap">Notify Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm font-normal leading-snug">Get in touch with us: <a  className="hover:text-gray-100 transition-all duration-700 ease-in-out" > mail@pagedone.com</a></p>
    </div>
  </div>
</section>
// {/*Javascript*/}
    // <section className="py-20 lg:py-25 xl:py-30">
    //   <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
    //     {/* <!-- Section Title Start --> */}
    //     <div className="animate_top mx-auto text-center">
    //       <SectionHeader
    //         headerInfo={{
    //           title: `Shop`,
    //           subtitle: `Our Digital Shop`,
    //           description: `Browse and buy items to your liking`,
    //         }}
    //       />
    //     </div>
    //     {/* <!-- Section Title End --> */}
    //   </div>

    //   <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
    //     <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
    //     {/* {books.map((book, index) => (
    //       <BlogItem key={`project-${book.id}`} index={index} {...book} />
    //     ))}
    //       {books.slice(0, 3).map((book, index) => (
    //         <BlogItem index={index} key={index} {...book}/>
    //       ))} */}
    //           {books.slice(0, 3).map((shop, key) => (
    //         <ShopItem shop={shop} key={key} />
    //       ))}
    //     </div>
    //   </div>
    // </section>

  );
};

export default Shop;
// 41903417