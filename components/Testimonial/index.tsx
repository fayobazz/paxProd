// "use client";
// import SectionHeader from "../Common/SectionHeader";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { motion } from "framer-motion";
// import SingleTestimonial from "./SingleTestimonial";
// import { testimonialData } from "./testimonialData";
// import { useEffect, useState } from 'react';
// import axios from "axios";
// const Testimonial = () => {
//   const[books,setBooks] = useState([])

//   useEffect( ()=>{
//     const fetchAllBooks = async () =>{
//     try{
//       // const res = await axios.get(`http://localhost:8800/feedback`);

//       const res = await axios.get("https://kk.pp.paxcatholictv.org/feedback")
//       setBooks(res.data)
//       console.log(res)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
//     fetchAllBooks()
//   },[])
//   return (
//     <>
//       <section>
//         <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
//           {/* <!-- Section Title Start --> */}
//           <div className="animate_top mx-auto text-center">
//             <SectionHeader
//               headerInfo={{
//                 title: `TESTIMONIALS`,
//                 subtitle: `Client’s Testimonials`,
//                 description: `Here are some of the testimonials we got from our audiences and clients`,
//               }}
//             />
//           </div>
//           {/* <!-- Section Title End --> */}
//         </div>

//         <motion.div
//           variants={{
//             hidden: {
//               opacity: 0,
//               y: -20,
//             },

//             visible: {
//               opacity: 1,
//               y: 0,
//             },
//           }}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 1, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
//         >
//           {/* <!-- Slider main container --> */}
//           <div className="swiper testimonial-01 mb-20 pb-22.5">
//             {/* <!-- Additional required wrapper --> */}
//             <Swiper
//               spaceBetween={50}
//               slidesPerView={2}
//               autoplay={{
//                 delay: 2500,
//                 disableOnInteraction: false,
//               }}
//               pagination={{
//                 clickable: true,
//               }}
//               modules={[Autoplay, Pagination]}
//               breakpoints={{
//                 // when window width is >= 640px
//                 0: {
//                   slidesPerView: 1,
//                 },
//                 // when window width is >= 768px
//                 768: {
//                   slidesPerView: 2,
//                 },
//               }}
//             >
//               {books.map((feedback, key) => (
//                 <SwiperSlide key={key}>
//                   <SingleTestimonial feedback={feedback} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// };

// export default Testimonial;
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleTestimonial from "./SingleTestimonial";

const Testim = () => {

  const[books,setBooks] = useState([])

  useEffect( ()=>{
    const fetchAllBooks = async () =>{
    try{
      const res = await axios.get(`http://localhost:8800/feedback`);

      // const res = await axios.get("https://kk.pp.paxcatholictv.org/feedback")
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
    <>
<div>
  <style dangerouslySetInnerHTML={{__html: "\n        .swiper-button-prev:after,\n        .swiper-rtl .swiper-button-next:after {\n            content: '' !important;\n        }\n\n        .swiper-button-next:after,\n        .swiper-rtl .swiper-button-prev:after {\n            content: '' !important;\n        }\n\n        .swiper-button-next svg,\n        .swiper-button-prev svg {\n            width: 24px !important;\n            height: 24px !important;\n        }\n\n        .swiper-button-next,\n        .swiper-button-prev {\n            position: relative !important;\n            margin-top: 32px;\n        }\n\n        .swiper-slide.swiper-slide-active {\n            --tw-border-opacity: 1 !important;\n            border-color: rgb(79 70 229 / var(--tw-border-opacity)) !important;\n        }\n\n        .swiper-slide.swiper-slide-active>.swiper-slide-active\\:text-indigo-600 {\n            --tw-text-opacity: 1;\n            color: rgb(79 70 229 / var(--tw-text-opacity));\n        }\n\n        .swiper-slide.swiper-slide-active>.flex .grid .swiper-slide-active\\:text-indigo-600 {\n            --tw-text-opacity: 1;\n            color: rgb(79 70 229 / var(--tw-text-opacity));\n        }\n    " }} />
  <section className="py-24 ">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
        <div className="w-full lg:w-2/5">
          <span className="text-sm text-gray-500 font-medium mb-4 block">Testimonial</span>
          <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8"> <span className=" text-cardcolor  ">Feedback</span>
          </h2>
          {/* Slider controls */}

        </div>
        <div className="w-full lg:w-3/5">
          {/*Slider wrapper*/}
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
                <div className="flex items-center gap-5 mb-5 sm:mb-9">
                  <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696229969.png" alt="avatar" />
                  <div className="grid gap-1">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  ">Jane D</h5>
                    <span className="text-sm leading-6 text-gray-500">CEO </span>
                  </div>
                </div>
                <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500  ">
                  <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                  </svg>
                  <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                  </svg>
                  <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                  </svg>
                  <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                  </svg>
                  <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24  group-hover:text-gray-800">
                  The user interface of this pagedone is so intuitive, I was able to start using it
                  without any guidance.
                </p>
              </div>
              {books.map((feedback, key) => (
                // <SwiperSlide key={key}>
                // <SingleTestimonial
                  <SingleTestimonial feedback={feedback} />
              ))}


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<section className="py-20 ">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-cardColor rounded-2xl p-8 xl:p-11">
        <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">Subscribe to the latest offer
        </h2>
        <p className="text-indigo-200 text-center mb-11 max-lg:max-w-2xl mx-auto">Join our community of subscribers
          and receive regular
          updates delivered straight to your inbox. It's quick, easy, and free</p>
        <div className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
          <input type="text" name="email" className="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent" placeholder="Enter your email.." />
          <button type="submit" className="py-2 px-5 text-sm bg-whie shadow-md rounded-full  text-white font-semibold hover:bg-indigo-700">Subscribe</button>
        </div>
      </div>
    </div>
  </section>

    </>
  );
};

export default Testim;

