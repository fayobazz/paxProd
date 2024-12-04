import { Metadata } from "next";
// import Hero from "@/components/Hero";
// import Brands from "@/components/Brands";
import Feature from "@/components/Features";
// import About from "@/components/About";
// import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
// import Integration from "@/components/Integration";
// import CTA from "@/components/CTA";
// import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
// import Shop from "@/components/Shop";
// import Events from "@/components/Events";
import Donate from "@/components/Donation";
// import ImgCard from "@/components/ImageCardBoard";
// import TrendingSlider from "@/components/Slider";
// import SchedueleNew from "./Schedueleslider/page";
import HeroSlider from "@/components/HeroSlider";
export const metadata: Metadata = {
  title: "PAX CTV",
  description: "Home Of Catholics",
  // other metadata
};

export default function Home() {
  return (
    <main>

      {/* <Hero2 /> */}
      <HeroSlider />
      {/* <Hero /> */}
      {/* <Brands /> */}
      {/* <FeaturesTab /> */}

      <Blog />
      {/* <Home/> */}
      <FunFact />

      {/* <TrendingSlider /> */}
      <Feature />
      {/* <Shop/> */}
      {/* <About /> */}
      {/* <ImgCard/> */}
      {/* <Events/> */}
      {/* <Integration /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
      <Testimonial />
      {/* <Pricing /> */}
      <Donate />
      <Contact />
    </main>
  );
}
