import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
// db - access to the db in firestore. 
import { db } from '../firebase-config'
import Item from '../Item'


export default function Clothing() {

  const [clothes, setclothes] = useState([]);
  
  useEffect( ()=>{

    const getDB = async (db) => {
        // collection() - return all the collection for that path. 
         const clCol = collection(db, 'clothes');
         // getDocs() - return all documents for our collection
         const clSnapshot = await getDocs(clCol);
        
         const clList = await clSnapshot.docs.map(doc =>(
          {
              id: doc.id, 
              // Retrieves all fields in the document as an object
              data: doc.data()
          }
      ))
      setclothes(clList)
        }
       // call the function: 
       getDB(db);
      },[clothes])
  
  
  
  
  return (
    <div>
       <h2 style={{color: "white"}}>Clothe</h2>
            {/* If array is not empty - loop over it and show each product: */}
            {clothes.length > 0 && clothes.map(clothe => (
                <div key={clothe.id}>
                    <Item
                    id={clothe.id}
                    name={clothe.data.name}
                    price={clothe.data.price}
                    pic= {clothe.data.pic}/>
                </div>
            ))}
    </div>
  )
}
