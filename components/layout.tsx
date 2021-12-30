import React from "react";
import Navbar from "./navbar";

export default function Layout({ children = <></>, title = null }) {
  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
      <Navbar />
      {children}
    </div>
  );
}
