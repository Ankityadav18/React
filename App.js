import React from "react";
import ReactDOM from "react-dom/client"




//!Header section
const Heading=()=>{
  return (
   <div className="header">
      <div className="logo-container">
         <img  className="logo"    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
      </div>
      <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
         </ul>

      </div>

   </div>

   )
}


//!
const RestaurantCard=()=>{
   return (
      <div className="res-card">
         <div>
          
         </div>
      </div>
   )
}









const Body=()=>{
   return (
      <div className="body">
         <div>
            Search
         </div>
         <div className="res-container">

         </div>

      </div>

   )
}





 const App=()=>{
  return (
   <div className="app">
      <Heading/>
      <Body/>

   </div>
  )
 }


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)