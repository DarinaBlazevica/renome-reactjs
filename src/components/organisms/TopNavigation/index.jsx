import Hamburger from "../../atoms/Buttons/Hamburger"
import Menu from "../../molecules/Menu";
import "./TopNavigation.scss";
import "../../atoms/Buttons/Hamburger.scss";
import CartMenu from "../../molecules/CartMenu";
import SubNavigation from "../../molecules/SubNavigation";
import React, { useEffect, useRef, useState } from "react";

const TopNavigation = (props) => {
  const { TopNav, NavigationMenu, Cart } = props;

  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hamburgerStyle, setHamburgerStyle] = useState("bar");
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  
  const menuRef = useRef();
  const cartRef = useRef();
  const subMenuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target) &&
        isCartMenuOpen === true
      ) {
        setIsCartMenuOpen(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        isMenuOpen === true
      ) {
        setIsMenuOpen(false);
        setHamburgerStyle("bar");
      }
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(e.target) &&
        isSubMenuOpen === true
      ) {
        setIsSubMenuOpen(false);
        setHamburgerStyle("bar");
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

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
        {isCartMenuOpen && <CartMenu cart={Cart} ref={cartRef} />}
        <img
          className="top-nav__shopping-cart"
          src={TopNav.cart}
          alt="shopping-cart"
          onClick={() => toggleCart()}
        />

        <div className="top-nav__cart-count">{TopNav.cart_content}</div>
        <div className="top-nav__divider">{TopNav.divider}</div>
        <Hamburger
          toggleBurger={() => toggleMenu()}
          hamburgerStyle={hamburgerStyle}
        />
      </div>
      {isMenuOpen && (
        <Menu
          menu={NavigationMenu}
          openSubMenu={() => openSubMenu()}
          ref={menuRef}
        />
      )}
      {isSubMenuOpen && (
        <SubNavigation
          ref={subMenuRef}
          subnav={NavigationMenu}
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
