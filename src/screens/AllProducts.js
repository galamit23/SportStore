import { useEffect, useState } from "react"
import React  from 'react' 
import Item from '../Item'
import { collection , getDocs } from "firebase/firestore"
import { db } from '../firebase-config'

export default function AllProducts() {
 
  const [items, setitems] = useState([])
  
  useEffect(()=>{

    const getdb = async (db) => {

        const collect = collection(db, 'items');

        const itemsSnapshot = await getDocs(collect);

        const itemsList = await itemsSnapshot.docs.map(doc =>(
            {
                id: doc.id, 
                data: doc.data()
            }
        ))
        setitems(itemsList)
    }

    getdb(db);

}, [items])
  
  return (
    <div className="container">
      <h2>AllProducts</h2>
      
      { items.map(item => (
                <div key={item.id}>
                    <Item
                    category={item.data.category}
                    name={item.data.name}
                    price={item.data.price}
                    pic={item.data.pic}/>
                </div>
      ))}
   </div>
  )
}