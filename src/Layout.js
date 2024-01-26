
import React from 'react';
import "./Layout.css";
import {Outlet,Link}from "react-router-dom";
export default function Layout() {
  return (
    <div>
        <nav>
            <ul className="nav-bar">
                <li className='nav-link'><Link to="/">Home</Link></li>
                <li className='nav-link'><Link to="/about">About</Link></li>
                <li className='nav-link'><Link to="/contact">Contact</Link></li>
                <li className='nav-link'><Link to="/service">Service</Link></li>
                <li className='nav-link'><Link to="/counter">Counter</Link></li>
                <li className='nav-link'><Link to="/effect">Effect</Link></li>
                <li className='nav-link'><Link to="/reducer">Reducer</Link></li>
                <li className='nav-link'><Link to="/callbacks">Callbacks</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

