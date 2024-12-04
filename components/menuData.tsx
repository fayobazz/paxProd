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
    title: "About Us",
    newTab: false,
    path: "/docs",

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
    title: "Events",
    newTab: false,
    path: "/evnets",
  },
  {
    id: 2.5,
    title: "Gallery",
    newTab: false,
    path: "/gallery",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Donate",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  // {
  //   id: 4,
  //   title: "Support",
  //   newTab: false,
  //   path: "/support",
  // },
];

export default menuData;
