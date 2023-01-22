import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase-config';

export default function Item({id,name,price,pic,about}) {
  
  const handleDelete = async() => {
    let docRef = doc(db, 'clothes',id);
    try {
      await deleteDoc(docRef);
    } catch (error) {
      alert(error)
    }
  }

  const navigate = useNavigate();
  const dataName = {name}
  const dataPic = {pic}
  const dataPrice={price}
  const dataAbout={about}
  const dataID={id}

    return (
    <div className='card1' >
        <div style={{padding: "15px"}}>
          <h3 className="card-title py-1"><u>{name}</u></h3>
          <img src={pic} alt="pc"></img>
          <p className="card-title">Price: {price}$</p>
          <button type="button" className="btn btn-danger py-1" onClick={()=>handleDelete()}>Delete</button>
          
          <button type="button" className="btn btn-success py-1 pt-1"
           onClick={()=>navigate("/showitem", {state: {dataName,dataPic,dataPrice,dataAbout,dataID}})} >Buy</button>

        </div>
    </div>
  )
}
