import React, { useState } from 'react'
import EditItem from './EditItem'

export default function Item({id,category,name,price,img}) {
  
    const [edit,setedit] = useState(false);
    return (
    <div>
        <h4>{category}</h4>
        <h3>{name}</h3>
        <button classname=""
        onClick={()=>setedit(true)}>Edit</button>
        {
            edit && <EditItem
            id={id}
            editName={name}
            editPrice={price}
            editImg={img}
            finishEdit ={ ()=>setedit(false)}/> }
        
    </div>
  )
}
