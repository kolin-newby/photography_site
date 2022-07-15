import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

interface INavbarItems {
  path: string;
  title: string;
}

interface IMediaLinks {
  link: string;
  icon: IconProp;
  title: string;
}

export default function Navbar() {
  const router = useRouter();

  const navbarItems: INavbarItems[] = [
    { path: "/gallery", title: "Gallery" },
  ];

  const mediaLinks: IMediaLinks[] = [
    {
      link: "https://instagram.com/pixelatedpilgrim",
      icon: ["fab", "instagram"],
      title: "instagram"
    }
  ];

  const handleLinkClick = (e: any, path: any) => {
    e.preventDefault();
    router.push(path).catch(error => console.error(error));
  };

  return (
    <div className="flex justify-between mx-8 h-24 items-center justify-center">
      <span className={"flex group relative text-3xl font-bold"}>
        <a key={"home"} onClick={(e) => handleLinkClick(e, "/")} className={"z-10 cursor-pointer"}>
          Pixelated Pilgrim
        </a>
        <div className={`${router.asPath === "/" ? "top-3/4 group-hover:top-0" : "top-full group-hover:top-3/4"} absolute inset-x-0 bottom-0 z-0 transition-all rounded-sm bg-gradient-to-r from-pink-500 to-orange-500`}/>
      </span>
      <span className={"flex"}>
        {navbarItems.map(({ path, title }) => (
          <div key={"nav-"+path} className={"group flex relative"}>
            <div className={`${router.asPath.startsWith(path) ? "top-3/4 group-hover:top-0" : "top-full group-hover:top-3/4"} absolute inset-x-0 bottom-0 z-0 transition-all rounded-sm bg-gradient-to-r from-pink-500 to-orange-500`}/>
            <a
              className="flex text-2xl transition-all cursor-pointer z-10"
              onClick={(e) => handleLinkClick(e, path)}
            >
              {title}
            </a>
          </div>
        ))}
      </span>
      <span>
        {
          mediaLinks.map(({link, icon, title}) => (
            <div key={"social-link-" + title} className={"group relative cursor-pointer"}>
              <div className={"absolute flex inset-x-0 bottom-0 top-full group-hover:top-1/2 z-0 transition-all rounded-lg bg-gradient-to-r from-pink-500 to-orange-500"}/>
              <a href={link} target={"_blank"} rel={"noreferrer"} className={"flex"}>
                <FontAwesomeIcon icon={icon} className={"text-2xl z-10"}/>
              </a>
            </div>
          ))
        }
      </span>
    </div>
  );
}
