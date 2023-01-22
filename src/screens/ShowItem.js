import React from 'react'
import {useLocation} from 'react-router-dom';

export default function ShowItem() {
    
    const location = useLocation();
    console.log(location.state.dataAbout.About)
  
    return (
    <div id="show">
    <h1> Item : {location.state.dataName.name}</h1>
    <img src={location.state.dataPic.pic} alt="pc"/>
    <div>
    <h1>Price: {location.state.dataPrice.price}$</h1>
    <p>About: {location.state.dataAbout.About}</p> 
    
    <button type="button" >Add to cart</button>
    </div>



    </div>
  )
}
