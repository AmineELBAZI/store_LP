import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full">
      <div className="mx-auto max-w-7xl p-4 sm:p-2 pt-8 lg:p-2">
 {/* Logo Section */}
        <div className=" justify-items-start m-8 ">
          <Link to="/" className="flex items-start">
            <div
              className="logo bg-cover bg-center w-12 h-12 "
              style={{
                backgroundImage: `url('/image/logoF.png')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            />
             <span className="text-4xl font-semibold hover:shadow-blue-700 hover:text-blue-600  text-blue-900 m-2">
            INSTRUMEA
          </span>
          </Link>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
         


          {/* Contact Section */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center justify-self-center">
              <img
                src="/image/icons/iconF1.png"
                alt="Contacts Icon"
                className="w-10 h-10 mr-2"
              />
              Nous contacter
            </h2>
            <ul className="text-blue-900 dark:text-gray-400 font-medium space-y-2 justify-self-center p-4">
              <li>
                <strong>RTC :</strong> Youssef FAHIM
                <a
                  href="mailto:youssef.fahim@instrumea.com"
                  className="hover:underline"
                >
                  {' '}
                  youssef.fahim@instrumea.com
                </a>
              </li>
              <li>
                <strong>AA :</strong> Laurence ROCHE
                <a
                  href="mailto:laurence.roche@instrumea.com"
                  className="hover:underline"
                >
                  {' '}
                  laurence.roche@instrumea.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center justify-self-center">
              <img
                src="/image/icons/iconF2.png"
                alt="Location Icon"
                className="w-10 h-10 mr-2"
              />
              Où nous retrouver
            </h2>
            <ul className="text-blue-900 dark:text-gray-400 font-medium justify-self-center p-4">
              <li>
                <strong>Agence de Lyon :</strong>
                <div>Z.A des Platières, 5 rue Frédéric Monin</div>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center justify-self-center">
              <img
                src="/image/icons/iconF3.png"
                alt="Resources Icon"
                className="w-10 h-10 mr-2"
              />
              Nos ressources
            </h2>
            <ul className="text-blue-900 dark:text-gray-400 font-medium space-y-2 justify-self-center p-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/a_propos" className="hover:underline">
                  A propos
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Join Us Section */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center justify-self-center">
              <img
                src="/image/icons/iconF4.png"
                alt="Join Us Icon"
                className="w-10 h-10 mr-2"
              />
              Rejoignez-nous
            </h2>
            <ul className="text-blue-900 dark:text-gray-400 font-medium space-y-2 justify-self-center p-4">
              <li>
                <Link to="/service" className="hover:underline">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:underline">
                  X
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <div className="flex flex-col justify-items-center sm:flex-row sm:justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2024{' '}
            <a href="https://www.instrumea.com" className="hover:underline">
              INSTRUMEA™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
