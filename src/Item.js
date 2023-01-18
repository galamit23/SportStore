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
        <div style={{padding: "10px"}}>
          <h3 className="card-title">{name}</h3>
          <img src={pic} alt="pc"></img>
          <p className="card-title">Price: {price}$</p>
          {/* <button type="button" className="btn btn-success" >Delete</button> */}
        </div>
    </div>
  )
}
