import React, { useState } from 'react'

export default function Item({name,price,pic}) {
  
    const [edit,setedit] = useState(false);
    return (
    <div class="card" style="width: 18rem;">
        <h5 class="card-title">{name}</h5>
        <h3 class="card-title">Price: {price}</h3>
        <img src={pic} class="card-img-top" alt="pc"></img>
    </div>
  )
}
