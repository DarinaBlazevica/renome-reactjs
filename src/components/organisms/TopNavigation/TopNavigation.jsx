import React, { useState } from "react";
import Hamburger from "../../atoms/Buttons/Hamburger";
import Menu from "../../molecules/Menu/Menu";
import "./TopNavigation.scss";
import "../../atoms/Buttons/Hamburger.scss";
import CartMenu from "../../molecules/CartMenu/CartMenu";

const TopNavigation = (props) => {
  const [hamburgerStyle, setHamburgerStyle] = useState("div");
  const [showMenu, setMenu] = useState("top-nav__menu");
  const [openCart, setCart] = useState("top-nav__cart-menu");

  const toggleMenu = () => {
    setHamburgerStyle(hamburgerStyle === "div" ? "change" : "div");
    setMenu(showMenu === "top-nav__menu" ? "show" : "top-nav__menu");
    setCart("top-nav__cart-menu");
  };

  const toggleCart = () => {
    setCart(
      openCart === "top-nav__cart-menu" ? "openCart" : "top-nav__cart-menu"
    );
    setMenu("top-nav__menu");
    setHamburgerStyle("div");
  };

  const { topnav } = props;
  const { menu } = props;

  return (
    <nav className="top-nav">
      <div className="top-nav__header-block">
        <div className="renome">{topnav.title}</div>
      </div>
      <div className="top-nav__cart-block">
        <CartMenu openCart={openCart} />
        <img
          className="top-nav__shopping-cart"
          src={topnav.cart}
          alt="shopping-cart"
          onClick={() => toggleCart()}
        />
        <div className="top-nav__cart-count">{topnav.cart_content}</div>
        <div className="top-nav__divider">{topnav.divider}</div>
        <Hamburger
          toggleMenu={() => toggleMenu()}
          hamburgerStyle={hamburgerStyle}
        />
      </div>
      <Menu showMenu={showMenu} menu={menu} />
    </nav>
  );
};
export default TopNavigation;
