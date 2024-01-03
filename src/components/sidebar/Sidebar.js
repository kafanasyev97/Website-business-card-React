import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const path = useLocation();
  const [select, setSelect] = useState(path.pathname);
  return (
    <section>
      <div className="sidebar">
        <SidebarItem
          select={select}
          url="/"
          path="./images/home_svg.svg"
          title="Home"
        />
        <SidebarItem
          select={select}
          url="/about"
          path="./images/iconmonstr-user-circle-thin.svg"
          title="About"
        />
        <SidebarItem
          select={select}
          url="/contacts"
          path="./images/iconmonstr-mail-thin.svg"
          title="Contacts"
        />
      </div>
    </section>
  );
};

export default Sidebar;
