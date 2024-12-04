import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
// import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function HeroSlider() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          {/* <Header /> */}
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">

            </div>

            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
            <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
 <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

// const sliderData = [
//   {
//     img: "/1.JPG",
//     location: "Switzrerland Apls",
//     description:
//       "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
//     title: "SAINT ANTÖNEN",
//   },
//   {
//     img: "/2.JPG",
//     title: "The Grand Canyon",
//     description:
//       "The earth's geological history opens before your eyes in a mile-deep chasm",
//     location: "Arizona",
//   },
//   {
//     img: "/3.JPG",
//     title: "Masai Mara",
//     description:
//       "Wild animals in their natural environment, luxury safari lodges",
//     location: "Kenya",
//   },
//   {
//     img: "/4.JPG",
//     title: "Angkor Wat",
//     description:
//       "A stunning ancient jungle city with hundreds of intricately constructed temples",
//     location: "Cambodia",
//   },
//   {
//     img: "/5.JPG",
//     title: "Bali",
//     description:
//       "Tropical beaches, volcano hikes, ancient temples, and friendly people",
//     location: "Indonesia",
//   },
// ];
const sliderData = [
  {
    img: "/1.JPG",
    location: "20:00",
    description:
      "Live event of Catholic Kidase",
    title: "Live Event",
  },
  {
    img: "/2.JPG",
    title: "Live Prayer",
    description:
      "Live prayer by PAX CTV",
    location: "21:00",
  },
  {
    img: "/3.JPG",
    title: "Choir Session",
    description:
      "Catch our choir performing live",
    location: "23:00 ",
  },
  // {
  //   img: "/4.JPG",
  //   title: "Angkor Wat",
  //   description:
  //     "A stunning ancient jungle city with hundreds of intricately constructed temples",
  //   location: "Cambodia",
  // },
  // {
  //   img: "/5.JPG",
  //   title: "Bali",
  //   description:
  //     "Tropical beaches, volcano hikes, ancient temples, and friendly people",
  //   location: "Indonesia",
  // },
];
const initData = sliderData[0];

// import { Righteous } from "next/font/google";
// import { AnimatePresence } from "framer-motion";
// import React from "react";
// import Header from "@/components/Header";
// import BackgroundImage from "@/components/BackgroundImage";
// import Slides from "@/components/Slides";
// import SlideInfo from "@/components/SlideInfo";
// import Controls from "@/components/Controls";
// import { useEffect, useState } from 'react';
// import axios from "axios";
// const inter = Righteous({
//   subsets: ["latin"],
//   weight: ["400"],
// });
// export type Data = {
//   _id: number;
//   // title: string;
//   body: string;
//   cat_id: number;
//   image: string;
//   created_by: string;
//   // tags?: string[];
//   created_at: string;
//   img: string;
//   title: string;
//   description: string;
//   location: string;
//   // never[];
// };

// export type CurrentSlideData = {
//   data?: Data;
//   index: number;
// };

// export default function HeroSlider() {
//   const[sliderData,setBooks] = useState([])
//   const[sliderDataa,setBookss] = useState()

//   useEffect( ()=>{
//     const fetchAllBooks = async () =>{
//     try{
//       // const res = await axios.get(`http://localhost:8800/posts`);

//       const res = await axios.get("https://kk.pp.paxcatholictv.org/posts")
//       setBooks(res.data)
//       setBookss(res.data[0])

//       console.log(res)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
//     fetchAllBooks()
// const initData = sliderData[0];

//   },[])
//   const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
//   const [transitionData, setTransitionData] = React.useState<Data>(
//     sliderData[0]
//   );
//   const [currentSlideData, setCurrentSlideData] =
//     React.useState<CurrentSlideData>({
//       data: sliderDataa,
//       index: 0,
//     });

//   return (
//     <main
//       className={`
//        ${inter.className}
//         relative min-h-screen select-none overflow-hidden text-white antialiased`}
//     >
//       <AnimatePresence>
//         <BackgroundImage
//           transitionData={transitionData}
//           currentSlideData={currentSlideData}
//         />
//         <div className="  absolute z-20  h-full w-full">
//           <Header />
//           <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
//             <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
//               <SlideInfo
//                 transitionData={transitionData}
//                 currentSlideData={currentSlideData}
//               />
//  <Slides data={data} />
//               <Controls
//                 currentSlideData={currentSlideData}
//                 data={data}
//                 transitionData={transitionData}
//                 initData={sliderDataa!}
//                 handleData={setData}
//                 handleTransitionData={setTransitionData}
//                 handleCurrentSlideData={setCurrentSlideData}
//                 sliderData={sliderData}
//               />
//             </div>

