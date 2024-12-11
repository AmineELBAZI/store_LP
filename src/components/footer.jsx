import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-white w-full dark:bg-gray-900">
        <div className="mx-auto w-full  p-20 py-6 lg:py-8">
          <div className="md:flex md:justify-center md:space-x-12">
            <div className="mb-6 md:mb-0 text-center">
              <Link to="/" className="flex items-center justify-center">
                <div
                  className="logo bg-cover bg-center w-12 h-12 mr-2"
                  style={{
                    backgroundImage: `url('/image/logoF.png')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-20 text-center sm:grid-cols-4 justify-center">
              <div>
                <h2 className="mb-6 text-ml font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center">
                  <img
                    src="/image/icons/iconF1.png"
                    alt="Contacts Icon"
                    className="w-10 h-10 mr-2"
                  />
                  Nous contacter
                </h2>
                <ul className="text-blue-900 dark:text-gray-400 font-medium">
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
                  <li className="mt-2">
                    <strong>AA :</strong> Laurence ROCHE -
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

              <div>
                <h2 className="mb-6 text-ml font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center">
                  <img
                    src="/image/icons/iconF2.png"
                    alt="Location Icon"
                    className="w-10 h-10 mr-2"
                  />
                  Où nous retrouver
                </h2>
                <ul className="text-blue-900 dark:text-gray-400 font-medium">
                  <li>
                    <strong>Agence de Lyon :</strong>
                    <div>Z.A des Platières, 5 rue Frédéric Monin</div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-ml font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center">
                  <img
                    src="/image/icons/iconF3.png"
                    alt="Resources Icon"
                    className="w-10 h-10 mr-2"
                  />
                  Nos ressources
                </h2>
                <ul className="text-blue-900 dark:text-gray-400 font-medium">
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

              <div>
                <h2 className="mb-6 text-ml font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center">
                  <img
                    src="/image/icons/iconF4.png"
                    alt="Join Us Icon"
                    className="w-10 h-10 mr-2"
                  />
                  Rejoignez-nous
                </h2>
                <ul className="text-blue-900 dark:text-gray-400 font-medium">
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
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-center space-x-4">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{' '}
              <a href="https://www.instrumea.com" className="hover:underline">
                INSTRUMEA™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
