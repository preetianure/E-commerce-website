import React from 'react';
import {Navbar,Button,Container} from 'react-bootstrap';
import Cart from './Cart';
import { useContext } from 'react';
import AuthContext from './UI/Context';
import {Link,Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header=(props)=>{
  const cartCntx=useContext(AuthContext);
  const history=useNavigate();
  const LogOutHandler=()=>{
    cartCntx.logOut();
  history('/login');
  }
    return(
        <div>
            <Navbar bg='dark' expand='sm' variant='dark'>
        <Container>
          <Navbar.Brand>
           <Link to='/store'>Home</Link>
          </Navbar.Brand>
          <Navbar.Brand>
          <Link to='/home'>store</Link>
          </Navbar.Brand>
          <Navbar.Brand>
           <Link to='/products'>About</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to='/contact'>Contact us</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to='/login'>Login Page</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Button onClick={LogOutHandler}>Logout</Button>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar bg='success' expand='sm' variant='light'>
        <Container>
          <h1 className='p-4'>The Generics</h1>
        </Container>
      </Navbar> 
        </div>
    )
}
export default Header;