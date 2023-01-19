import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase-config';


// const handleDelete = async() => {
//   let docRef = doc(db, 'clothes');
//   try {
//     await deleteDoc(docRef);
//   } catch (error) {
//     alert(error)
//   }
// }


export default function Item({name,price,pic}) {
    return (
    <div className='card1' >
        <div style={{padding: "15px"}}>
          <h3 className="card-title py-1"><u>{name}</u></h3>
          <img src={pic} alt="pc"></img>
          <p className="card-title">Price: {price}$</p>
          <button type="button" className="btn btn-danger py-1" >Delete</button>
          <button type="button" className="btn btn-success py-1 pt-1" >Buy</button>
        </div>
    </div>
  )
}
