import React from 'react';
import { Link } from 'react-router-dom';
import AnimationWrapper from '../components/animationWraUP.jsx';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-700 w-full dark:text-white">
      <div className="mx-auto max-w-8xl p-4 sm:p-2 pt-8 lg:p-2">
        {/* Logo Section */}
        <div className=" justify-items-start m-8 ">
          <Link to="/" className="flex items-start">
            <div
              className="logo bg-cover bg-center w-12 h-12 dark:hidden"
              style={{
                backgroundImage: `url('/image/logoF.png')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            />
            {/* Dark Mode Logo */}
            <div
              className="logo bg-cover bg-center w-12 h-12 hidden dark:block"
              style={{
                backgroundImage: `url('/image/logoW.png')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <span className="text-4xl font-semibold hover:shadow-blue-700 hover:text-blue-600 dark:text-white text-blue-900 m-2">
              INSTRUMEA
            </span>
          </Link>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">



          {/* Contact Section */}

          <div>
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center justify-self-center">
                <img
                  src="/image/icons/iconF1.png"
                  alt="Contacts Icon"
                  className="w-10 h-10 mr-2"
                />
                Nous contacter
              </h2>
            </AnimationWrapper>
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <ul className="text-blue-900  font-medium space-y-2 justify-self-center p-4 dark:text-white">
                <li>
                  <strong> Email :</strong> 
                  <br></br>
                  <a
                    href="mailto:youssef.fahim@instrumea.com"
                    className="hover:underline"
                  >
                    {' '}
                    contact@instrumea.com
                  </a>
                </li>
              
              </ul>
            </AnimationWrapper>
          </div>

          {/* Location Section */}
          <div>
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center justify-self-center">
                <img
                  src="/image/icons/iconF2.png"
                  alt="Location Icon"
                  className="w-10 h-10 mr-2"
                />
                Où nous retrouver
              </h2>
            </AnimationWrapper>
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <ul className="text-blue-900 dark:text-white font-medium justify-self-center  p-4">
                <li>
                  <strong>Agence Rhône-Alpes :</strong>
                  <div>Z.A des Platières, 5 rue Frédéric Monin 69440 Mornant</div>
                </li>
              </ul>
            </AnimationWrapper>
          </div>

          {/* Resources Section */}
          <div>
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center justify-self-center">
                <img
                  src="/image/icons/iconF3.png"
                  alt="Resources Icon"
                  className="w-10 h-10 mr-2"
                />
                Nos ressources
              </h2>
            </AnimationWrapper>
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <ul className="text-blue-900 dark:text-white font-medium space-y-2 justify-self-center p-4">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
               {/*<li>
                  <Link to="/a_propos" className="hover:underline">
                    A propos
                  </Link>
                </li>*/}
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
            </AnimationWrapper>
          </div>

          {/* Join Us Section */}
          <div>
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center justify-self-center">
                <img
                  src="/image/icons/iconF4.png"
                  alt="Join Us Icon"
                  className="w-10 h-10 mr-2"
                />
                Rejoignez-nous
              </h2>
            </AnimationWrapper>
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <ul className="text-blue-900 dark:text-white font-medium space-y-2 justify-self-center p-4">
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
            </AnimationWrapper>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700 " />
        <div className="flex flex-col justify-items-center sm:flex-row sm:justify-center">
          <span className="text-sm text-gray-500 dark:text-white">
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
