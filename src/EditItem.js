import React, { useState } from 'react'
import { collection, doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase-config'

export default function EditItem({id,editName,editPrice,editImg,finishEdit}) {
  
    const [name,setName] = useState(editName);
    const [price,setPrice] = useState(editPrice);
    const [img,setImg] = useState(editImg);
    
    const handleUpdate= async(e) => {
        e.preventDefault();
       
        const ColDocRef = doc(db, 'clothes' ,id);
        const InsmDocRef = doc(db, 'instruments' ,id);
        const AccDocRef = doc(db, 'accessories' ,id);

        try{
            await updateDoc(ColDocRef, {
                name: name,
                // price: price,
                // img: img
            })
            finishEdit()
        }catch(error){
            alert(error)
        }

        try{
            await updateDoc(InsmDocRef, {
                name: name,
                // price: price,
                // img: img
            })
            finishEdit()
        }catch(error){
            alert(error)
        }

        try{
            await updateDoc(AccDocRef, {
                name: name,
                // price: price,
                // img: img
            })
            finishEdit()
        }catch(error){
            alert(error)
        }
    }  
    return (
    <div>
        <form onSubmit={handleUpdate}>
            <input type='text' onChange={(e)=> setName(e.target.value)}
            className="form-control" value={name} placeholder="Edit Name"/>
           
            <input type='text' onChange={(e)=> setPrice(e.target.value)}
            className="" value={price} placeholder="Edit Price"/>

            <input type='text' onChange={(e)=> setImg(e.target.value)}
            className="" value={img} placeholder="Edit Picture"/>
            <input type='submit' className='btn btn-success mt-2'/>   
        </form>


    </div>
  )
}
