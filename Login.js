import {Fragment,useRef,useState,useContext} from 'react';
import AuthContext from '../UI/Context';
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import CartContext from '../store/CartContext';
import axios from 'axios';
const Login=()=>{
  
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCntxt = useContext(AuthContext);
    const cartCntxt = useContext(CartContext);
  
    const history = useNavigate();
  
    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };
    const submitHandler = (event) => {
      event.preventDefault();
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
  
      setIsLoading(true);
      let url;
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFEVAjgM3hocS20OZpN78f-UXBPWLXqxg";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFEVAjgM3hocS20OZpN78f-UXBPWLXqxg";
      }
  
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication Failed";
              if (data && data.error && data.message)
                errorMessage = data.error.message;
  
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          authCntxt.logIn(data.idToken);
          history('/home')
          localStorage.setItem("email", enteredEmail);
          let email = localStorage.getItem("email");
          let crudEmail;
          if (email != null) {
            crudEmail = email.replace(/[@.]/g, "");
          }
          axios
            .get(
              `https://crudcrud.com/api/73fd1a3c253241c2a04b0a31bff7d11f/cart${crudEmail}`
            )
            .then((res) => {
              let cartItems = [];
              for (let i = 0; i < res.data.length; i++) {
                let item = res.data[i];
                cartItems.push(item);
              }
              cartCntxt.update(cartItems);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          alert(err.message);
        });
    };
  
    return (
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="text" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Loading...</p>}
  
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    );
  };
export default Login