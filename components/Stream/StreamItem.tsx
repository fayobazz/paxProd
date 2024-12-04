// "use client";
// import { Blog } from "@/types/blog";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const StreamItem = ({
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

// export default StreamItem;
// "use client";
import { Blog } from "@/types/blog";
import { Stream } from "@/types/stream";
// import { Stream } from "@/types/stream";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";

const StreamItem = ({ stream }: { stream: Stream }) => {
  const { st_body, st_image, st_title,st_url, _id, created_at, created_by } = stream;

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
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <ReactPlayer url = {st_url} className='video'
       alt='{st_title'
       controls
       />
          {/* <Image src={st_image} alt={st_title} fill /> */}
        </Link>

        <div className="px-4">
          {/* <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={{ pathname : '/blog/blog-details' , query : {id: _id, title : title , body : body , created_by : created_by, created_at : created_at }}}>
              {`${sc_title.slice(0, 40)}...`}
            </Link>
          </h3> */}
          <p className="line-clamp-3">{st_body}</p>
        </div>
      </motion.div>
    </>
  );
};

export default StreamItem;
