import React,{useContext, useEffect,useState} from 'react';
import { Button } from 'react-bootstrap';
import CartContext from './store/CartContext';
import axios from 'axios';
const Cart=(props)=>{
    const [val,setVal]=useState([])
    let Cartcntx=useContext(CartContext);
    let quantity=0;
    Cartcntx.items.forEach(item=>{
        quantity=quantity+Number(item.quantity)
    })
   
    
    return(
        <div>
            <Button variant="info" onClick={props.onShowCart}>Cart</Button>{' '}
            <span style={{color: 'Black'}}>{quantity}</span>
        </div>
    )
}
export default Cart;