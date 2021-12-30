import React from "react";
// import { readdirSync } from "fs";

export default function Gallery() {
  // const photos = readdirSync("./../public/photos");

  return (
    <div className="px-3 grid grid-cols-10 gap-3 w-full justify-self-center">
      <div className="flex flex-col col-span-10 text-7xl items-center my-5">
        <span className="flex">Frederick</span>
        <span className="flex">& Backues</span>
      </div>
      <img
        className="col-span-6 h-full object-cover rounded-sm"
        src="photos/KBN00261.jpg"
      ></img>
      <img
        className="col-span-1 h-96 object-cover rounded-sm"
        src="photos/KBN00401-HDR.jpg"
      ></img>
      <img
        className="col-span-3 h-full object-cover rounded-sm"
        src="photos/CFD00092.jpg"
      ></img>
      <img
        className="col-span-4 h-full object-cover rounded-sm"
        src="photos/KBN00416.jpg"
      ></img>
      <img
        className="col-span-3 h-full object-cover rounded-sm"
        src="photos/KBN00431.jpg"
      ></img>
      <img
        className="col-span-3 h-full object-cover rounded-sm"
        src="photos/KBN00337.jpg"
      ></img>
    </div>
  );
}
