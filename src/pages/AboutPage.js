import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Sidebar from "../components/sidebar/Sidebar";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Sidebar />
      </main>
    </>
  );
};

export default AboutPage;
