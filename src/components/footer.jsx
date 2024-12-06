import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-center md:space-x-12">
            <div className="mb-6 md:mb-0 text-center">
              <a href="/" className="flex items-center justify-center">
                {/* Logo in the background of the company name */}
                <div
                  className="logo bg-cover bg-center w-12 h-12 mr-2"
                  style={{
                    backgroundImage: `url('/image/logoF.png')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-20 text-center sm:grid-cols-4 justify-center">
              {/* Centers the columns */}
              <div>
                <h2 className="mb-6 text-ml font-semibold text-gray-900 uppercase dark:text-white flex items-center justify-center">
                  <img
                    src="/image/icons/iconF1.png"
                    alt="Contacts Icon"
                    className="w-10 h-10 mr-2"
                  />
                  Nous Contacts
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
                  Nos Resources
                </h2>
                <ul className="text-blue-900 dark:text-gray-400 font-medium">
                  <li>
                    <a href="/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/a_propos" className="hover:underline">
                      A propos
                    </a>
                  </li>
                  <li>
                    <a href="/service" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:underline">
                      Contact
                    </a>
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
                    <a href="/service" className="hover:underline">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="/service" className="hover:underline">
                      X
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-center space-x-4">
            {' '}
            {/* Centers the footer content */}
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
  )
}

export default Footer
