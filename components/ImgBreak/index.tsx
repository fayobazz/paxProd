"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ModalAd from "../ModalAd";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
const ImgBreak = () => {

// const myRef = useRef();
// const myRef = useRef<T>(null);
const [myElementIsVisible, updateMyElementIsVisible] = useState();
const myRef = useRef<HTMLInputElement>(null)
useEffect(() => {
  // const observer = new IntersectionObserver((entries, observer) => {
  //   const entry = entries[0];
  //   // updateMyElementIsVisible(entry.isIntersecting);
  //   console.log('entry', entry);
  //   console.log('entry.isIntersecting', entry.isIntersecting);
  // });
  // observer.observe(myRef.current!);
  // console.log('myRef', myRef.current);
}, []);
  return (

    <>
    <div style = {{
    backgroundImage: 'url(/4.JPG)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'}}>
      {/* <!-- ===== ImgBreak Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        {/* <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5"> */}
          <Image
            width={335}
            height={384}
            src="/images/icon/p.png"
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

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
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-white dark:text-white xl:text-sectiontitle3">
              Ethiopia's Most Trusted
            </h2>
            <p className="mx-auto lg:w-11/12">
              Catholic Media
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
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
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-white dark:text-white xl:text-sectiontitle3">
                500K
              </h3>
              <p className="text-lg lg:text-para2">Donation Raised</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-white dark:text-white xl:text-sectiontitle3">
                1M+
              </h3>
              <p className="text-lg lg:text-para2">Views On Youtube</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              {/* <h3 className="mb-2.5 text-3xl font-bold text-white dark:text-white xl:text-sectiontitle3">
                865
              </h3>
              <p>{ myElementIsVisible ? 'Yes! ????' : 'No ????' }</p>
              <p ref={myRef} className="text-lg lg:text-para2">Programs</p> */}
              <div className="relative w-full h-auto">
              </div>
            </motion.div>
          </div>
        {/* </div> */}
      </section>
      {/* <ModalAd /> */}
      </div>
      {/* <!-- ===== ImgBreak End ===== --> */}
    </>
  );
};

export default ImgBreak;
