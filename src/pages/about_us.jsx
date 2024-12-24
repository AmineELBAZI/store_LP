import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const About_us = () => {
  const data = [
    { year: '2020', value: 400 },
    { year: '2021', value: 800 },
    { year: '2022', value: 1200 },
    { year: '2023', value: 1600 },
    { year: '2024', value: 2000 },
  ];

  const navigate = useNavigate();

  function handleScrollAndRedirect(e) {
    e.preventDefault();  // Prevent the default behavior of the link

    // First navigate to the home page
    navigate('/', { replace: true });

    // Trigger scrolling after navigation
    setTimeout(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const targetPosition = scrollHeight * 0.3; // Scroll to 70% of the page height
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }, 500); // Delay to allow page navigation to complete
  }

  return (
    <div className="">

      <section class=" dark:bg-gray-900 bg-cover bg-center mb-0 pb-0 bg-gradient-to-r to-gray-700 from-white">
        <div class="grid w-full px-20  mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-cyan-950 leading-none md:text-5xl xl:text-6xl  hover:text-orange-600 hover:pl-12  hover:pt-12  duration-500">
              Notre Entreprise
            </h1>
            <p class="max-w-2xl mb-6 font-light text-cyan-950 lg:mb-8 md:text-lg lg:text-3xl dark:text-gray-600 hover:text-orange-600 p-6 hover:pl-12  hover:pt-12 duration-500">
              INSTRUMEA est une société spécialisée dans les services techniques en instrumentation, offrant un support pour la maintenance,
              la coordination des travaux neufs et la gestion des arrêts de maintenance programmés pour les industries françaises.
            </p>

            <a href="/service" class="inline-flex items-center justify-center px-12 py-3  p-6 text-base font-medium text-center text-gray-900 border border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-gray-600 dark:border-gray-700 dark:hover:bg-orange-600 dark:focus:ring-gray-800 m-4 duration-500">
              nos services
            </a>
          </div>
          <div class="lg:mt-0 lg:col-span-5 lg:flex w-full h-auto " >
            <img class="w-full h-auto mb-0 pb-0" src="/image/backgroundAa2.png" alt="mockup" />
          </div>
        </div>
      </section>

      <section className="bg-white w-full dark:bg-gray-700 pt-0 p-20">
        <div className="py-8 px-4 mx-auto w-full sm:py-16 lg:px-6 p-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">

            <div className="lg:w-1/2 w-full lg:pr-8">
              <h2 className=" text-6xl tracking-tight font-extrabold text-cyan-950 dark:text-white hover:text-orange-600 hover:pl-6 hover:pt-6   duration-500">
                Notre Histoire :
              </h2>
              <p className="font-light text-cyan-950  text-3xl dark:text-white hover:text-orange-600  pl-6 mt-20 hover:pl-12   duration-500">
                Fondée en 2020, INSTRUMEA est née de la vision de deux amis passionnés par les domaines de l’instrumentation,
                de l’automatisme et de l’informatique industrielle. Motivés par l’ambition de répondre aux défis techniques des industries,
                ils ont décidé de mettre leur expertise au service des entreprises françaises, en offrant des solutions innovantes et sur mesure.
              </p>
            </div>

            <div className="lg:w-1/2 w-full">

              <p className="font-light text-cyan-950  text-3xl dark:text-white hover:text-orange-600 p-6 pt-20 mt-20 hover:pl-12  duration-500">
                Depuis sa création, INSTRUMEA s’est dédiée à l’accompagnement des industries en matière d’assistance technique, de maintenance et de fiabilisation
                de l’instrumentation. L’entreprise continue de se développer, toujours animée par les mêmes valeurs de qualité, d’innovation et de service client.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Timeline */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <h2 className="text-4xl font-extrabold text-cyan-950 dark:text-white text-center mb-12 hover:text-orange-600 hover:scale-110 duration-500">
          Notre Parcours
        </h2>
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Timeline Column */}
          <div className="relative">
            {/* Vertical Connecting Line */}
            <div className="absolute left-4 top-0 h-full border-l-4 border-orange-600"></div>

            {/* Timeline Item 1 */}
            <div className=" group  mb-10 ml-6 hover:pl-6 hover:pt-6 duration-500">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-600 rounded-full -left-4 ring-8 ring-gray-100 dark:ring-gray-900 ">
                <span className="text-white font-bold ">1</span>
              </span>
              <h3 className="text-2xl font-semibold text-cyan-950 dark:text-white group-hover:text-orange-600">
                2020 - Année de Fondations
              </h3>
              <p className="mt-2 text-lg font-light text-gray-700 dark:text-gray-400 m-4 group-hover:text-orange-600 ">
                Instrumea a été fondée avec la vision de révolutionner le monde des paiements pour les entreprises de logiciels.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="group mb-10 ml-6 hover:pl-6 hover:pt-6 duration-500">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-600 rounded-full -left-4 ring-8 ring-gray-100 dark:ring-gray-900">
                <span className="text-white font-bold">2</span>
              </span>
              <h3 className="text-2xl font-semibold text-cyan-950 dark:text-white group-hover:text-orange-600 ">
                2021 - Expansion majeure
              </h3>
              <p className="mt-2 text-lg font-light text-gray-700 dark:text-gray-400 m-4 group-hover:text-orange-600">
                Nous nous sommes étendus à des marchés mondiaux, introduisant de nouveaux outils pour simplifier les paiements transfrontaliers.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="group mb-10 ml-6 hover:pl-6 hover:pt-6 duration-500">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-600 rounded-full -left-4 ring-8 ring-gray-100 dark:ring-gray-900">
                <span className="text-white font-bold">3</span>
              </span>
              <h3 className="text-2xl font-semibold text-cyan-950 dark:text-white group-hover:text-orange-600">
                2022 - Étape d'Innovation
              </h3>
              <p className="mt-2 text-lg font-light text-gray-700 dark:text-gray-400 m-4 group-hover:text-orange-600">
                Introduction de l’analyse basée sur l'IA pour aider les entreprises à obtenir des informations plus approfondies sur leurs données de paiement.
              </p>
            </div>

            {/* Timeline Item 4 */}
            <div className=" group ml-6 hover:pl-6 hover:pt-6 duration-500">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-600 rounded-full -left-4 ring-8 ring-gray-100 dark:ring-gray-900">
                <span className="text-white font-bold">4</span>
              </span>
              <h3 className="text-2xl font-semibold text-cyan-950 dark:text-white group-hover:text-orange-600">
                2023 - Poussée vers l'avenir
              </h3>
              <p className="mt-2 text-lg font-light text-gray-700 dark:text-gray-400 m-4 group-hover:text-orange-600">
                Une année de consolidation de nos succès et de préparation pour l'avenir avec des projets innovants à venir.
              </p>
            </div>

            {/* Timeline Item 5 */}
            <div className=" group ml-6 hover:pl-6 hover:pt-6 duration-500">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-600 rounded-full -left-4 ring-8 ring-gray-100 dark:ring-gray-900  ">
                <span className="text-white font-bold">5</span>
              </span>
              <h3 className="text-2xl font-semibold text-cyan-950 dark:text-white group-hover:text-orange-600">
                2024 - Aujourd'hui
              </h3>
              <p className="mt-2 text-lg font-light text-gray-700 dark:text-gray-400 m-4 group-hover:text-orange-600 ">
                Continue à mener l'industrie avec des solutions de pointe et une approche centrée sur le client.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center items-center px-6 hover:scale-105 duration-500">
            <img
              className="w-full h-full rounded-full shadow-lg"
              src="/image/backgroundAa11.jpg"
              alt="Étapes d'Instrumea"
            />
          </div>
        </div>
      </section>


      <section className="bg-gray-100 dark:bg-gray-900 sm:col-span-1 py-20">

        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Column */}
          <div className="flex justify-center items-center px-6 hover:scale-105 duration-500">
            <img
              className="w-auto h-[630px] rounded-full shadow-lg object-cover"
              src="/image/backgroundAa8.jpg"
              alt="Étapes d'Instrumea"
            />
          </div>

          {/* Chart Column */}

          <div className="flex justify-center items-center bg-none px-6 py-4 rounded-lg">

            <ResponsiveContainer width="100%" height={600} className="h-[200px] sm:h-[200px]">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#213555" strokeWidth={1} className='dark:stroke-yellow-200' />
                <XAxis dataKey="year" strokeWidth={4} fontSize={18} className='dark:stroke-yellow-200 stroke-black' />
                <YAxis strokeWidth={4} fontSize={18} className='dark:stroke-yellow-200 stroke-black' />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#EB5B00"
                  strokeWidth={4}
                  activeDot={{ r: 12 }}
                />
              </LineChart>
            </ResponsiveContainer>
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

      <section className="bg-white dark:bg-gray-900 p-20 ">
        <div className="gap-8 items-center py-8 px-4 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 rounded-sm">
          <img className="w-full   rounded-lg rounded-tr-full  rounded-tl-full rounded-bl-full  hover:rounded-tr-none hover:rounded-br-full hover:scale-105 duration-500 "
            src="/image/backgroundAa12.jpg"
            alt="dashboard image" />

          <div className="mt-4 md:mt-0">
            <h2 className="group  mb-4 text-5xl tracking-tight font-extrabold text-cyan-950 dark:text-white hover:text-orange-600 hover:pl-6 hover:pt-6  duration-500">
              Rejoignez-nous et découvrez un univers d'excellence et de créativité !</h2>

            <p className='m-6  pl-4 font-light  text-gray-600 text-3xl  dark:text-gray-400 hover:text-orange-600 hover:pl-12 hover:pt-6 duration-500'>
              Nous vous offrons une opportunité unique d'intégrer un modèle hors du commun où vos idées prennent vie et où vos ambitions trouvent leur épanouissement.
              N'attendez plus, faites le pas vers une expérience exceptionnelle qui transformera votre avenir !</p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 m-12 text-xl font-medium text-center text-gray-900 border border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-orange-600 dark:focus:ring-gray-800 dark:text-orange-600 duration-500 ml-20"
              onClick={(e) => handleScrollAndRedirect(e)}
            >
              Voir nos offres d'emplois
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About_us
