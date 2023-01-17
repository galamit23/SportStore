import React, {useState} from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../firebase-config'

export default function Add({ onClose }) {

  const [category, setcategory] = useState('');
  const [name, setname] = useState('');
  const [pic, setpic] = useState('');
  const [price, setprice] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
  
  try {
    await addDoc(collection(db,'clothes'), {
      name: name,
      pic: pic,
      price: price   
    })
    onClose();
  } catch (error){
    alert(error)
  }
}
  
  return (
    
      <from onSubmit={handleSubmit} className="form-control">
       <h4>Add new product</h4>
        <label>category:</label>
        <input className="form-control" type="text"
          onChange={(e) => setcategory(e.target.value)} 
          value={category} />
        
        <label>name:</label>
        <input className="form-control" type="text"
          onChange={(e) => setname(e.target.value)} 
          value={name} />

        <label>pic:</label>
        <input className="form-control" type="text"
          onChange={(e) => setpic(e.target.value)} 
          value={pic} />

        <label>price:</label>
        <input className="form-control" type="text"
          onChange={(e) => setprice(e.target.value)} 
          value={price}/>

      <button type="submit" className='alert-info'>Add product</button>
      </from>
    
  )
}
