// // "use client";
// // import SectionHeader from "../Common/SectionHeader";
// // import { Autoplay, Pagination } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import { Swiper, SwiperSlide } from "swiper/react";

// // import { motion } from "framer-motion";
// // import SingleTestimonial from "./SingleTestimonial";
// // import { testimonialData } from "./testimonialData";
// // import { useEffect, useState } from 'react';
// // import axios from "axios";
// // const Testimonial = () => {
// //   const[books,setBooks] = useState([])

// //   useEffect( ()=>{
// //     const fetchAllBooks = async () =>{
// //     try{
// //       // const res = await axios.get(`http://localhost:8800/feedback`);

// //       const res = await axios.get("https://kk.pp.paxcatholictv.org/feedback")
// //       setBooks(res.data)
// //       console.log(res)
// //     }
// //     catch(err){
// //       console.log(err)
// //     }
// //   }
// //     fetchAllBooks()
// //   },[])
// //   return (
// //     <>
// //       <section>
// //         <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
// //           {/* <!-- Section Title Start --> */}
// //           <div className="animate_top mx-auto text-center">
// //             <SectionHeader
// //               headerInfo={{
// //                 title: `TESTIMONIALS`,
// //                 subtitle: `Client’s Testimonials`,
// //                 description: `Here are some of the testimonials we got from our audiences and clients`,
// //               }}
// //             />
// //           </div>
// //           {/* <!-- Section Title End --> */}
// //         </div>

// //         <motion.div
// //           variants={{
// //             hidden: {
// //               opacity: 0,
// //               y: -20,
// //             },

