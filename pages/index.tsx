import React from "react";
import Layout from "../components/layout";

export default function index() {
  return (
    <Layout title={"Pixel Pilgrim"}>
        <div className={"flex flex-col space-y-6 p-6 w-full h-full justify-center"}>
            <div className={"flex relative w-full h-1/2 rounded-xl bg-main_landscape_3 bg-no-repeat bg-cover bg-center group"}>
                <div className={"absolute inset-0 rounded-xl transition-all duration-700 group-hover:backdrop-blur-none backdrop-blur-none z-0"}/>
                <div className={"opacity-0 group-hover:opacity-100 justify-center items-center flex absolute inset-y-0 right-0 left-1/3 transition-all duration-700 bg-gradient-to-r from-transparent to-gray-700 rounded-r-xl z-10"}>
                    <span className={"flex text-2xl text-white"}>A mountain top on Catalina Island in California</span>
                </div>
            </div>
            <div className={"flex relative w-full h-1/2 rounded-xl bg-main_landscape_2 bg-no-repeat bg-cover bg-center group"}>
                <div className={"absolute inset-0 rounded-xl transition-all duration-700 group-hover:backdrop-blur-none backdrop-blur-none"}/>
                <div className={"opacity-0 group-hover:opacity-100 justify-center items-center flex absolute inset-y-0 left-0 right-1/3 transition-all duration-700 bg-gradient-to-l from-transparent to-gray-700 rounded-l-xl z-10"}>
                    <span className={"flex text-2xl text-white"}>Highway 93 near Boulder Colorado</span>
                </div>
            </div>
            <div className={"flex relative w-full h-1/2 rounded-xl bg-main_landscape_1 bg-no-repeat bg-cover bg-center group"}>
                <div className={"absolute inset-0 rounded-xl transition-all duration-700 group-hover:backdrop-blur-none backdrop-blur-none"}/>
                <div className={"opacity-0 group-hover:opacity-100 justify-center items-center flex absolute inset-y-0 right-0 left-1/3 transition-all duration-700 bg-gradient-to-r from-transparent to-gray-700 rounded-r-xl z-10"}>
                    <span className={"flex text-2xl text-white"}>Clyfford Still Museum in Denver Colorado</span>
                </div>
            </div>
        </div>
    </Layout>
  );
}
