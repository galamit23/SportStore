import { useEffect, useState } from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from './firebase-config'
import Item from './Item';
import Add from './screens/Add' 

export default function ItemManager() {
  
    const [items ,setItems] = useState([]);
    const [newItem, setNewItem] = useState(false)
    
    useEffect(()=>{
    
    const getItems = async (db) => { 

    const itemCollection = collection(db, 'items');
    const itemSnapshot = await getDocs(itemCollection);
    const itemsList = await itemSnapshot.docs.map(doc => (
        {
            id: doc.id,
            data:doc.data()
        
        }
    ))
    setItems(itemsList)
    }

    getItems(db);
},[items])  

  
    return (
    <div>
        <h2>ItemManager</h2>
    <button className='btn mb-2' style={{backgroundColor:'darkcyan'}}
    onClick={()=>setNewItem(true)}>Add a new Item</button>

    {/* onClose - prop we send to AddTask - it is a function. Will close the component `AddTask` */}
    {newTask && <Add onClose={()=>setNewItem(false)}/>}

         {items.length>0 && items.map(item => (
            <div key ={item.id}>
                <Item 
                category={item.data.category}
                name={item.data.name}
                price={item.data.price}
                img={item.data.pic}/>
                 
            </div>
        ))}
        
        </div>
  )
}

