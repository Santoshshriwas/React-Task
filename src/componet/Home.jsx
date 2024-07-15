import React from 'react'
import {Link, Outlet, useNavigate} from "react-router-dom"

const Home = () => {
  let navigate= useNavigate()
  const Logout=()=>{
    navigate("/")
  }
  return (
    <>
    <nav className='Nabvar'>
      <ul className='logo'><li>HeakerKarnal</li></ul>
      <ul className="secound-nav">
     <li> <Link to="display">Display</Link></li>
     <li> <Link to="product">Product</Link></li>
     <li><Link to="search">Search</Link></li>
    </ul>
    <button className='btn' onClick={Logout}>Logout</button>
    </nav>
    <ul><Outlet/></ul>
    </>
  )
}

export default Home