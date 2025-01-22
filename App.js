import { Button,Navbar,Container } from 'react-bootstrap';
import React,{useState,useContext} from 'react';
import Products from './components/Products';
import AddCart from './components/AddCart';
import Header from './components/Header';
import CartItem from './components/CartItem/CartItem'
import CreateProvider from './components/store/CreateProvider';
import Router from './components/Router/Router';
import Cart from './components/Cart';
import AuthContext from './components/UI/Context';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
function App() {
  const Authcntx=useContext(AuthContext)
  const[create,setCreate]=useState(false)
  const CartHandler=()=>{
    setCreate(true);
   
  }
  const HideHandler=()=>{
    setCreate(false);
  }
  return (
    <CreateProvider>
      <Container>
      <Cart onShowCart={CartHandler}/>
      </Container>
      {create&&<CartItem onClose={HideHandler}/>}  
      {Authcntx.isLoggedIn&&<Products />}
      {!Authcntx.isLoggedIn&&<Navigate to='/login'/>}
       
    </CreateProvider>
  );
}  
export default App;
