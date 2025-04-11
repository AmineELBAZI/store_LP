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
      src: '/image/stor_Image/image10.png',
      title: 'Maintenance industrielle et gestion\n' + 'de projets\n',
      description:
        '' +
        "Nous offrons des services complets en gestion de projets et préparation d'arrêt,\n",
    },
    {
      src: '/image/stor_Image/image10.png',
      title: 'title',
      description: 'description',
    },
    {
      src: '/image/stor_Image/image10.png',
      title: 'title',
      description: 'description',
    },
    {
      src: '/image/stor_Image/image10.png',
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
            text
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
             text
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
              image: '/image/stor_Image/image5.jpg',
             
              link: '/service',
              
            },
            {
              image: '/image/stor_Image/image8.jpg',
             
              link: '/service',
             
            },
            {
              image: '/image/stor_Image/image3.jpg',
              
              link: '/service',
              
            },
            {
              image: '/image/stor_Image/image1.jpg',
              
              link: '/service',
             
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
              backgroundImage: `url('/image/stor_Image/image10.png')`,
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

      <section className="bg-[#cea58e] p-8">
  <div className="max-w-6xl mx-auto flex flex-col mt-20 md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-6">

    {/* Column 1: Image section */}
    <div className="w-full md:w-1/3  flex justify-center">
      <div
        className="bg-cover bg-center hover:scale-105 duration-500 w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] rounded-full shadow-xl"
        style={{
          backgroundImage: `url('/image/stor_Image/image6.jpg')`,
        }}
      ></div>
    </div>

    {/* Column 2: Text section */}
    <div className="w-full md:w-1/3    space-y-4 text-center md:text-left flex flex-col justify-center">
      <h2 className="text-3xl mt-10 font-bold text-white">Welcome to Our Website</h2>
      <p className="text-lg text-white">
        Explore our offerings and discover amazing deals just for you!
      </p>
    </div>

    {/* Column 3: Button section */}
  
<div className="w-full md:w-1/3 flex flex-col items-center justify-center md:justify-end space-y-4">
  <svg
    className="w-8 h-20 animate-bounce text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>

  <a
    href="https://ma.theuntamed.com/?referral=dFZZG4"
    target="_blank"
    rel="noopener noreferrer"
    className=" px-12 py-4 mt-20  bg-white text-[#cea58e] font-semibold rounded-full hover:bg-[#ffb489] hover:text-white transition duration-300"
  >
    Visit Official Site
  </a>
</div>


  </div>
</section>


{/* pake section */}

<section className="bg-[rgb(112,98,88)] p-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-6">

    {/* Column 1: Video */}
    <div className="w-full md:w-1/3">
      <video
        className="w-full h-auto rounded-lg shadow-lg"
        controls
        poster="/image/stor_Image/image2.jpg" // Optional thumbnail
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* Column 2: Image */}
    <div className="w-full md:w-1/3 flex justify-center">
      <img
        src="/image/stor_Image/image2.jpg"
        alt="Product"
        className="rounded-xl shadow-md w-[300px] h-auto object-cover"
      />
    </div>

    {/* Column 3: Text + Button */}
    <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
      <h2 className="text-3xl font-bold text-[#ffffff]">اكتشف منتجنا الجديد</h2>
      <p className="text-red-400">
      اكتشف الابتكار كما لم تراه من قبل. شاهد الفيديو لترى المنتج أثناء الاستخدام، ثم استعرض المزيد من التفاصيل والعروض.
      </p>
      <a
        href="https://ma.theuntamed.com/product/starter-anti-ageing-treatment-duo/"
        className="inline-block px-6 py-3 bg-[#cea58e] text-white font-semibold rounded-full hover:bg-[#aa7d66] transition duration-300"
      >
        Learn More
      </a>
    </div>

  </div>
</section>



    </div>
  )
}

export default Home
