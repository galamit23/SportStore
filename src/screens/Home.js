import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Logosport from '../LogoSport2.jpg' 

export default function Home() {
  return (
    <div>
       <img src={Logosport} className="logo" alt="BigCo Inc. logo" />
      <Link className='nav-link' to='/allproducts'><button className='allpro'>Shop Now</button></Link>
      <Footer/>
    </div>
  )
}
