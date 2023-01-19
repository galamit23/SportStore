import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
// db - access to the db in firestore. 
import { db } from '../firebase-config'
import Item from '../Item'

export default function Instruments() {

  const [instruments, setinstruments] = useState([]);
  
  useEffect( ()=>{

    const getDB = async (db) => {
        // collection() - return all the collection for that path. 
        const instruCol = collection(db, 'instruments');
         // getDocs() - return all documents for our collection
         const instruSnapshot = await getDocs(instruCol);
        
         const instruList = await instruSnapshot.docs.map(doc =>(
          {
              id: doc.id, 
              // Retrieves all fields in the document as an object
              data: doc.data()
          }
      ))
      setinstruments(instruList)
        }
       // call the function: 
       getDB(db);
      },[instruments])
  
  
  
  
  return (
    <div>
       <h2 style={{color: "white"}}>Instruments</h2>
       {instruments.length > 0 && instruments.map(instrument => (
                <div key={instrument.id}>
                    <Item
                    id={instrument.id}
                    name={instrument.data.name}
                    price={instrument.data.price}
                    pic= {instrument.data.pic}/>
                </div>
            ))}
    </div>
  )
}

