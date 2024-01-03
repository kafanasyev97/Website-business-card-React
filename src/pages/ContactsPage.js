import React from "react";
import Header from "../components/Header";
import Contacts from "../components/Contacts";
import Sidebar from "../components/sidebar/Sidebar";

const ContactsPage = () => {
  return (
    <>
      <Header />
      <main>
        <Contacts />
        <Sidebar />
      </main>
    </>
  );
};

export default ContactsPage;
