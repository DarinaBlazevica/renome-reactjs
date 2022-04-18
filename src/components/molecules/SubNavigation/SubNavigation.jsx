import "./SubNavigation.scss";
import Arrow from "../../atoms/assets/svg/angle-left-solid-black.svg";
import React, { useEffect, useRef } from "react";

const SubNavigation = ({ subnav, setIsSubMenuOpen,setHamburgerStyle, backBtnMenu }) => {
  const reduceItem = subnav.reduce((subMenu, item) => {
    if (item.isSubMenu) return { ...subMenu, item };
    return subMenu;
  }, []);

  const subMenuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (subMenuRef.current && !subMenuRef.current.contains(e.target)) {
        setIsSubMenuOpen(false);
        setHamburgerStyle("bar");
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <div className="visible" ref={subMenuRef}>
      <div className="top-nav__sub-navigation__back" onClick={backBtnMenu}>
        <button type="button" className="top-nav__sub-navigation__backbtn">
          <img src={Arrow} alt="back_button" />
        </button>
        Back
      </div>
      {reduceItem.item.subMenu.map((subMenuItem, i) => {
        return <div key={i}>{subMenuItem.title}</div>;
      })}
    </div>
  );
};
export default SubNavigation;
