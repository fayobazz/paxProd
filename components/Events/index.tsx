'use client';

import React from "react";
import SectionHeader from "../Common/SectionHeader";
// import BlogItem from "./BlogItem";
import EventsItem from "./EventsItem";
// import BlogData from "./blogData";
import { useEffect, useState } from 'react';
import axios from "axios";
const Events =  () => {
  const[books,setBooks] = useState([])

  useEffect( ()=>{
    const fetchAllBooks = async () =>{
    try{
      // const res = await axios.get(`http://localhost:8800/events`);

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
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Events And Programs`,
              subtitle: `Latest Events & Programs`,
              description: `Here are some of our events and programs, See you there!`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {/* {books.map((book, index) => (
          <BlogItem key={`project-${book.id}`} index={index} {...book} />
        ))}
          {books.slice(0, 3).map((book, index) => (
            <BlogItem index={index} key={index} {...book}/>
          ))} */}
              {books.slice(0, 3).map((event, key) => (
            <EventsItem events={event} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
// 41903417