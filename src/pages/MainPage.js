import React, { useEffect } from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Sidebar from "../components/sidebar/Sidebar";

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Info />
        <Sidebar />
      </main>
    </>
  );
};

export default MainPage;
