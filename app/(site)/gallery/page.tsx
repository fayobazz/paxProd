"use client"
// import BlogData from "@/components/Blog/blogData";
// import BlogItem from "@/components/Blog/BlogItem";
// import { Metadata } from "next";
import { useEffect, useState } from 'react';
import axios from "axios";
import ShopItem from "@/components/Shop/ShopItem";

// export const metadata: Metadata = {
//   title: "Blog Page - Solid SaaS Boilerplate",
//   description: "This is Blog page for Solid Pro",
//   // other metadata
// };

const GalleryPage =  () => {
  const[books,setBooks] = useState([])

  useEffect( ()=>{
    const fetchAllBooks = async () =>{
    try{
      // const res = await axios.get(`http://localhost:8800/posts`);

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
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
      <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Gallery</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                 Browse throughour galleries.
                </p>

              </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {books.map((post, key) => (
              <ShopItem key={key} shop={post} />
            ))}
          </div>

        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default GalleryPage;
