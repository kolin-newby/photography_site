import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISidebarItems {
  path: string;
  name: string;
}

interface ISocialMediaLinks {
  link: string;
  icon: IconProp;
}

export default function Sidebar() {
  const sidebarItems: ISidebarItems[] = [
    {
      path: "https://resurface.io",
      name: "Home",
    },
    { path: "https://google.com", name: "Contact" },
  ];

  const socialMediaLinks: ISocialMediaLinks[] = [
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

  return (
    <div className="absolute left-0 w-1/5 h-full border-r-2 border-blue-600">
      <div className="flex flex-col mt-4 mb-10">
        <span className="flex text-4xl italic justify-center">Frederick</span>
        <span className="flex text-3xl italic justify-center">&</span>
        <span className="flex text-4xl italic justify-center">Backues</span>
      </div>
      <div className="flex flex-col space-y-1">
        {sidebarItems.map(({ path, name }) => (
          <div className="flex flex-col mx-2.5">
            <a
              href={path}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center text-xl hover:text-gray-600"
            >
              <span className="flex">{name}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {socialMediaLinks.map(({ link, icon }) => (
          <div className="flex flex-col mx-2.5 my1.5">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center text-3xl hover:text-gray-600"
            >
              <FontAwesomeIcon icon={icon} className="flex mr-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
