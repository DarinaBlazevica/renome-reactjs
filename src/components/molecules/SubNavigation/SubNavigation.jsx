import "./SubNavigation.scss";
import Arrow from "../../atoms/assets/svg/angle-left-solid-black.svg";
import React from "react";

const SubNavigation = React.forwardRef((props, ref) => {
  const { subnav, backBtnMenu } = props;

  const reduceItem = subnav.reduce((subMenu, item) => {
    if (item.isSubMenu) return { ...subMenu, item };
    return subMenu;
  }, []);

  return (
    <div className="sub-menu" ref={ref}>
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
});
export default SubNavigation;
