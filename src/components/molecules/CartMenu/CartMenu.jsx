import "./CartMenu.scss";
import React from "react";

const CartMenu = React.forwardRef((props, ref) => {
  const { cart } = props;

  return (
    <div className="openCart" ref={ref}>
      <div>{cart.price}</div>
      <div>{cart.viewCart}</div>
      <div>{cart.checkout}</div>
    </div>
  );
});

export default CartMenu;
