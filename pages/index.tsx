import React from "react";
import Layout from "../components/layout";

export default function index() {
  return (
    <Layout>
        <div className={"grid grid-cols-3 gap-5 p-6 w-full h-full justify-center"}>
            <div className={"flex col-span-2"}>
                <div className={"flex relative mr-52 w-full h-full rounded-xl bg-main_landscape_1 bg-no-repeat bg-cover bg-center"}>
                    <div className={"absolute inset-0 rounded-xl transition-all duration-700 backdrop-blur-lg hover:backdrop-blur-none"}/>
                </div>
            </div>
            <div className={"col-span-1"}/>
            <div className={"col-span-1"}/>
            <div className={"flex col-span-2"}>
                <div className={"flex relative ml-20 w-full h-full rounded-xl bg-main_landscape_2 bg-no-repeat bg-cover bg-center"}>
                    <div className={"absolute inset-0 rounded-xl transition-all duration-700 backdrop-blur hover:backdrop-blur-none"}/>
                </div>
            </div>
        </div>
    </Layout>
  );
}
