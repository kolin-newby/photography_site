import React from "react";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

interface INavbarItems {
  path: string;
  title: string;
}

interface IMediaLinks {
  link: string;
  icon: IconProp;
  name: string;
  title: string;
  size: SizeProp|undefined;
}

export default function Navbar() {
  const router = useRouter();

  const navbarItems: INavbarItems[] = [
    { path: "/gallery", title: "Gallery" },
  ];

  const mediaLinks: IMediaLinks[] = [
    {
      link: "https://pixelpilgrim.darkroom.tech/",
      icon: "store",
      name: "shop",
      title: "Shop Prints",
      size: undefined,
    },
    {
      link: "https://instagram.com/pixelatedpilgrim",
      icon: ["fab", "instagram"],
      name: "instagram",
      title: "View my Instagram",
      size: "lg",
    }
  ];

  const handleLinkClick = (e: any, path: any) => {
    e.preventDefault();
    router.push(path).catch(error => console.error(error));
  };

  return (
    <div className="sticky top-0 left-0 right-0 flex justify-between h-24 z-20 bg-white">
      <div className={"mx-8 flex flex-row justify-between w-full items-center"}>
        <span className={"flex group relative text-3xl font-bold"}>
          <a key={"home"} onClick={(e) => handleLinkClick(e, "/")} className={"z-10 cursor-pointer flex flex-col"}>
            <span className={"flex"}>PIXEL</span>
            <span className={"flex"}>PILGRIM</span>
          </a>
          <div className={`${router.asPath === "/" ? "top-3/4 group-hover:top-0" : "top-full group-hover:top-3/4"} absolute inset-x-0 bottom-0 z-0 transition-all rounded-sm bg-gradient-to-r from-theme-green to-theme-blue`}/>
        </span>
        <span className={"flex"}>
          {navbarItems.map(({ path, title }) => (
            <div key={"nav-"+path} className={"group flex relative"}>
              <div className={`${router.asPath.startsWith(path) ? "top-3/4 group-hover:top-0" : "top-full group-hover:top-3/4"} absolute inset-x-0 bottom-0 z-0 transition-all rounded-sm bg-gradient-to-r from-theme-green to-theme-blue`}/>
              <a
                className="flex text-2xl transition-all cursor-pointer z-10"
                onClick={(e) => handleLinkClick(e, path)}
              >
                {title}
              </a>
            </div>
          ))}
        </span>
        <span className={"flex flex-row space-x-4 items-center justify-center"}>
          {
            mediaLinks.map(({link, icon, name, title, size}) => (
              <div key={"social-link-" + name} className={"group flex relative cursor-pointer"}>
                <div className={"absolute flex inset-x-0 bottom-0 top-full group-hover:top-1/2 z-0 transition-all rounded-lg bg-gradient-to-r from-theme-green to-theme-blue"}/>
                <a href={link} target={"_blank"} rel={"noreferrer"} className={"flex"} title={title}>
                  <FontAwesomeIcon icon={icon} className={"z-10"} size={size}/>
                </a>
              </div>
            ))
          }
        </span>
      </div>
    </div>
  );
}
