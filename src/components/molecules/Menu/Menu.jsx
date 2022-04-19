import "./Menu.scss";
import React, { useEffect, useRef } from "react";

const Menu = ({ menu, setIsMenuOpen, setHamburgerStyle, openSubMenu }) => {

  const menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setHamburgerStyle("bar");
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const setMenuContent = (item, i) => {
    if (item.title === "Search") {
      return (
        <div className="search__section" key={i}>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            title="Type in a category"
          />
          <img className="search-icon" src={item.path} alt="search-bar" />
        </div>
      );
    } else if (item.title === "Features") {
      return (
        <a
          className="menu__feature"
          href={item.url}
          key={i}
          onClick={openSubMenu}
        >
          {item.title}
          <button type="button" className="menu-feature__btn">
            <img src={item.path} alt="features-button" />
          </button>
        </a>
      );
    } else {
      return (
        <a href={item.url} key={i}>
          {item.title}
        </a>
      );
    }
  };
  return (
    <div className="menu" ref = {menuRef}>
      {menu.map((item, i) => {
        return setMenuContent(item, i);
      })}
    </div>
  );
};
export default Menu;
