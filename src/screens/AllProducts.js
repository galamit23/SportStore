// 1. useState - to store the data(array of documents from the db). 
// 2. useEffect - to get all the data from the db. 
import React, { useState, useEffect } from 'react'
// 1. collection(firestore, path) - will get the entire collection from our db.  
import { collection, getDocs } from 'firebase/firestore'
// db - access to the db in firestore. 
import { db } from '../firebase-config'
// task - separate file for each task. 
import Item from '../Item'
import Add from './Add'

export default function AllProducts() {

    // 1. Array to store all the tasks from the DB
    const [tasks, settasks] = useState([]);
    // Open & close a window of -Add a new task
    const [newTask, setNewTask] = useState(false)

    // Call the db, find the right data - and store in `tasks` - useState. 
    useEffect(()=>{

        const getTasks = async (db) => {
            // collection() - return all the collection for that path. 
            const TasksCol = collection(db, 'clothes');

            // getDocs() - return all documents for our collection
            const tasksSnapshot = await getDocs(TasksCol);

            const tasksList = await tasksSnapshot.docs.map(doc =>(
                {
                    id: doc.id, 
                    // Retrieves all fields in the document as an object
                    data: doc.data()
                }
            ))
            settasks(tasksList)
        }

        // call the function: 
        getTasks(db);

    }, [tasks])
    

    return (
        <div className='container'>
    
            <h2>Task manager</h2>

            {/* If array is not empty - loop over it and show each task: */}
            {tasks.length > 0 && tasks.map(task => (
                <div key={task.id}>
                    <Item
                    id={task.id}
                    name={task.data.name}
                    price={task.data.price}
                    pic={task.data.pic}/>
                </div>
            ))}
        </div>
      )
}
  