//             <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">

//             </div>
//           </div>
//         </div>
//       </AnimatePresence>
//     </main>
//   );
// }

// // const sliderData = [
// //   {
// //     img: "/1.JPG",
// //     location: "Switzrerland Apls",
// //     description:
// //       "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
// //     title: "SAINT ANTÖNEN",
// //   },
// //   {
// //     img: "/2.JPG",
// //     title: "The Grand Canyon",
// //     description:
// //       "The earth's geological history opens before your eyes in a mile-deep chasm",
// //     location: "Arizona",
// //   },
// //   {
// //     img: "/3.JPG",
// //     title: "Masai Mara",
// //     description:
// //       "Wild animals in their natural environment, luxury safari lodges",
// //     location: "Kenya",
// //   },
// //   {
// //     img: "/4.JPG",
// //     title: "Angkor Wat",
// //     description:
// //       "A stunning ancient jungle city with hundreds of intricately constructed temples",
// //     location: "Cambodia",
// //   },
// //   {
// //     img: "/5.JPG",
// //     title: "Bali",
// //     description:
// //       "Tropical beaches, volcano hikes, ancient temples, and friendly people",
// //     location: "Indonesia",
// //   },
// // ];

// import { Righteous } from "next/font/google";
// import { AnimatePresence } from "framer-motion";
// import React from "react";
// // import Header from "@/components/Header";
// import BackgroundImage from "@/components/BackgroundImage";
// import Slides from "@/components/Slides";
// import SlideInfo from "@/components/SlideInfo";
// import Controls from "@/components/Controls";
// import { useState, useEffect } from "react";
// import axios from "axios";
// const inter = Righteous({
//   subsets: ["latin"],
//   weight: ["400"],
// });
// export type Data = {
//   image: string;
//   title: string;
//   description: string;
//   // location: string;
// };

// export type CurrentSlideData = {
//   data: Data;
//   index: number;
// };

// export default function HeroSlider() {
//   const[books,setBooks] = React.useState<Data[]>([]);

//   useEffect( ()=>{
//     const fetchAllBooks = async () =>{
//     try{
//       const res = await axios.get(`http://localhost:8800/posts`);
//       // const [transitionData, setTransitionData] = React.useState<Data>(
//       //   books[0]
//       // );
//       // const res = await axios.get("https://kk.pp.paxcatholictv.org/feedback")
//       setBooks(res.data)
//       console.log(res)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
//     fetchAllBooks()
//   },[])
//   const [data, setData] = React.useState<Data[]>(books.slice(1));
//   const [transitionData, setTransitionData] = React.useState<Data>(
//     books[0]
//   );
//   // const initData;
//   const [currentSlideData, setCurrentSlideData] =
//     React.useState<CurrentSlideData>({
//       data: books[0],
//       index: 0,
//     });
//     // const [iniSlide, setIniSlideData] =
//     // React.useState({
//     //   const initData : sliderData[0];

//     // });

//   return (
//     <main
//       className={`
//        ${inter.className}
//         relative min-h-screen select-none overflow-hidden text-white antialiased`}
//     >
//       <AnimatePresence>
//         <BackgroundImage
//           transitionData={transitionData}
//           currentSlideData={currentSlideData}
//         />
//         <div className="  absolute z-20  h-full w-full">
//           {/* <Header /> */}
//           <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
//             <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">

//             </div>

//             <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
//             <SlideInfo
//                 transitionData={transitionData}
//                 currentSlideData={currentSlideData}
//               />
//  <Slides data={data} />
//               <Controls
//                 currentSlideData={currentSlideData}
//                 data={data}
//                 transitionData={transitionData}
//                 initData={books[0]}
//                 handleData={setData}
//                 handleTransitionData={setTransitionData}
//                 handleCurrentSlideData={setCurrentSlideData}
//                 sliderData={books}
//               />
//             </div>
//           </div>
//         </div>
//       </AnimatePresence>
//     </main>
//   );
// }

// // const sliderData = [
// //   {
// //     img: "/1.JPG",
// //     location: "Switzrerland Apls",
// //     description:
// //       "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
// //     title: "SAINT ANTÖNEN",
// //   },
// //   {
// //     img: "/2.JPG",
// //     title: "The Grand Canyon",
// //     description:
// //       "The earth's geological history opens before your eyes in a mile-deep chasm",
// //     location: "Arizona",
// //   },
// //   {
// //     img: "/3.JPG",
// //     title: "Masai Mara",
// //     description:
// //       "Wild animals in their natural environment, luxury safari lodges",
// //     location: "Kenya",
// //   },
// //   {
// //     img: "/4.JPG",
// //     title: "Angkor Wat",
// //     description:
// //       "A stunning ancient jungle city with hundreds of intricately constructed temples",
// //     location: "Cambodia",
// //   },
// //   {
// //     img: "/5.JPG",
// //     title: "Bali",
// //     description:
// //       "Tropical beaches, volcano hikes, ancient temples, and friendly people",
// //     location: "Indonesia",
// //   },
// // ];

