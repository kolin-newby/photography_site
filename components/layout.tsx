import React, {ReactChildren, ReactElement} from "react";
import Navbar from "./navbar";

export default function Layout({ children = <></>, title = "" }: {children: ReactElement, title: string}) {
  return (
    <div className="fixed inset-0 h-screen overflow-y-auto">
      <head>
          <title>{title}</title>
      </head>
        <Navbar />
        {/*<main>*/}
            {children}
        {/*</main>*/}
    </div>
  );
}
