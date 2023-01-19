import React from 'react'
import { Link ,Outlet } from 'react-router-dom'


export default function Store() {
  return (
    <div className='container'>
      <h2>Category</h2>
      
      <Link className='nav-link' to='/store/clothing'>
        <button className='btn btn-primary m-2'>Clothing</button>
      </Link>

      <Link className='nav-link' to='/store/accessories'>
        <button className='btn btn-primary m-2'>Accessories</button>
      </Link>

      <Link className='nav-link' to='/store/Apparatus'>
        <button className='btn btn-primary m-2'>Apparatus</button>
      </Link>
            
      <Outlet/>
    </div>
  )
}
