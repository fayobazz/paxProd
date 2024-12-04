import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { IoMdBookmark } from "react-icons/io";
// import { Data } from "../HeroSlider";
import { Data,CurrentSlideData } from "../HeroSlider";
// import { Data, CurrentSlideData } from "@/pages";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-black" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className=" mt-5 flex items-center gap-3">
        <button
          className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs  transition
            duration-300 ease-in-out hover:opacity-80 "
        >
          <IoMdBookmark className=" text-xl" />
        </button>
       
      </motion.div>
    </>
  );
}

export default SlideInfo;
