import React from 'react'

export default function Item({name,price,pic}) {
  

    return (
    <div className='card1' >

        <div style={{padding: "10px"}}>
          <h4 className="card-title">{name}</h4>
          <img src={pic} alt="pc"></img>
          <p className="card-title">Price: {price}$</p>
        </div>
    </div>
  )
}