// // const initData = sliderData[0];

// // import { Righteous } from "next/font/google";
// // import { AnimatePresence } from "framer-motion";
// // import React from "react";
// // import Header from "@/components/Header";
// // import BackgroundImage from "@/components/BackgroundImage";
// // import Slides from "@/components/Slides";
// // import SlideInfo from "@/components/SlideInfo";
// // import Controls from "@/components/Controls";
// // import { useEffect, useState } from 'react';
// // import axios from "axios";
// // const inter = Righteous({
// //   subsets: ["latin"],
// //   weight: ["400"],
// // });
// // export type Data = {
// //   _id: number;
// //   // title: string;
// //   body: string;
// //   cat_id: number;
// //   image: string;
// //   created_by: string;
// //   // tags?: string[];
// //   created_at: string;
// //   img: string;
// //   title: string;
// //   description: string;
// //   location: string;
// //   // never[];
// // };

// // export type CurrentSlideData = {
// //   data?: Data;
// //   index: number;
// // };

// // export default function HeroSlider() {
// //   const[sliderData,setBooks] = useState([])
// //   const[sliderDataa,setBookss] = useState()

// //   useEffect( ()=>{
// //     const fetchAllBooks = async () =>{
// //     try{
// //       // const res = await axios.get(`http://localhost:8800/posts`);

// //       const res = await axios.get("https://kk.pp.paxcatholictv.org/posts")
// //       setBooks(res.data)
// //       setBookss(res.data[0])

// //       console.log(res)
// //     }
// //     catch(err){
// //       console.log(err)
// //     }
// //   }
// //     fetchAllBooks()
// // const initData = sliderData[0];

// //   },[])
// //   const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
// //   const [transitionData, setTransitionData] = React.useState<Data>(
// //     sliderData[0]
// //   );
// //   const [currentSlideData, setCurrentSlideData] =
// //     React.useState<CurrentSlideData>({
// //       data: sliderDataa,
// //       index: 0,
// //     });

// //   return (
// //     <main
// //       className={`
// //        ${inter.className}
// //         relative min-h-screen select-none overflow-hidden text-white antialiased`}
// //     >
// //       <AnimatePresence>
// //         <BackgroundImage
// //           transitionData={transitionData}
// //           currentSlideData={currentSlideData}
// //         />
// //         <div className="  absolute z-20  h-full w-full">
// //           <Header />
// //           <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
// //             <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
// //               <SlideInfo
// //                 transitionData={transitionData}
// //                 currentSlideData={currentSlideData}
// //               />
// //  <Slides data={data} />
// //               <Controls
// //                 currentSlideData={currentSlideData}
// //                 data={data}
// //                 transitionData={transitionData}
// //                 initData={sliderDataa!}
// //                 handleData={setData}
// //                 handleTransitionData={setTransitionData}
// //                 handleCurrentSlideData={setCurrentSlideData}
// //                 sliderData={sliderData}
// //               />
// //             </div>

// //             <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">

// //             </div>
// //           </div>
// //         </div>
// //       </AnimatePresence>
// //     </main>
// //   );
// // }

// // // const sliderData = [
// // //   {
// // //     img: "/1.JPG",
// // //     location: "Switzrerland Apls",
// // //     description:
// // //       "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
// // //     title: "SAINT ANTÖNEN",
// // //   },
// // //   {
// // //     img: "/2.JPG",
// // //     title: "The Grand Canyon",
// // //     description:
// // //       "The earth's geological history opens before your eyes in a mile-deep chasm",
// // //     location: "Arizona",
// // //   },
// // //   {
// // //     img: "/3.JPG",
// // //     title: "Masai Mara",
// // //     description:
// // //       "Wild animals in their natural environment, luxury safari lodges",
// // //     location: "Kenya",
// // //   },
// // //   {
// // //     img: "/4.JPG",
// // //     title: "Angkor Wat",
// // //     description:
// // //       "A stunning ancient jungle city with hundreds of intricately constructed temples",
// // //     location: "Cambodia",
// // //   },
// // //   {
// // //     img: "/5.JPG",
// // //     title: "Bali",
// // //     description:
// // //       "Tropical beaches, volcano hikes, ancient temples, and friendly people",
// // //     location: "Indonesia",
// // //   },
// // // ];

