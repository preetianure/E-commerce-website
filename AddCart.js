import React,{useContext,useState} from 'react';
import { Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import CartContext from './store/CartContext';
import axios from 'axios';
const AddCart=(props)=>{
    const Cartcntx=useContext(CartContext)
    const [name,setName]=useState([]);
    const EventHandler=(event)=>{
        event.preventDefault();
        Cartcntx.addItem(props.item);
        
          
    }
    return (
        <div class="position-end">
        <Button variant="info" onClick={EventHandler}>Add to Cart</Button>{' '}
        </div>
    )
}
export default AddCart;