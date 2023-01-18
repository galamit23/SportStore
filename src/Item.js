import React from 'react'

export default function Item({name,price,pic}) {
  

    return (
    <div className='card1' >

        <div style={{padding: "10px"}}>
          <h3 className="card-title">{name}</h3>
          <img src={pic} alt="pc"></img>
          <p className="card-title">Price: {price}$</p>
          <button type="button" class="btn btn-success">Delete</button>
          {/* <button></button> */}

        </div>
    </div>
  )
}
