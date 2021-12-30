import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router from "next/router";

interface INavbarItems {
  path: string;
  title: string;
}

interface IMediaLinks {
  link: string;
  icon: IconProp;
}

export default function Navbar() {
  const navbarItems: INavbarItems[] = [
    {
      path: "/",
      title: "Home",
    },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
  ];

  const mediaLinks: IMediaLinks[] = [
    {
      link: "https://twitter.com",
      icon: ["fab", "twitter"],
    },
    {
      link: "https://instagram.com",
      icon: ["fab", "instagram"],
    },
    {
      link: "https://facebook.com",
      icon: ["fab", "facebook"],
    },
    {
      link: "https://snapchat.com",
      icon: ["fab", "snapchat-ghost"],
    },
  ];

  const handleLinkClick = (e: any, path: any) => {
    e.preventDefault();
    router.push(path);
  };

  return (
    <div className="flex h-24 items-center justify-center border border-gray-400 bg-gray-100 dark:bg-gray-800">
      {navbarItems.map(({ path, title }) => (
        <a
          className="text-3xl pb-3 pt-1.5 px-3 mx-8 transition-all rounded-full border border-transparent hover:border-gray-400"
          href={path}
          onClick={(e) => handleLinkClick(e, path)}
        >
          {title}
        </a>
      ))}
    </div>
  );
}
