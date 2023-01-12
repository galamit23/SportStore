import React, { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase-config'

export default function EditItem({id,editName,editPrice,editImg}) {
  
    const [name,setName] = useState(editName);
    const [price,setPrice] = useState(editPrice);
    const [img,setImg] = useState(editImg);
    
    const handleUpdate= async(e) => {
        e.preventDefault();
        const itemDocRef = doc(db, 'items',id);

        try{
            await updateDoc(itemDocRef, {
                name: name,
                price: price,
                img: img
            })
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
