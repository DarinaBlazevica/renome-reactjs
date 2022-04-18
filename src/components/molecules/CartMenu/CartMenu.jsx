import "./CartMenu.scss";
import React, { useEffect, useRef } from "react";

const CartMenu = ({ cart, setIsCartMenuOpen }) => {
  const cartRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsCartMenuOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <div className="openCart" ref={cartRef}>
      <div>{cart.price}</div>
      <div>{cart.viewCart}</div>
      <div>{cart.checkout}</div>
    </div>
  );
};
export default CartMenu;
