import React from "react";
import { motion } from "framer-motion";
import { Data, CurrentSlideData } from "../HeroSlider";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className=" absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
          src="/3.jpg"
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src="/3.jpg"
        className=" absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </>
  );
}

export default BackgroundImage;
