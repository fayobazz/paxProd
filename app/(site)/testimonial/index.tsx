"use client";
import Testim from "@/components/Testimonial";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Testimo = () => {


  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg p-2 bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
    <Testim/>

      </motion.div>
    </>
  );
};

export default Testimo;

