import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = (props) => {
  let activeItemClass;
  if (props.url !== props.select) {
    activeItemClass = "sidebar__block";
  } else {
    activeItemClass = "sidebar__active";
  }
  return (
    <Link to={props.url} className="sidebar__link">
      <div className={activeItemClass}>
        <img src={props.path} alt="icon" className="sidebar__icon" />
        <span className="sidebar__text">{props.title}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;
