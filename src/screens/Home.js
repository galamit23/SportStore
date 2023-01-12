import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link className='nav-link' to='/store/allproducts'>
        <button className='allpro'>All-Products</button>
      </Link>
    </div>
  )
}
