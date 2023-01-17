import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase-config'

export default function AddTask({ onClose }) {

  // store the previous data, and can update to new data from input.  
  
  const [name, setname] = useState('');
  const [pic, setpic] = useState('');
  const [price, setprice] = useState('');
  const [inStock, setinStock] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        // addDoc(collection, new document)
        await addDoc(collection(db, 'clothes'), {
          name: name, pic: pic, price: price, inStock: inStock
        })
    }catch(error){
        alert(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:'lightgray', padding: 10, marginTop:3}}>
            <h4 className='text-center'>Add a new task</h4>
            <label>Add name</label>
            <input type='text' onChange={(e)=>setname(e.target.value)}
            className='form-control' value={name}/>

            <label>Add price</label>
            <textarea type='text' onChange={(e)=>setprice(e.target.value)}
            className='form-control' value={price}></textarea>
            
            <label>Add pic</label>
            <textarea type='text' onChange={(e)=>setpic(e.target.value)}
            className='form-control' value={pic}></textarea>
            
            <label>Add price</label>
            <textarea type='text' onChange={(e)=>setinStock(e.target.value)}
            className='form-control' value={inStock}></textarea>


            
            <input type='submit' className='btn btn-success mt-2'/>
    </form>
  )
}
