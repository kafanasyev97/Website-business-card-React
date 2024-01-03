import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
