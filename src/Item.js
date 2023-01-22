import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase-config';

export default function Item({name,price,pic,about}) {
  
  // const handleDelete = async() => {
  //   let docRef = doc(db, 'clothes');
  //   try {
  //     await deleteDoc(docRef);
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  const navigate = useNavigate();
  const dataName = {name}
  const dataPic = {pic}
  const dataPrice={price}
  const dataAbout={about}

    return (
    <div className='card1' >
        <div style={{padding: "15px"}}>
          <h3 className="card-title py-1"><u>{name}</u></h3>
          <img src={pic} alt="pc"></img>
          <p className="card-title">Price: {price}$</p>
          <button type="button" className="btn btn-danger py-1" >Delete</button>
          {/* <Link to=""> */}
          <button type="button" className="btn btn-success py-1 pt-1"
           onClick={()=>navigate("/showitem", {state: {dataName,dataPic,dataPrice,dataAbout}})} >Buy</button>
          {/* </Link> */}
        </div>
    </div>
  )
}
