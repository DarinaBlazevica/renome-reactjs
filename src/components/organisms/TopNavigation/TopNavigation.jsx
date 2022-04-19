import React, { useState } from "react";
import Hamburger from "../../atoms/Buttons/Hamburger";
import Menu from "../../molecules/Menu/Menu";
import "./TopNavigation.scss";
import "../../atoms/Buttons/Hamburger.scss";
import CartMenu from "../../molecules/CartMenu/CartMenu";
import SubNavigation from "../../molecules/SubNavigation/SubNavigation";

const TopNavigation = (props) => {
  const { TopNav, NavigationMenu, Cart } = props;

  const [hamburgerStyle, setHamburgerStyle] = useState("bar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setHamburgerStyle(hamburgerStyle === "bar" ? "change" : "bar");
    setIsMenuOpen(
      isMenuOpen === false && isSubMenuOpen === false ? true : false
    );
    setIsCartMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartMenuOpen(true);
    setIsMenuOpen(false);
    setHamburgerStyle("bar");
  };

  const openSubMenu = () => {
    setIsSubMenuOpen(true);
    setIsMenuOpen(false);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
    setIsMenuOpen(true);
  };

  return (
    <nav className="top-nav">
      <div className="top-nav__header-block">
        <div className="renome">{TopNav.title}</div>
      </div>
      <div className="top-nav__cart-block">
        {isCartMenuOpen && (
          <CartMenu cart={Cart} setIsCartMenuOpen={setIsCartMenuOpen} />
        )}
        <img
          className="top-nav__shopping-cart"
          src={TopNav.cart}
          alt="shopping-cart"
          onClick={() => toggleCart()}
        />

        <div className="top-nav__cart-count">{TopNav.cart_content}</div>
        <div className="top-nav__divider">{TopNav.divider}</div>
        <Hamburger
          toggleMenu={() => toggleMenu()}
          hamburgerStyle={hamburgerStyle}
        />
      </div>
      {isMenuOpen && (
        <Menu
          setIsMenuOpen={setIsMenuOpen}
          setHamburgerStyle={setHamburgerStyle}
          menu={NavigationMenu}
          openSubMenu={() => openSubMenu()}
        />
      )}
      {isSubMenuOpen && (
        <SubNavigation
          subnav={NavigationMenu}
          setIsSubMenuOpen={setIsSubMenuOpen}
          setHamburgerStyle={setHamburgerStyle}
          backBtnMenu={() => closeSubMenu()}
        />
      )}

      {isMenuOpen || isSubMenuOpen
        ? document.body.classList.add("disable__scroll")
        : document.body.classList.remove("disable__scroll")}
    </nav>
  );
};
export default TopNavigation;
