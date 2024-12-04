import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Gallery",
    newTab: false,
    path: "/gallery",


  },
  {
    id: 2.1,
    title: "Blogs",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Shop",
    newTab: false,
    path: "/shop",
  },
  {
    id: 2.4,

    title: "About Us",
    newTab: false,
    path: "/docs",
  },
  {
    id: 2.5,
    title: "Contact Us",
    newTab: false,
    path: "/contact",

  },


  // {
  //   id: 4,
  //   title: "Support",
  //   newTab: false,
  //   path: "/support",
  // },
];

export default menuData;
