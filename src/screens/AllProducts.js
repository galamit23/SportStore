// 1. useState - to store the data(array of documents from the db). 
// 2. useEffect - to get all the data from the db. 
import React, { useState, useEffect } from 'react'
// 1. collection(firestore, path) - will get the entire collection from our db.  
import { collection, getDocs } from 'firebase/firestore'
// db - access to the db in firestore. 
import { db } from '../firebase-config'
// task - separate file for each task. 
import Item from '../Item'


export default function AllProducts() {

    // 1. Array to store all the tasks from the DB
    const [clothes, setclothes] = useState([]);
    const [accessories, setaccessories] = useState([]);
    const [instruments, setinstruments] = useState([]);


    // Call the db, find the right data - and store in `tasks` - useState. 
    useEffect(()=>{

        const getDB = async (db) => {
            // collection() - return all the collection for that path. 
            const clCol = collection(db, 'clothes');
            const acCol = collection(db, 'accessories');
            const instruCol = collection(db, 'instruments');

            // getDocs() - return all documents for our collection
            const clSnapshot = await getDocs(clCol);
            const acSnapshot = await getDocs(acCol);
            const instruSnapshot = await getDocs(instruCol);

            const clList = await clSnapshot.docs.map(doc =>(
                {
                    id: doc.id, 
                    // Retrieves all fields in the document as an object
                    data: doc.data()
                }
            ))
            setclothes(clList)

            const acList = await acSnapshot.docs.map(doc =>(
                {
                    id: doc.id, 
                    // Retrieves all fields in the document as an object
                    data: doc.data()
                }
            ))
            setaccessories(acList)

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

    }, [clothes],[accessories],[instruments])
    

    return (
        <div className='container'>
    
            <h2>All Products</h2>

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

             {/* If array is not empty - loop over it and show each product: */}
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



//  <div class="card" style="width: 18rem;">
//  <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//      <a href="#" class="btn btn-primary">Go somewhere</a>
//    </div>
//  </div> 
  