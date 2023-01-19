import React from 'react'
import { Link , Outlet} from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-info">  
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> <Link className="nav-link" to='/'>Home</Link></li>
            <li className="nav-item"> <Link className="nav-link" to='/add'>Add</Link></li>
            <li className="nav-item"> <Link className="nav-link" to='/store'>Store</Link></li>
        </ul>        
    </nav>
      <Outlet/>
    </>
  )
}