import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Navbars.css' // Ensure the CSS file is imported

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
          {/* Logo */}
          <div
            className="bg-cover bg-center w-12 h-12  mr-2 hover:opacity-80 animate-pulse   hover:animate-none"
            style={{
              backgroundImage: `url('/image/logoBLACK.png')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <span className="text-3xl font-semibold dark:text-white hover:opacity-80 hover:text-blue-800">
            INSTRUMEA
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
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              {to: '/', label: 'Accueil'},
              {to: '/a_propos', label: 'A propos'},
              {to: '/service', label: 'Services'},
              {to: '/contact', label: 'Contact'},
            ].map(item => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block py-2 px-3 rounded md:p-0 ${
                    location.pathname === item.to
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 '
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbars
