import { addDoc, collection} from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase-config'

export default function AddTask() {

  // store the previous data, and can update to new data from input.  
  
  const [name, setname] = useState('');
  const [pic, setpic] = useState('');
  const [price, setprice] = useState('');
  const [about, setabout] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        // addDoc(collection, new document)
        await addDoc(collection(db, 'clothes'), {
          name: name, pic: pic, price: price ,about : about
        })
    }catch(error){
        alert(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} id="form">

            <h2 className='text-center'>Add New Item</h2>
            
            <label>Category</label>
            <br/>
            <select name="category" id="ct1">
            <option value="">--Choose an option--</option>
            <option value="Clothing">Clothe</option>
            <option value="Accessories">Accessories</option>
            <option value="Instruments">Instruments</option>
            </select>
            
            <br/>

            <label>Name</label>
            <input type='text' onChange={(e)=>setname(e.target.value)}
            className='form-control' style={{width: "300px"}} value={name}/>
            
            <label>Image</label>
            <input type='text' onChange={(e)=>setpic(e.target.value)}
            className='form-control' value={pic}/>
            
            <label>Price</label>
            <input type='text' onChange={(e)=>setprice(e.target.value)}
            className='form-control' value={price}/>
            
            <label>About</label>
            <textarea type='text' placeholder='Type here...' onChange={(e)=>setabout(e.target.value)}
            className='form-control' value={about}/> 

            <input type='submit'  style={{width: "100px", margin: "80px"}} className='btn btn-success mt-2'/>
            
    </form>
    
  )
}
