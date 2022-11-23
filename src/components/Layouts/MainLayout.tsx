import Head from "next/head";
import React from "react";
import MainNavbar from "../Navbars/MainNavbar";

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Head>
      <title>Shop client</title>
      <meta name="description" content="Shop client" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainNavbar />
    {children}
  </>
);

type MainLayoutProps = {
  children: React.ReactNode;
};

export default MainLayout;
