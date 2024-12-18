import React from 'react'

const About_us = () => {
  return (
    <div className="">

      <section class="bg-white dark:bg-gray-900 bg-cover bg-center "
      >
        <div class="grid w-full px-20 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white hover:text-orange-600">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-3xl dark:text-gray-400  hover:text-orange-600 p-6">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

            <a href="/service" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-orange-600 rounded-lg  hover:bg-orange-600 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              nos services
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/image/backgroundSs1.jpeg" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-white w-full dark:bg-gray-900 pt-0 p-20">
        <div className="py-8 px-4 mx-auto w-full sm:py-16 lg:px-6 p-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
           
            <div className="lg:w-1/2 w-full lg:pr-8">
              <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white hover:text-orange-600">
                Let's find more that brings us together :
              </h2>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <p className="font-light text-gray-900  text-3xl dark:text-white hover:text-orange-600 mt-20">
                Flowbite helps you connect with friends, family, and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch, and Marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 p-20 bg-[#eaf1f5]  dark:bg-orange-900">
        <div
          className="rounded-md overflow-hidden"
          style={{
            backgroundImage: "url('/image/backgroundSs1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",

          }}
        ></div>
        <div
          className="rounded-md overflow-hidden md:col-span-2"
          style={{
            backgroundImage: "url('/image/backgroundSs5.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",
          }}
        ></div>
        <div
          className="rounded-md overflow-hidden md:col-span-2"
          style={{
            backgroundImage: "url('/image/backgroundSs2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",
          }}
        ></div>
        <div
          className="rounded-md overflow-hidden "
          style={{
            backgroundImage: "url('/image/backgroundSs.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",

          }}
        ></div>
        <div
          className="rounded-md overflow-hidden"
          style={{
            backgroundImage: "url('/image/backgroundSs4.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",
          }}
        ></div>
        <div
          className="rounded-md overflow-hidden md:col-span-2"
          style={{
            backgroundImage: "url('/image/backgroundSs3.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",
          }}
        ></div>


      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 rounded-sm">
          <img className="w-full dark:hidden  rounded-lg " src="/image/backgroundSs1.jpeg" alt="dashboard image" />

          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white hover:text-orange-600">Let's create more tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 hover:text-orange-600">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
          
          </div>
        </div>
      </section>
    </div>
  )
}

export default About_us
