// import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Blog } from "@/types/blog";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid PAX CTV",
  description: "This is Blog details page for PAX",
  // other metadata
};
// export  const getServerSideProps= (context)=> {
//   console.log(context.query)
//   return {
//       props: {
//          title: context.query.title //pass it to the page props
//       }
//   }
// }

// export async function getProjects  (context) {
//     console.log(context.query)
//     // returns { id: episode.itunes.episode, title: episode.title}
//     const res = await fetch(context.query)
//     const projects = await res.json()

//     //you can make DB queries using the data in context.query
//     return {
//         props: {
//           //  title: context.query.title,
//           //  _id: context.query._id,
//           // //  title : context.query.title ,
//           //  body : context.query.body ,
//           //  created_by : context.query.created_by,
//           //  created_at : context.query.created_at
//           projects

//            //pass it to the page props
//         }
//     }
// }
const SingleBlogPage =  (
  {searchParams} : {searchParams :

    {
      id: string, title: string, body: string, created_by: string, created_at: string, image : string

      // name : string;
      // age: string;
    }
  }
) => {
  const id = searchParams.id;
  const title = searchParams.title;
  const body = searchParams.body;
  const created_by = searchParams.created_by;
  const created_at = searchParams.created_at;
  const image = searchParams.image;





console.log(searchParams.body);
  // const { body, cat_id, image, title, _id, created_at, created_by } = blog;

  // const { title = 'defaultValue' } = location.query || {}

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">


            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={image}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {title}
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{created_by}
                    {/* {projects.created_by} */}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      {created_at}
                      {/* {projects.created_at} */}
                    </span>{" "}
                  </li>

                </ul>

                <div className="blog-details">
                  <p>
                 {/* {projects.body} */}
                  </p>

                  <p>
                  {/* {projects.body} */}
                  </p>

                  <div className="flex flex-wrap gap-5">
                    {/* <Image
                      // src={projects.image}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      // src={projects.image}
                      width={350}
                      height={200}
                      alt="image"
                    /> */}
                  </div>

                  {/* <h3 className="pt-8">
                    Nunc elementum elit viverra, tempus quam non
                  </h3> */}

                  <p>
                   {body}
                  </p>
                </div>

                {/* <SharePost /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
