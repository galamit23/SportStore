import React from 'react'
import { Link ,Outlet } from 'react-router-dom'


export default function Store() {
  return (
    <div className='container' id="all">
      <h2>Category</h2>
     
      <div className='store'>
      {/* Link 1 to Clothe */}
      <Link className='nav-link' to='/store/clothing'>
        <div className='clothe'>
        <h4>Clothe</h4>
        </div>
      </Link>
      {/* Link 2 to Accessories */}
      <Link className='nav-link' to='/store/accessories'>
        <div className='accessories'>
          <h4>Accessories</h4>
        </div>
      </Link>
      {/* Link 2 to Instruments */}
      <Link className='nav-link' to='/store/instruments'>
        <div className='instrument'>
          <h4>Instruments</h4>
        </div>
      </Link>
      </div>
            
      <Outlet/>
    </div>
  )
}
