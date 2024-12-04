"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from 'react';
import axios from "axios";
import FeaturesTab from "../FeaturesTab";
import Team from "../Team";
const About = () => {

  const[books,setBooks] = useState([])
  const[books2,setTitle] = useState([])

  // const[books,setBooks,setTitle] = useState([])

  useEffect( ()=>{
    const fetchAllBooks = async () =>{
    try{
      const res = await axios.get(`http://localhost:8800/posts`);

      // const res = await axios.get("https://kk.pp.paxcatholictv.org/team")
      setBooks(res.data)
      setTitle(res.data.title)
      console.log(res)
      console.log(res.data.title)

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
  <style dangerouslySetInnerHTML={{__html: "\n        .swiper-wrapper {\n            height: max-content !important;\n\n            width: max-content;\n        }\n\n        .swiper-button-next,\n        .swiper-button-prev {\n            top: 25%;\n            z-index: 1000;\n        }\n\n        .swiper-button-next {\n            right: -0px !important;\n        }\n\n        .swiper-button-prev {\n            left: 0px !important;\n        }\n\n        .swiper-button-prev:after,\n        .swiper-rtl .swiper-button-next:after {\n            content: \"\" !important;\n        }\n\n        .mySwiper {\n            max-width: 320px !important;\n            margin: 0 auto !important;\n        }\n\n        .swiper-button-next:after,\n        .swiper-rtl .swiper-button-prev:after {\n            content: \"\" !important;\n        }\n\n        .mySwiper .swiper-slide.swiper-slide-thumb-active>.swiper-slide\\:w-16 {\n            --tw-scale-x: 1;\n            --tw-scale-y: 1;\n            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n        }\n\n        .mySwiper .swiper-slide.swiper-slide-thumb-active>.swiper-slide\\:border-indigo-600 {\n            --tw-border-opacity: 1;\n            border-color: rgb(79 70 229 / var(--tw-border-opacity));\n        }\n\n        .teamswiper .swiper-wrapper {\n            height: max-content !important;\n            padding-bottom: 64px !important;\n        }\n\n        .teamswiper .swiper-horizontal>.swiper-scrollbar,\n        .teamswiper .swiper-scrollbar.swiper-scrollbar-horizontal {\n            max-width: 140px !important;\n            height: 3px !important;\n            bottom: 25px !important;\n            left: 50% !important;\n            transform: translateX(-50%) !important;\n        }\n\n        .teamswiper .swiper-pagination-fraction {\n            bottom: 0 !important;\n            padding-top: 16px !important;\n        }\n\n        .teamswiper .swiper-slide.swiper-slide-active>.slide\\:border-indigo-600 {\n            --tw-border-opacity: 1;\n            border-color: rgb(79 70 229 / var(--tw-border-opacity));\n        }\n\n        .teamswiper .swiper-pagination-total {\n            color: rgb(156 163 175) !important;\n        }\n\n        .teamswiper .swiper-scrollbar-drag {\n            background: rgb(79 70 229);\n        }\n\n        .teamswiper .swiper-pagination-fraction {\n            bottom: 0 !important;\n        }\n\n        .teamswiper .swiper-button-prev:after,\n        .teamswiper .swiper-rtl .swiper-button-next:after {\n            content: '' !important;\n        }\n\n        .teamswiper .swiper-button-prev {\n            top: 93% !important;\n            left: 35% !important;\n            z-index: 100 !important;\n        }\n\n        .teamswiper .swiper-button-next {\n            top: 93% !important;\n            right: 35% !important;\n            z-index: 100 !important;\n        }\n\n        .teamswiper .swiper-button-next:after,\n        .teamswiper .swiper-rtl .swiper-button-prev:after {\n            content: '' !important;\n        }\n\n        .teamswiper .swiper-button-next svg,\n        .teamswiper .swiper-button-prev svg {\n            width: 24px !important;\n            height: 24px !important;\n        }\n    " }} />


  <section className="py-14 lg:py-24 relative">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
        <div className="img-box">
          <img src="/ar.png" alt="About Us tailwind page" className="max-lg:mx-auto object-cover" />
        </div>
        <div className="lg:pl-[100px] flex items-center">
          <div className="data w-full">
            <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
              About
              Us </h2>
            <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">

የሰላም ካቶሊክ ቲቪ በዋናነት ወንጌልን የመስበክ ኃላፊነት ያለው የኢትዮጵያ ካቶሊክ ቤተክርስቲያን የቴሌቪዥን ጣቢያ ነው። የአዲስ አበባ ሰበካ “በክርስቶስ በጋራ መጓዝ” በሚል መሪ ቃል ከሕዳር 26-29/ 2006ዓ.ም. የሁለተኛ ቫቲካን ጉባኤ ሰነድ የተጻፈበትን 50ኛ ዓመት በማስመልከት ሰበካዊ ውሳኔዎችን አድርጓል። ከውሳኔዎቹም አንዱ በመገናኛ ብዙኃን አጠቃቀም ዙሪያ የተቀመጡ የወደፊት አቅጣጫዎችን የሚመለከት ነው። “በአገራችን የተለያዩ የሃይማኖት ተቋማት የEBS ቴሌቪዥንን በመጠቀም በቋሚነት ሃይማኖታዊ ፕሮግራሞችን በማስተላለፍ ስብከተ ወንጌልን ያሰራጫሉ። የካቶሊካዊት ቤተክርስቲያንም እነዚህን መሰል የቴሌቪዥን ፕሮግራሞችን መጠቀም ለስብከተ ወንጌል አገልግሎት ከፍተኛ እገዛ ያደርጋሉ የሚል መነሻ ሐሳብ ነው (በክርስቶስ በጋራ መጓዝ፣ ገጽ 187)። ከህትመት በተጨማሪ “የዘመኑን የመገናኛ ብዙኃን አውታሮች ኢንተርኔትን/ ድረ - ገጽን በመጠቀም መልዕክቶች በቀላሉ ለተደራሲያን የሚደርሱበትን ሁኔታ ማመቻቸት ያስፈልጋል።” (በክርስቶስ በጋራ መጓዝ ገጽ 188)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-14 lg:py-24 relative">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
        <div className="lg:pr-24 flex items-center">
          <div className="data w-full">
            <img src="/aw.png" alt="About Us tailwind page" className="block lg:hidden mb-9 mx-auto object-cover" />
            <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">የሰላም ካቶሊክ ቴሌቪዥን ታሪካዊ አመጣጥ</h2>
            <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">


ታኅሣሥ 1/ 2010ዓ.ም. ሰበካዊው ሲኖዶስ ‘እንደ ኢ.ቢ.ኤስ ያሉትን የቴሌቪዥን ጣቢያዎችን በመጠቀም ስብከተ ወንጌልን ማስፋፋት’ የሚለውን ዕቅድ ካሳወቀ ከአራት ዓመታት ተከታታይ ጥረት በኋላ ዕውን ሆነ። ከታህሳስ 1/2010 እስከ ሚያዝያ 20/2011 ዘወትር እሑድ የ30 ደቂቃ ፕሮግራም ሲተላለፍ ቆይቷል።
የEBS ቴሌቪዥ በኢትዮጵያ ብሮድካስት ሕግ መተዳደር ሲጀምር፣ የኢትዮጵያ ብሮድ ካስት ሕግ መንፈሳዊ ትምህርቶችን ማሰተላለፍ ስለማይፈቅድ በየእሑዱ ለ30 ደቂቃ ይተላልፍ የነበረው ፕሮግራም ከሚያዝያ 20/ 2011 ጀምሮ መቋረጡ ግድ ሆነ። ሆኖም “ካቶሊክ አዲስ” የፌስ ቡክ እና ዩ- ቲዩብ ገፆችን መንፈሳዊ ትምህርቶችንን ማስተላለፍ ቀጠለ።
ከመጋቢት 5/ 2012 እስከ ግንቦት 17/ 2012 በኮቪድ - 19 ምክንያት ኅብረተሰቡ ወደ ቤተ ክርስቲያን መሄድ ሰለማይችል መንግስት በሰጠው የሚዲያ ሰዓት በአዲስ ሚድያ ኔት ዎርክ፣ በፋና፣ ዋልታ፣ ኢቢሲ በሳምንት እንደ ድልድሉ ከ4 እስከ 6 ሰዓት ፕሮግራሞችን ከECS ጽ/ ቤት ጋር እና ከሀገረ ስብከቶች ጋር በመተባበር ፕሮግራሙ ከቆመበት ግንቦት 17/2012 ድረስ ሲያስተላልፍ ቆየ።  የአዲስ አበባ ሀገረ ስብከት ከአዲስ ሚድያ ኔት ዎርክ ጋር በመነጋገር የእሑድ መስዋዕተ ቅዳሴን ማስተላለፍ ቀጠለ።
የካቲት 27/ 2013ዓ.ም. ከኢትዮ ሳተላይት በመከራየት የመጀመሪያ የሆነውን የካቶሊከ ቲቪ የ24 ሰዓት ስርጭት ጀመረ። ጥቅምት 2014 የቀጥታ ስርጭት ግብዓቶችን በማሟላት ፕሮግራሞችን በቀጥታ ማስተላለፍ ጀመረ።
            </p>
          </div>
        </div>
        <div className="img-box ">
          <img src="/aw.png" alt="About Us tailwind page" className="hidden lg:block object-cover" />
        </div>
      </div>
    </div>
  </section>
  {/* <section className="py-20 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">Our results in numbers</h2>
      <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
        <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
          <div className="flex gap-5">
            <div className="font-manrope text-2xl font-bold text-indigo-600">
              240%
            </div>
            <div className="flex-1">
              <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
              <p className="text-xs text-gray-500 leading-5">Company's remarkable growth journey as we
                continually innovate and drive towards new heights of success.</p>
            </div>
          </div>
        </div>
        <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
          <div className="flex gap-5">
            <div className="font-manrope text-2xl font-bold text-indigo-600">
              175+
            </div>
            <div className="flex-1">
              <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
              <p className="text-xs text-gray-500 leading-5">Our very talented team members are the powerhouse
                of pagedone and pillars of our success. </p>
            </div>
          </div>
        </div>
        <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
          <div className="flex gap-5">
            <div className="font-manrope text-2xl font-bold text-indigo-600">
              625+
            </div>
            <div className="flex-1">
              <h4 className="text-xl text-gray-900 font-semibold mb-2">Projects Completed</h4>
              <p className="text-xs text-gray-500 leading-5">We have accomplished more than 625 projects
                worldwide and we are still counting many more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  <FeaturesTab />
  {/* <section className="py-24 bg-gray-50">

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
      <div className="w-full lg:w-1/2">
        <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
          Our leading, strong &amp; creative team</h2>
        <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">These people work on making our
          product best.</p>
        <button className="cursor-pointer py-3 px-8 w-60 bg-cardColor text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">Meet
          our team</button>
      </div>
      <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
        {books.map((blog, key) => (
            <TeamItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </div>
  </div>
</section> */}
<Team />
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

</div>
         </>
  );
};

export default About;
