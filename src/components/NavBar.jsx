import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  
 

  function checkPathMatchRoute(route){
    if(route === location.pathname){
      return "black";
    }
    return "#616161";
    
  }

  return (
    <div className='Container'>
        <ul>
          <li onClick={()=>navigate("/")}
            style={{color:`${checkPathMatchRoute("/")}`}}
            
          >todo</li>
          <li onClick={()=>navigate("/about")}
            style={{color:`${checkPathMatchRoute("/about")}`}}
          >about</li>
        </ul>
    </div>
  )
}

export default NavBar;