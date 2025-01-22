import React, { Fragment,useContext,useEffect,useState} from 'react';
import { Button,Figure,Container,Row,Col,Card } from 'react-bootstrap';
import Model from '../UI/Model';
import classes from './CartItem.module.css'
import CartContext from '../store/CartContext';
import CartItems from './CartItems';
import axios from 'axios';
const CartItem=(props)=>{
    const cartCntxt = useContext(CartContext);

    const cartItems = cartCntxt.items.map((cartElement) => (
      <CartItems
        title={cartElement.title}
        price={cartElement.price}
        imageUrl={cartElement.imageUrl}
        quantity={cartElement.quantity}
        id={cartElement._id}
        item={cartElement}
      />
    ));
  
    let totalAmount = 0;
    cartCntxt.items.map((cartElement) => {
      return (totalAmount = Number(
        totalAmount + cartElement.price * cartElement.quantity
      ));
    });
    return (
      <Model>
        <div>
          <button onClick={props.onClose}>
            X
          </button>
        </div>
        <div className={classes.cartHeading}>
          <h3>CART</h3>
        </div>
        <div className={classes.subHeading}>
          <span className={classes.item}> ITEM</span>
          <span className={classes.price}>    PRICE</span>
          <span className={classes.quantity}>     QUANTITY</span>
        </div>
        <ul className={classes.cartUl}>{cartItems}</ul>
        <div className={classes.totalAmount}>
          <span>Total Amount</span>
          <span>Rs.{totalAmount}</span>
        </div>
        <button className={classes.purchaseButton}>PURCHASE</button>
      </Model>
    );
  };
  
export default CartItem;