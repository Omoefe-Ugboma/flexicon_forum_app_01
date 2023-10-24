import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


function SharedLayouts(){

  
    return(
      
     <>
       <NavBar/>
       
       <Outlet/>

    </>
    );
}
export default SharedLayouts;