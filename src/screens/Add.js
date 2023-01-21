import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase-config'

export default function AddTask({ onClose }) {

  // store the previous data, and can update to new data from input.  
  
  const [name, setname] = useState('');
  const [pic, setpic] = useState('');
  const [price, setprice] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        // addDoc(collection, new document)
        await addDoc(collection(db, 'clothes'), {
          name: name, pic: pic, price: price
        })
    }catch(error){
        alert(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-group" style={{backgroundColor:'lightgray', padding: 10, marginTop:3}}>
            <h4 className='text-center'>Add Item</h4>
            
            <lable>Category</lable>
            <br/>
            <select name="category" id="ct1">
            <option value="">--Please choose an option--</option>
            <option value="Clothing">Clothe</option>
            <option value="Accessories">Accessories</option>
            <option value="Instruments">Instruments</option>
            </select>
            <br/>

            <label>Name</label>
            <input type='text' onChange={(e)=>setname(e.target.value)}
            className='form-control' value={name}/>
            
            <label>Image</label>
            <input type='text' onChange={(e)=>setpic(e.target.value)}
            className='form-control' value={pic}/>
            
            <label>Price</label>
            <input type='text' onChange={(e)=>setprice(e.target.value)}
            className='form-control' value={price}/>
            
            <input type='submit' className='btn btn-success mt-2'/>
    </form>
  )
}
