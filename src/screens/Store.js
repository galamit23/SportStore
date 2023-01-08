import React from 'react'
import { Link ,Outlet } from 'react-router-dom'

export default function Store() {
  return (
    <div className='container'>
      <h2>Category</h2>
      <button className='btn btn-primary m-2'>Clothing
        <Link className='nav-link' to='store/clothing'/>
      </button>
      <button className='btn btn-primary m-2'>Accessories
        <Link className='nav-link' to='store/accessories'/>
      </button>
      <button className='btn btn-primary m-2 '> Apparatus
        <Link className='nav-link' to='store/apparatus'/>
      </button>
      <Outlet/>
    </div>
  )
}
