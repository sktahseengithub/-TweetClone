import React from 'react'
import "./Home.css";
import HomeOption from "../../Componenets/HomeOption/HomeOption";
import HomeMain from "../../Componenets/HomeMain/HomeMain";
import HomeWidgets from "../../Componenets/HomeWidgets/HomeWidgets"


function Home() {
  return (
   
    <div className='homeContainer'>
             
    <div className="leftContainer">
        <HomeOption />
    </div>
    <div className="centerContainer">
        <HomeMain />
        </div>
    
    <div className="rightContainer">
        <HomeWidgets />
    </div>
     </div>
)

  
}

export default Home
