import React from "react";
import Navbar from "./navbar";

export default function Layout({ children = <></>, title = null }) {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <Navbar />
      {children}
    </div>
  );
}
