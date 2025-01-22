import { Outlet } from "react-router-dom";
import Header from '../Header';
import Contact from './Contact';
const RootLayout=(props)=>{
return(
    <>
    <Header/>
    <Outlet></Outlet> 
    </>
)
}
export default RootLayout;