import React from 'react'
import { Outlet ,Link } from 'react-router-dom'

export default function Clothing() {
  return (
    <div>
      <ul>
        <li>object 1</li>
        <li>object 2</li>
        <li>object 3</li>
        <li>object 4</li>
        <li>object 5</li>
      </ul>
      <Outlet/>
    </div>
  )
}
