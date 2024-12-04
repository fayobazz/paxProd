// "use client";
// import { Blog } from "@/types/blog";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const BlogItem = ({
//   index,
//   name,
//   image,
//   sc_body,
//   air_time,
// }) => {
//   // const { mainImage, title, metadata } = blog;

//   return (
//     <>
//       <motion.div
//         variants={{
//           hidden: {
//             opacity: 0,
//             y: -20,
//           },

//           visible: {
//             opacity: 1,
//             y: 0,
//           },
//         }}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 1, delay: 0.5 }}
//         viewport={{ once: true }}
//         className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
//       >
//         <Link href={`/blog/`} className="relative block aspect-[368/239]">
//           <Image src={mainImage} alt={title} fill />
//         </Link>

//         <div className="px-4">
//           <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
//             <Link href={`/blog/blog-details`}>
//               {`${title.slice(0, 40)}...`}
//             </Link>
//           </h3>
//           <p className="line-clamp-3">{metadata}</p>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default BlogItem;
// "use client";
import SingleBlogPage from "@/app/(site)/blog/blog-details/page";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
// import { Link } from 'react-router-dom';
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { body, cat_id, image, title, _id, created_at, created_by } = blog;

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
        className="animate_top rounded-lg border-2 border-cardColor p-2 bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        {/* <Link to={{
                pathname: '/blog/blog-details',
                state: {
                  name : 'fayo',
                  age : "19"
                }
            }}>
                Go to GeeksforGeeks Page
            </Link> */}
        {/* <Link
          href={{
            pathname: "/blog/blog-details",
            query: {
              // name : "jjj",
              // age : "90",
               id: _id, title: title, body: body, created_by: created_by, created_at: created_at
              }
          }}
        >

          Go about
        </Link> */}
        <Link
          // href={`/blog/`}
          href={{
            pathname: "/blog/blog-details",
            query: {
              // name : "jjj",
              // age : "90",
               id: _id, title: title, body: body, created_by: created_by, created_at: created_at
              }
          }}
          className="relative block aspect-[368/239]"

          >
          <Image src={image} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            {/* <Link href={{ pathname: '/blog/blog-details', query: { id: _id, title: title, body: body, created_by: created_by, created_at: created_at } }}> */}
              {`${title.slice(0, 40)}...`}

            {/* </Link> */}
          </h3>
          <p className="line-clamp-3">{body}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
