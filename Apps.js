import React,{useContext} from 'react';
import App from './App';
import Router from './components/Router/Router';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './components/Router/RootLayout';
import Home from './components/Router/Home';
import Contact from './components/Router/Contact';
import ProductDetails from './components/Router/ProductDetails';
import Login from './components/Router/Login';
import { Navigate } from 'react-router-dom';
import AuthContext from './components/UI/Context';

const Apps=()=>{
    const Authcntx=useContext(AuthContext)
    async function EventItemhandler(expenceData){
        const response=await fetch('https://e-commerce-f48e5-default-rtdb.firebaseio.com/details.json',{
            method:'POST',
            body:JSON.stringify(expenceData),
            headers:{
                'content-type':'application/json'
            } 
        }
        )

    }
    const router=createBrowserRouter([

    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {path:'/home',element:<App/>},
            {path:'/products',element:<Router/>},
            {path:'/store',element:<Home/>},
            {path:'/contact',element:<Contact onAddDetails={EventItemhandler}/>},
            {path:'/home/:productId',element:<ProductDetails/>},
            {path:'/login',element:<Login/>}
        ],
    },    
      ])
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}
export default Apps;