// import SidebarLink from "@/components/Docs/SidebarLink";
// import FeaturesTab from "@/components/FeaturesTab";
// import AboutHero from "@/components/HeroSecond";
// import Team from "@/components/Team";
// import { Metadata } from "next";
// import Image from "next/image";
// export const metadata: Metadata = {
//   title: "About Us Page - PAX CTV ",
//   description: "This is About Us page for PAX CTV",
//   // other metadata
// };

// export default function DocsPage() {
//   return (
//     <>
//       <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
//         <div className="container mx-auto">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4 lg:w-1/4">
//               <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
//                 <ul className="space-y-2">
//                   {/* <SidebarLink /> */}
//                 </ul>
//               </div>
//             </div>

//             <div className="w-full px-4 lg:w-3/4">
//               <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
//                 <h1>About Us</h1>

//                 <p className="text-body-color dark:text-body-color-dark text-base">
//                   About Us Content will go here
//                 </p>
//                 {/* <div> */}
//                 <Image
//                   src="/images/shape/shape-01.png"
//                   alt="shape"
//                   width={46}
//                   height={246}
//                   className="absolute -left-11.5 top-0"
//                 />
//                 {/* </div> */}

//                 {/* <AboutHero /> */}
//                 {/* <p className="text-body-color dark:text-body-color-dark text-base">
//                   Please visit:{" "}
//                   <b>
//                     <a href="https://nextjstemplates.com/docs">
//                       nextjstemplates.com/docs
//                     </a>
//                   </b>{" "}
//                  About us description goes here
//                 </p> */}
//               </div>
//             </div>
//             <AboutHero />
//             <FeaturesTab />
//           </div>
//           <Team/>

//         </div>
//       </section>
//     </>
//   );
// }
import About from "@/components/About";
import SidebarLink from "@/components/Docs/SidebarLink";
import FeaturesTab from "@/components/FeaturesTab";
import AboutHero from "@/components/HeroSecond";
import Team from "@/components/Team";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "About Us Page - PAX CTV ",
  description: "This is About Us page for PAX CTV",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
   <About />
    </>
  );
}
