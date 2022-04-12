import "./CartMenu.scss"

const CartMenu =({openCart})=> {
    return(
      <div className={openCart} id="cart-menu">
        <p>$44.50</p>
        <p>View Cart</p>
        <p>Checkout</p>
      </div>
    )
}
export default CartMenu;