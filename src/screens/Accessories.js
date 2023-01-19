import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
// db - access to the db in firestore. 
import { db } from '../firebase-config'
import Item from '../Item'

export default function Accessories() {

  const [accessories, setaccessories] = useState([]);
  
  useEffect( ()=>{

    const getDB = async (db) => {
        // collection() - return all the collection for that path. 
        const acCol = collection(db, 'accessories');
         // getDocs() - return all documents for our collection
         const acSnapshot = await getDocs(acCol);
        
         const acList = await acSnapshot.docs.map(doc =>(
          {
              id: doc.id, 
              // Retrieves all fields in the document as an object
              data: doc.data()
          }
      ))
      setaccessories(acList)
        }
       // call the function: 
       getDB(db);
      },[accessories])
  
  
  
  
  return (
    <div>
       <h2 style={{color: "white"}}>Accessories</h2>
            {/* If array is not empty - loop over it and show each product: */}
            {accessories.length > 0 && accessories.map(accessorie => (
                <div key={accessorie.id}>
                    <Item
                    id={accessorie.id}
                    name={accessorie.data.name}
                    price={accessorie.data.price}
                    pic= {accessorie.data.pic}/>
                </div>
            ))}
    </div>
  )
}

