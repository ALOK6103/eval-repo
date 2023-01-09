import React from 'react'
import Link from "next/link"
import Home from '../pages/portfolio/Home'
const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"50px",fontSize:"30px"}}>
        <div >
        <Link href="/portfolio/Home">Home</Link>
        </div>
        <div>
        <Link href="/portfolio/Project">Projects</Link>
        </div>
    </div>
  )
}

export default Navbar