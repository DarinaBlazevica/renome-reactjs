import "./SubNavigation.scss";
import Arrow from "../../atoms/assets/svg/angle-left-solid-black.svg";

const SubNavigation = ({ subnav, openSubmenu, backBtnMenu }) => {
  
  const reduceItem = subnav.reduce((subMenu, item) => {
    if (item.isSubMenu) return { ...subMenu, item };
    return subMenu;
  }, []);

  return (
    <div className={openSubmenu}>
      <a className="top-nav__sub-navigation__back" onClick={backBtnMenu}>
        <button type="button" className="top-nav__sub-navigation__backbtn">
          <img src={Arrow} alt="back_button" />
        </button>
        Back
      </a>
      {reduceItem.item.subMenu.map((subMenuItem, i) => {
        return <a key={i}>{subMenuItem.title}</a>;
      })}
    </div>
  );
};
export default SubNavigation;
