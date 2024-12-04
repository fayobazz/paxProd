import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Our Value",
    desc1: `We uphold the sanctity of every human life, recognizing `,
    desc2: `the inherent dignity bestowed upon each person by God`,

    image: "/images/icon/cross.jpg",
    imageDark: "/images/icon/cross.jpg",
  },
  {
    id: "tabTwo",
    title: "Our Mission",
    desc1: `Our commitment to truth extends beyond news reporting;`,
    desc2: `    it permeates every aspect of our content`,
    // image: "/images/features/features-light-01.png",
    image: "/images/icon/ch.png",

    imageDark: "/images/icon/ch.png",

    // imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: " Our Vision",
    desc1: `We cherish the freedom to proclaim the Gospel and engage `,
    desc2: `in dialogue while respecting the freedom of conscience.`,
    // image: "/images/features/features-light-01.png",
    imageDark: "/images/icon/omega.png",
    image: "/images/icon/omega.png",

    // imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;
