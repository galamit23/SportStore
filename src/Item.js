import React, { useState } from 'react'
import EditItem from './EditItem'

export default function Item({name,price,pic}) {
  
    const [edit,setedit] = useState(false);
    return (
    <div>
      <h3>Test Item</h3>
        <h3>{price}</h3>
        <h3>{name}</h3>
        <h3>{pic}</h3>
    </div>
  )
}
