import React, { useState } from 'react'

export default function Item({name,price,pic}) {
  
    // const [edit,setedit] = useState(false);
    return (
    <div className='card'>
        <h5 className="card-title">{name}</h5>
        <h3 className="card-title">Price: {price}</h3>
        <img src={pic} className="card-img-top" alt="pc"></img>
    </div>
  )
}
