import React, { FC } from "react";

import Head from "next/head";
import TopNavBar from "./TopNavBar";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Unihack Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavBar />
      <div style={{ height: "64px" }} />
      {children}
    </div>
  );
};

export default Layout;