// //             visible: {
// //               opacity: 1,
// //               y: 0,
// //             },
// //           }}
// //           initial="hidden"
// //           whileInView="visible"
// //           transition={{ duration: 1, delay: 0.1 }}
// //           viewport={{ once: true }}
// //           className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
// //         >
// //           {/* <!-- Slider main container --> */}
// //           <div className="swiper testimonial-01 mb-20 pb-22.5">
// //             {/* <!-- Additional required wrapper --> */}
// //             <Swiper
// //               spaceBetween={50}
// //               slidesPerView={2}
// //               autoplay={{
// //                 delay: 2500,
// //                 disableOnInteraction: false,
// //               }}
// //               pagination={{
// //                 clickable: true,
// //               }}
// //               modules={[Autoplay, Pagination]}
// //               breakpoints={{
// //                 // when window width is >= 640px
// //                 0: {
// //                   slidesPerView: 1,
// //                 },
// //                 // when window width is >= 768px
// //                 768: {
// //                   slidesPerView: 2,
// //                 },
// //               }}
// //             >
// //               {books.map((feedback, key) => (
// //                 <SwiperSlide key={key}>
// //                   <SingleTestimonial feedback={feedback} />
// //                 </SwiperSlide>
// //               ))}
// //             </Swiper>
// //           </div>
// //         </motion.div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Testimonial;
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const Modal = () => {


//   return (
//     <>
// <section className="relative py-8 sm:p-8">
//   <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
//     <div className="w-full relative flex justify-center">
//       <button type="button" className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700" data-pd-overlay="#modalBox-3" data-modal-target="modalBox-3" data-modal-toggle="modalBox-3">
//         Ask a Questions
//       </button>
//       <div id="modalBox-3" className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto">
//         <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
//           <div className="bg-white p-6">
//             <div className="flex flex-col gap-5">
//               <h4 className="text-lg font-bold leading-8 text-gray-900 text-center">Ask a Questions</h4>
//               <form action="#" className="flex flex-col gap-4">
//                 <div className="relative">
//                   <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">Add a Title</label>
//                   <input type="text" id="default-search" className="block w-full  pl-4 pr-3.5 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed" placeholder="Add your title" required />
//                 </div>
//                 <div className="relative">
//                   <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">What are details of your problem? </label>
//                   <textarea id="problem-1" className="block w-full  h-24 px-3.5 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed resize-none" placeholder="Enter the details of your problem..." defaultValue={""} />
//                 </div>
//                 <div className="relative">
//                   <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">What did you try and what were you expecting?</label>
//                   <textarea id="problem-2" className="block w-full h-24 px-3.5 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed resize-none" placeholder="Enter the details of your problem..." defaultValue={""} />
//                 </div>
//               </form>
//               <div className="flex items-center justify-end gap-4">
//                 <button className="py-2.5 px-9 rounded-lg border border-gray-200 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:border-gray-100 close-modal-button" data-pd-overlay="#modalBox-3" data-modal-target="modalBox-3">Cancel</button>
//                 <button className="py-2.5 px-9 rounded-lg text-sm font-medium text-white bg-green-700 transition-all duration-300 hover:bg-green-800 close-modal-button" data-pd-overlay="#modalBox-3" data-modal-target="modalBox-3">Submit</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="backdrop" className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]">
//       </div>
//     </div>
//   </div>
// </section>
//     </>
//   );
// };

// export default Modal;

'use client'

import { useRouter } from "next/navigation";

function Modal() {
  const router = useRouter()
  function randomNumber() {
    return Math.random();
  }
  const id = randomNumber();
  return (

    <section className="relative py-8 sm:p-8">
  <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
    <div className="w-full relative flex justify-center">
      <button type="button" className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700" data-pd-overlay="#modalBox-3" data-modal-target="modalBox-3" data-modal-toggle="modalBox-3">
       Donate
      </button>
      <div id="modalBox-3" className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto">
        <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
          <div className="bg-white p-6">
            <div className="flex flex-col gap-5">
              <h4 className="text-lg font-bold leading-8 text-gray-900 text-center">Make a Donation to PAX CTV</h4>
              <form method="POST"
          className='mt-12 flex flex-col gap-8'
          action="https://api.chapa.co/v1/hosted/pay" >
            <input type="hidden"
name="public_key" value="CHAPUBK_TEST-cIgoKgERLQ2VmkHE6Vg1j3cLxJ6EIjVu" />
            <input type="hidden" name="tx_ref" value= {id} />
            <input type="number"
 placeholder="How much woulddd you like to donate?"

 className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            name="amount"  />
            <input type="hidden" name="currency" value="ETB" />
            <input type="number"
placeholder="Enter your Phone Number"

className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            name="phone"  />
            <input type="text"
placeholder="Enter First Name"

className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            name="first_name"  />
            <input type="text" name="last_name"
             placeholder="Enter Last Name"

className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium' />
            <input type="hidden" name="title" value="Thank you for donating to PAX" />
            <input type="text" name="description"  placeholder="Enter Message"

className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium' />
            <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
            <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
            <input type="hidden" name="return_url" value="https://example.com/returnurl" />
            <input type="hidden" name="meta[title]" value="test" />
                <button className="py-2.5 px-9 rounded-lg text-sm font-medium text-white bg-green-700 transition-all duration-300 hover:bg-green-800 close-modal-button" data-pd-overlay="#modalBox-3" data-modal-target="modalBox-3">Pay Now</button>
        </form>
        <button  onClick={router.back} className="py-2.5 px-9 rounded-lg border border-gray-200 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:border-gray-100 close-modal-button" data-pd-overlay="#modalBox-3" data-modal-target="modalBox-3">Cancel</button>

              {/* <form action="#" className="flex flex-col gap-4">
                <div className="relative">
                  <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">Add a Title</label>
                  <input type="text" id="default-search" className="block w-full  pl-4 pr-3.5 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed" placeholder="Add your title" required />
                </div>
                <div className="relative">
                  <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">What are details of your problem? </label>
                  <textarea id="problem-1" className="block w-full  h-24 px-3.5 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed resize-none" placeholder="Enter the details of your problem..." defaultValue={""} />
                </div>
                <div className="relative">
                  <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">What did you try and what were you expecting?</label>
                  <textarea id="problem-2" className="block w-full h-24 px-3.5 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed resize-none" placeholder="Enter the details of your problem..." defaultValue={""} />
                </div>
              </form> */}
              <div className="flex items-center justify-end gap-4">
              {/* <button
              onClick={router.back}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button> */}
                {/* <button  onClick={router.back} className="py-2.5 px-9 rounded-lg border border-gray-200 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:border-gray-100 close-modal-button" data-pd-overlay="#modalBox-3" data-modal-target="modalBox-3">Cancel</button>
                <button className="py-2.5 px-9 rounded-lg text-sm font-medium text-white bg-green-700 transition-all duration-300 hover:bg-green-800 close-modal-button" data-pd-overlay="#modalBox-3" data-modal-target="modalBox-3">Submit</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="backdrop" className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]">
      </div>
    </div>
  </div>
</section>
  );
}
export default Modal;
