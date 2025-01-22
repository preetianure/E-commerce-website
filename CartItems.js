import React, { useContext } from "react";
import classes from "./CartItems.module.css";
import CartContext from "../store/CartContext";

const CartItems = (props) => {
  const cartCntxt = useContext(CartContext);
  return (
    <li className={classes.cartItemList}>
      <div className={classes.cartColumn}></div>
      <span className={classes.items}>
        <img src={props.imageUrl} alt="the product image" />
        <span>{props.title}</span>
      </span>

      <span className={classes.price}>{props.price}</span>
      <span className={classes.cartQuantity}>{props.quantity}</span>
      {/* change to input later */}
      <button
        className={classes.removeButton}
        onClick={() => {
          cartCntxt.removeItem(props.item);
        }}
      >
        Remove
      </button>
    </li>
  );
};
export default CartItems;