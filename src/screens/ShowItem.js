import React from 'react'
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function ShowItem() {
    
    const location = useLocation();
    console.log(location.state.dataAbout.about)
    const nevigate = useNavigate();
  
    return (
    <div id="show">
    <h1> Item : {location.state.dataName.name}</h1>
    <img src={location.state.dataPic.pic} alt="pc"/>
    
    <div id='about'>
    <h1>Price: {location.state.dataPrice.price}$</h1>
    
    <p>About: {location.state.dataAbout.about}</p> 
    
    <button type="button" onClick={()=>nevigate("/")}>Add to cart</button>
    
    </div>



    </div>
  )
}
