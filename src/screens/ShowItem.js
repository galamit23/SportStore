import React from 'react'
import {useLocation} from 'react-router-dom';

export default function ShowItem() {
    
    const location = useLocation();
    console.log(location.state)
  
    return (
    <div>
        
        
    <h1 style={{color :"White"}}> Item : {location.state.dataName.name}</h1>
    <img src={location.state.dataPic.pic} alt="pc"/>
    <h1>Price: {location.state.dataPrice.price}$</h1>

    {/* <p>About {props.about}</p>  */}

    <button type="button" >Add to cart</button>




    </div>
  )
}
