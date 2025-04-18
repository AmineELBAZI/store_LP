import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Navbars.css' 

function Navbars() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 pl-8 pr-8 text-1xl">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
         
        
          <span className="text-3xl font-semibold dark:text-white hover:opacity-80 text-blue-950 dark:hover:text-lime-500 hover:text-blue-800">
          THE  UNTAMED
          </span>
        </Link>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-multi-level"
        >
         
        </div>
      </div>
    </nav>
  )
}

export default Navbars
