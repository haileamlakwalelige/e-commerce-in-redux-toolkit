import React from 'react'
import logo from '../../assets/images/logo.png';
import {FiHeart} from 'react-icons/fi';
import {BsHandbag} from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <div className="bg-black font-serif">
            <h1 className="text-white text-lg text-center font-bold py-3">Welcome All</h1>
        </div>
        <div className="flex justify-between items-center px-44 bg-white text-gray-700">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <div className="flex justify-between items-center">
             <button className="flex items-center justify-between mx-2">Logout</button>
             <div className="flex items-center justify-between px-2">
                <FiHeart />
                <h1>Wish List</h1>
             </div>
             <div className="flex items-center justify-between px-2">
                <BsHandbag />
                <h1>Shopping Bag</h1>
             </div>
            </div>
        </div>
        <div className="text-white bg-black py-2 flex justify-between items-center px-24">
            <h1>50% OFF</h1>
            <h1>Free Shipping and Return</h1>
            <h1>Different Payment Method</h1>
        </div>
        <Outlet />
    </div>
  )
}

export default Navbar