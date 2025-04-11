import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { React, useEffect } from 'react'
import ImagePopup from "../components/ImagePopup"
import { Link } from 'react-router-dom';
import { useAddKeyframes, fadeInAnimation, fadeOutAnimation } from "../components/animationUtils.jsx";
import AnimationWrapper from '../components/animationWraUP.jsx';
import AnimationWraRL from '../components/animationWraRL.jsx';
import AnimationWraLR from '../components/animationWraLR.jsx';

function Home() {
  useAddKeyframes();
  const carouselImages = [
    {
      src: '/image/image1.jpg',
      title: 'Maintenance industrielle et gestion\n' + 'de projets\n',
      description:
        '' +
        "Nous offrons des services complets en gestion de projets et préparation d'arrêt,\n",
    },
    {
      src: '/image/image2.jpg',
      title: 'title',
      description: 'description',
    },
    {
      src: '/image/image3.jpg',
      title: 'title',
      description: 'description',
    },
    {
      src: '/image/image4.png',
      title: 'title',
      description: 'description',
    },
  ]


  const carouselText = [
    {
      src: '/image/secimage.jpg',
      title: 'Système de sécurité instrumentés',
      description:
        'Dans le contexte de la sécurité industrielle, les systèmes de sécurité instrumentés (SIS) ' +
        'sont essentiels pour garantir les réductions de risque identifiés comme nécessaire dans les dans les analyses' +
        ' de risques ou dans les études de danger. Pour évaluer et analyser ces systèmes, Instrumea propose ' +
        'des solutions adaptées visant à atteindre les niveaux requis de sécurité et de conformité.',
    },
    {
      src: '/image/gestimage.jpg',
      title: 'Gestion projets',
      description:
        'Préparation.' +
        'Contrôles.' +
        'Coûts.' +
        'Coordination.' +
        'Achats.' +
        'Management.',
    },
    {
      src: '/image/manimage.jpg',
      title: 'Maintenance Industrielle',
      description:
        'Instrumea vous aide à établir des plans de maintenance préventive et des indicateurs pour optimiser ' +
        "le fonctionnement de l'instrumentation, augmentant ainsi la productivité et la sécurité de vos installation.",
    },
  ]

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="bg-[rgb(112,98,88)] dark:bg-gray-900">
      {/* First Section (Background Image with Title) */}
      <div
        className="bg-gradient-to-r from-[#a17a50] via-[#d6a870] to-[#ffffff] bg-cover bg-center flex flex-col items-start justify-center relative pl-8 pr-8 "

        style={{
         
          height: '800px',


        }}>






        {/* Title Section */}

        <div className=" max-w-3xl z-10   p-3 " style={fadeInAnimation}>


          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-left   duration-500 " style={fadeInAnimation}>
            INSTRUMEA
          </h1>
          <div
            className='p-4 rounded-r-full rounded-bl-full m-4 items-center justify-items-center transition-transform duration-500'
            style={{
              background: 'rgba(0, 0, 0, 0.2)',  // Adds a little black tint
              backdropFilter: 'blur(40px)',       // Blur effect
              WebkitBackdropFilter: 'blur(40px)', // For Safari compatibility
            }}
          >
            <p className='text-white mb-4 text-left text-xl  md:text-3xl  font-bold duration-500'>
              Vos projets , notre expertise en instrumentation
            </p>
          </div>



        </div>



        {/* Cards Section */}

        <div
          className="absolute transform translate-x-[90%] sm:w-[20px] lg:w-2/4 mr-0 mt-[600px] grid grid-cols-1 md:grid-cols-4 z-20 sm:grid-cols-4 sm:text-xs"
          style={{ gap: '0px' }} // Removes space between cards
        >

          {[
            {
              image: '/image/Raffinage.jpeg',
              title: 'Pétrochimie',
              link: '/service',
              icon: '/image/icons/icon10.png',
            },
            {
              image: '/image/backgroundHh3.jpeg',
              title: 'Energie',
              link: '/service',
              icon: '/image/icons/icon1.png',
            },
            {
              image: '/image/backgroundHh6.jpeg',
              title: 'Industrie',
              link: '/service',
              icon: '/image/icons/icon9.png',
            },
            {
              image: '/image/backgroundSs2.jpeg',
              title: 'Ingénierie',
              link: '/service',
              icon: '/image/icons/icon4.png',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-lg overflow-hidden relative h-[100px] hover:scale-110  sm:h-[150px] md:h-[260px] lg:h-[350px] duration-500 dark:bg-gray-900"
            >

              <Link to={card.link} className="block h-full">
                <img
                  className="w-full h-full object-cover"
                  src={card.image}
                  alt={card.title}
                />

                {/* Icon at the top */}
                <div
                  className="absolute top-4 left-4 flex justify-center items-center rounded-full p-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <img
                    className="w-16 h-16 duration-300"
                    src={card.icon}
                    alt={`${card.title} icon`}
                    style={{ filter: 'invert(0)' }}
                  />
                </div>



                {/* Title with overlay */}
                <h5 className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-[10px] md:text-[15px] lg:text-[20px] font-bold tracking-tight bg-black bg-opacity-80 hover:bg-opacity-10 p-3" style={fadeInAnimation}>
                  {card.title}
                </h5>
              </Link>
            </div>
          ))}

        </div>

      </div>


      {/* Second Section (About the Company) */}


      <div  className="bg-[#dfdcd7] mt-[250px] p-20   dark:text-white  dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 hover:scale-110 duration-500 hover-text-[#cea58e] dark:text-white">
              Qui sommes-nous ?
            </h2>
          </AnimationWrapper>
          <div className="h-1 bg-[#cea58e] mb-8 w-2/4 mx-auto"></div>

          {/* Two text columns and one card column */}
          <div className="grid grid-cols-1 md:grid-cols-3  ml-12 gap-20">
            {/* Text section (2 columns) */}

            <div className="col-span-2 text-gray-700  text-lg md:text-2xl lg:text-3xl leading-relaxed hover:p-6 hover:scale-125 duration-500 dark:text-white" style={fadeInAnimation}>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p>
                  <b className="text-blue-900 ">Instrumea</b> est une société
                  spécialisée dans les services techniques en instrumentation.
                </p>
                <p>
                  Elle accompagne les industries françaises dans la réalisation de
                  leurs projets en proposant des prestations de support au services de maintenance, travaux neufs et de gestion des arrêts de maintenance programmés .
                </p>
              </AnimationWrapper>
            </div>

            {/* Cards section (1 column) */}
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <div className="group col-span-1 hover:scale-125 duration-500">
                <div className="bg-[#cea58e] p-4 rounded shadow-md text-white dark:bg-lime-600">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Notre Expertise</h3>
                  <p className="text-base sm:text-lg md:text-xl">
                    Nos spécialistes en instrumentation accompagnent les donneurs d’ordre en apportant leur expertise dans le domaine, afin de garantir la qualité, la sécurité et le respect des délais et objectifs fixés.
                  </p>
                </div>

              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>

      {/* Fourth Section (Image and Description Slider) */}

     
      <div className="bg-cover bg-center dark:bg-gray-900 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 dark:bg-gray-900 ">
          {/* First Column (Main Paragraph with Title) */}
          <div className="text-lg sm:text-xl leading-relaxed p-6  sm:p-12 fade-in-up bg-[#cea58e]">
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <h2 className="text-amber-700 text-3xl sm:text-5xl font-bold mb-6 sm:mb-8">
                <p className=" font-bold mb-4 text-black hover:text-blue-700 dark:text-white dark:bg-gray-900 m-4 hover:pl-6 duration-500">
                  Présentation de notre entreprise et de ses processus :
                </p>
              </h2>
            </AnimationWrapper>
            <div className="p-6 text-gray-600">
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="text-blue mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white dark:hover:text-lime-600 hover:pl-6 duration-500">
                Instrumea offre une expertise complète en ingénierie et gestion de projets, avec une approche structurée et rigoureuse. 
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white dark:hover:text-lime-600 hover:pl-6 duration-500">
                Nous intervenons dans la préparation des travaux, la définition des matériels, la fiabilisation et la supervision des opérations. 
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white dark:hover:text-lime-600 hover:pl-6 duration-500">
                Nos services incluent l’élaboration de chiffrage, la rédaction de cahiers des charges, l’aide aux analyses de risques types HAZOP, la sélection d’entreprises de réalisation avec 
                une évaluation des intervenants afin de garantir la qualité et la sécurité des opérations. 
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white dark:hover:text-lime-600 hover:pl-6 duration-500">
                Nous assurons également l’interface avec les métiers de l’automatisme et de l’électricité.  
                </p>
              </AnimationWrapper>
             
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white dark:hover:text-lime-600 hover:pl-6 duration-500">
                Avec une méthodologie rigoureuse, nous répondons aux besoins les plus complexes, notamment dans la gestion des obsolescences des équipements. 
                </p>
              </AnimationWrapper>
            </div>
          </div>

          {/* Wrapper for Centering */}
          <AnimationWraLR transition={{ duration: 1, delay: 0.2 }}>
            
          <div
            className="flex items-center justify-center mx-auto bg-cover bg-center hover:scale-105  duration-500  mt-[150px] 
                      w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]"
            style={{
              backgroundImage: `url('/image/stor_Image/image1.jpg')`,
            }}
          ></div>
          
        </AnimationWraLR>


        </div>
      </div>

      <div className="bg-cover bg-center dark:bg-gray-900 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 dark:bg-gray-900 ">
            {/* Wrapper for Centering */}
            <AnimationWraLR transition={{ duration: 1, delay: 0.2 }}>
            
            <div
              className="flex items-center justify-center mx-auto bg-cover bg-center hover:scale-105  duration-500  mt-[150px] 
                        w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]"
              style={{
                backgroundImage: `url('/image/stor_Image/image9.png')`,
              }}
            ></div>
            
          </AnimationWraLR>
          {/* First Column (Main Paragraph with Title) */}
          <div className="text-lg sm:text-xl leading-relaxed p-6  sm:p-12 fade-in-up bg-[#cea58e]">
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <h2 className="text-amber-700 text-3xl sm:text-5xl font-bold mb-6 sm:mb-8">
                <p className=" font-bold mb-4 text-black hover:text-blue-700 dark:text-white dark:bg-gray-900 m-4 hover:pl-6 duration-500">
                  Présentation de notre entreprise et de ses processus :
                </p>
              </h2>
            </AnimationWrapper>
            <div className="p-6 text-gray-600">
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="text-blue mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white dark:hover:text-lime-600 hover:pl-6 duration-500">
                Instrumea offre une expertise complète en ingénierie et gestion de projets, avec une approche structurée et rigoureuse. 
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white dark:hover:text-lime-600 hover:pl-6 duration-500">
                Nous intervenons dans la préparation des travaux, la définition des matériels, la fiabilisation et la supervision des opérations. 
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white dark:hover:text-lime-600 hover:pl-6 duration-500">
                Nos services incluent l’élaboration de chiffrage, la rédaction de cahiers des charges, l’aide aux analyses de risques types HAZOP, la sélection d’entreprises de réalisation avec 
                une évaluation des intervenants afin de garantir la qualité et la sécurité des opérations. 
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white dark:hover:text-lime-600 hover:pl-6 duration-500">
                Nous assurons également l’interface avec les métiers de l’automatisme et de l’électricité.  
                </p>
              </AnimationWrapper>
             
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white dark:hover:text-lime-600 hover:pl-6 duration-500">
                Avec une méthodologie rigoureuse, nous répondons aux besoins les plus complexes, notamment dans la gestion des obsolescences des équipements. 
                </p>
              </AnimationWrapper>
            </div>
          </div>

        


        </div>
      </div>



      {/* Third Section (3 Columns with Title and Description) */}


      <div
        className="  bg-cover bg-center bg-white pb-8 "
        style={{
          backgroundImage: `url('/image/logoO.png')`,
          backgroundSize: '200%',
          backgroundRepeat: 'no-repeat',
        }}

      >
        <AnimationWraRL transition={{ duration: 1, delay: 0.2 }}>
          <h2 className="dark:text-lime-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  text-blue-900 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-br-full bg-none p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8 hover:bg-white hover:text-cyan-600 duration-300">
            Nos Services :
          </h2>
        </AnimationWraRL>
        <div className="max-w-6xl mx-auto text-center ">

          <AnimationWraRL transition={{ duration: 1, delay: 0.2 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-2 ">
              {carouselText.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-100 hover:shadow-2xl relative overflow-hidden group hover-text-black"
                >
                  {/* Hidden image initially, revealed on hover with 50% opacity */}
                  <img
                    src={item.src}
                    alt={`Service ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-10 transition-opacity duration-500"
                  />
                  {/* Card content */}
                  <div className="group relative z-10 ">
                    <h3 className="text-2xl font-semibold text-white  group-hover:text-blue-900 mb-8 transition-colors duration-300 group-hover:text-3xl">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-lg group-hover:text-black  opacity-0 mt-4 group-hover:opacity-100 transition-colors duration-300 group-hover:text-2xl">
                      {/* Handle the second card description as one word per row */}
                      {index === 1
                        ? item.description
                          .split('.')
                          .filter(text => text.trim() !== '')
                          .map((line, idx) => (
                            <span key={idx} className="block   m-3 ">
                              {line.trim()}
                            </span>
                          ))
                        : item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimationWraRL>
        </div>
      </div>


    


      <div className="bg-[#eaf1f5] bg-cover bg-center dark:bg-gray-900 ">

        <div className="grid grid-cols-1   md:grid-cols-2 bg-[#eaf1f5]  gap-4 dark:bg-gray-900 dark:text-white ">

          {/* First Column (Main Paragraph with Title) */}
          <div className="text-gray-700 text-lg md:text-xl  leading-relaxed  "
          >

        <AnimationWraRL transition={{ duration: 1, delay: 0.2 }}>
          <h2 className="dark:text-lime-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  text-blue-900 w-full sm:w-2/3 md:w-1/2 lg:w-2/3 rounded-br-full bg-none  sm:p-6 lg:p-8    hover:bg-white hover:text-cyan-600 duration-300">
          Engagement :
          </h2>
          <h3 className="text-lime-600 text-xl sm:text-xl md:text-2xl lg:text-4xl   w-full   pl-10  mb-4  ">
          Sécurité , Santé , Environnement
          </h3>
        </AnimationWraRL>
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <div className=' duration-500 hover:text-lime-600  dark:text-white  mt-12 hover:pt-4'>
                <p className="text-black   text-xl md:text-3xl pl-12 dark:text-white  ">
                  Notre objectif est d'impliquer nos collaborateurs</p>
                <p className='text-black mt-3 md:text-3xl pl-12 text-xl  dark:text-white'>
                  dans une démarche visant à développer leur culture SSE.
                </p>
              </div>
            </AnimationWrapper>
          </div>

          {/* Second Column (Three Sections with Logos and Titles) */}
          <div className="space-y-8   bg-white  p-20  dark:bg-gray-700">
            {/* First Item */}
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <div className=" group flex items-start space-x-4 pt-12 hover:scale-120 hover:p-4 duration-500 ">
                <img
                  src="/image/icons/Sanicon.png"
                  alt="Qualité"
                  className="w-16 h-16 p-2 bg-lime-600 rounded-full group-hover:scale-150 duration-500  group-hover:m-2 "
                />
                <div>
                  <h4 className="text-blue-900 font-semibold  md:text-3xl text-2xl dark:text-lime-600 ">
                    Santé :
                  </h4>
                  <p className='md:text-2xl text-xl '>
                  Préserver la santé de nos collaborateurs.
                  </p>
                </div>
              </div>
            </AnimationWrapper>


            {/* Second Item */}
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <div className=" group flex items-start space-x-4  hover:scale-120 hover:p-4 duration-500">
                <img
                  src="/image/icons/iconQ2.png"
                  alt="Sécurité"
                  className="w-16 h-16 p-2    bg-lime-600 rounded-full group-hover:scale-150 duration-500  group-hover:m-2 "
                />
                <div>
                  <h4 className="text-blue-900 font-semibold  md:text-3xl text-2xl  dark:text-lime-600">
                    Sécurité :
                  </h4>
                  <p className='md:text-2xl text-xl'>
                    Garantir la sécurité  de nos collaborateurs.
                  </p>
                </div>
              </div>
            </AnimationWrapper>

            {/* Third Item */}
            <AnimationWrapper transition={{ duration: 1, delay: 0.5 }}>
              <div className=" group flex items-start space-x-4  hover:scale-120 hover:p-4 duration-500">
                <img
                  src="/image/icons/iconQ3.png"
                  alt="Environnement"
                  className="w-16 h-16 p-2  bg-lime-600 rounded-full group-hover:scale-150 duration-500  group-hover:m-2 "
                />
                <div>
                  <h4 className="text-blue-900 font-semibold  md:text-3xl text-2xl dark:text-lime-600">
                    Environnement :
                  </h4>
                  <p className='md:text-2xl text-xl'>
                    Minimiser l’impact de notre activité sur l’environnement.</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
