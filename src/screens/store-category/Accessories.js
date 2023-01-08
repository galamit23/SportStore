import React from 'react'
import { Link ,Outlet } from 'react-router-dom'

export default function Accessories() {
  return (
    <div>
      <h2>List of Accessories</h2>
      
      <Outlet/>
    </div>
  )
}
