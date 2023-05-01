import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'

function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <div className='nav'>
        <div className='nav--logo--wrapper'>
          <img src={logo} alt='Logo' loading='lazy' />
          <div className='hidden md:flex'>
            <ul className='nav--list'>
              <li className='nav--items'><a href="#">Features</a></li>
              <li className='nav--items'><a href="#">Pricing</a></li>
              <li className='nav--items'><a href="#">Resources</a></li>
            </ul>
          </div>
        </div>
        <div className="relative md:hidden">
          <nav>
            <button
              className="relative w-10 h-10 text-gray-500 bg-gray rounded-sm focus:outline-none"
              onClick={() => setOpen(!open)}>
              <span className="sr-only">Open main menu</span>
              <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    open ? "rotate-45" : "-translate-y-1.5"
                  }`}></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                    open && "opacity-0"
                  }`}></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                    open ? "-rotate-45" : "translate-y-1.5"
                  }`}></span>
              </div>
            </button>
          </nav>
          <div aria-checked={!open} className="nav--menu aria-checked:-translate-y-[120%]">
                  
          </div>
        </div>
        <div className='hidden md:flex nav--menu--desktop'>
          <button className='hover:text-VeryDarkViolet'>Login</button>
          <button className='sign--up'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar