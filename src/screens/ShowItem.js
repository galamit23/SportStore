import React,{useState} from 'react'
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import EditItem from '../EditItem';

export default function ShowItem() {
    
    const location = useLocation();
    const nevigate = useNavigate();
    const [edit, setedit] = useState(false)
  
    console.log(location.state.dataID.id);
    return (
    <div id="show">
    <h1> Item : {location.state.dataName.name}</h1>
    <img src={location.state.dataPic.pic} alt="pc"/>
    
    <div id='about'>
    <h1>Price: {location.state.dataPrice.price}$</h1>
    
    <p>About: {location.state.dataAbout.about}</p> 
    
    <button type="button" onClick={()=>nevigate("/")}>Add to cart</button>
    

    <button className='btn btn-primary' onClick={()=>setedit(true)}>Edit</button>
      {edit && <EditItem
      id={location.state.dataID.id}
      name={location.state.dataName.name}
      price={location.state.dataPrice.price}
      pic= {location.state.dataPic.pic}
      about={location.state.dataAbout.about}
      collection={location.state.dataCol.collection}
      finishEdit={()=>setedit(false)} />}
    </div>

    </div>
  )
}
