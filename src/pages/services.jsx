import React, { useState, useEffect } from 'react'
import { useAddKeyframes, fadeInAnimation, fadeOutAnimation } from "../components/animationUtils.jsx";
import AnimationWrapper from '../components/animationWraUP.jsx';
import AnimationWraRL from '../components/animationWraRL.jsx';
import AnimationWraLR from '../components/animationWraLR.jsx';

const Services = () => {
  useAddKeyframes();

  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore((prev) => !prev);
  };
  const [expandedCard, setExpandedCard] = useState(null)
  const [backgroundImage, setBackgroundImage] = useState(
    "url('/image/backgroundAP.png')",
  )

  const carouselImages = [
    {
      src: '/image/Preimage.jpg',
      title: "Préparation d'arrêt",
      description:
        'Rédaction du cahier des charges, consultation des entreprises sous-traitantes,' +
        ' spécification du matériel, estimation des coûts, mise en place de processus de préparation, supervision...',
    },
    {
      src: '/image/image2.jpg',
      title: 'Méthode et fiabilisation',
      description:
        'Amélioration et pérennisation du processus de remise en état du matériel et des contrats, ' +
        "suivi de l'obsolescence des équipements, budgétisation des projets d'investisse- ments," +
        " analyse et habilisation d'instruments/vannes, dé- marche SIL et mise en œuvre des SIS," +
        ' méthodologie pour la gestion des mesures de maitrise de risques instrumentées...',
    },
    {
      src: '/image/autimage.jpg',
      title: 'Automatismes',
      description:
        "Analyses fonctionnelles, développement d'applica- tions sur automates, développement d'applications IHM, " +
        'automates de sécurité, rédaction de cahiers des charges, programmations, rédaction de modes opéra- toires, maintenance...',
    },
    {
      src: '/image/image4.png',
      title: 'Projet et travaux neufs',
      description:
        'Planification des projets et des études, préparation des travaux, achats du matériel, supervision des travaux...',
    },
  ]

  // Handle card click for expanding or collapsing
  const handleCardClick = index => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  // Array of background images to rotate
  const images = [
    "url('/image/backgroundAP.png')",
    "url('/image/background1.jpg')",
    "url('/image/background2.jpg')",
    "url('/image/background1.jpg')",
  ]

  // Change background image every 5 seconds
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % images.length // Cycle through images
      setBackgroundImage(images[index])
    }, 5000)
    return () => clearInterval(interval) // Clean up the interval when the component unmounts
  }, [])

  return (
    <div>
      {/* First Section (Background Image with Title) */}
      <div
        className="py-20 md:py-40 lg:py-[200px] bg-cover bg-gradient-to-r to-cyan-950 from-white bg-center flex flex-col items-start justify-center relative px-4 md:px-8 lg:px-10"
        style={{
          backgroundImage: `url('/image/backgroundSs.jpeg')`,
          height: 'auto', // Allow the height to adjust automatically based on content
        }}
      >
        {/* Title Section */}
        <div className="rounded-lg text-left mt-0 max-w-lg md:max-w-2xl lg:max-w-3xl bg-white p-4 text-black opacity-90 shadow-lg transform transition hover:scale-105" style={fadeInAnimation}>
          <p className="text-base md:text-lg lg:text-4xl hover:text-lime-600 duration-500 hover:pl-6">
            Installée en Rhône Alpes, <b className="text-blue-600 hover:text-lime-600 duration-500">INSTRUMEA</b> est
            une société spécialisée dans les métiers de l'ingénierie.
          </p>
          <p className="text-base md:text-lg lg:text-2xl p-4 pb-0">
            Dans le domaine de l'instrumentation et de l'informatique industriel.
          </p>
          <p className="text-base md:text-lg lg:text-2xl p-4 pt-0">
            Elle accompagne les industries françaises dans leurs projets, elle
            propose une assistance technique en maintenance, travaux neufs et
            préparation d'arrêt.
          </p>
        </div>

        {/* Cards Section */}
        <div
          className="absolute transform translate-x-0 md:translate-x-[50%] lg:translate-x-[90%] w-11/12 md:w-2/3 lg:w-2/4 mt-20 md:mt-[300px] lg:mt-[550px] z-20  justify-end hidden lg:block"
          style={{ gap: '0px' }}
        >
          <div className="bg-[#9cda6c] border border-gray-200 shadow-lg overflow-hidden rounded-b-full   relative h-[250px] md:h-[350px] lg:h-[400px] w-full md:w-[400px] lg:w-[500px] p-4 md:p-6 lg:p-8 opacity-90 flex justify-center items-center transform transition hover:scale-105">
            <a className="block h-full" style={fadeInAnimation}>
              <img
                className="object-cover w-30 h-30 mb-4 mx-auto animate-pulse duration-900"
                src="/image/icons/iconS1.png"
                alt="/service"
                style={{ filter: 'invert(1)' }}
              />
              {/* Title with overlay */}
              <h5 className="absolute inset-0 mt-12 md:mt-16 lg:mt-20 flex items-center justify-center text-black text-sm md:text-3xl lg:text-3xl font-bold tracking-tight text-center" style={fadeInAnimation}>
                Présentation de nos services et domaines d'expertise
              </h5>
            </a>
          </div>
        </div>

      </div>

 {/* Section 2 */}

      <div className="bg-cover bg-center dark:bg-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 dark:bg-gray-900">
          {/* First Column (Main Paragraph with Title) */}
          <div className="text-lg sm:text-xl leading-relaxed p-6 mt-8 sm:p-12 fade-in-up">
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
            className="flex items-center justify-center mx-auto bg-cover bg-center hover:scale-105 rounded-full duration-500 mt-20 
                      w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]"
            style={{
              backgroundImage: `url('/image/backgroundSs1.jpeg')`,
            }}
          ></div>
        </AnimationWraLR>


        </div>
      </div>


      {/* Section 3 */}
      <section className="bg-white bg-cover bg-center dark:bg-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 dark:bg-gray-900">
          {/* Wrapper for Centering */}
          <AnimationWraRL transition={{ duration: 1, delay: 0.2 }}>
          <div
            className="flex items-center justify-center mx-auto bg-cover bg-center hover:scale-105 rounded-full duration-500 mt-20 
                      w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
            style={{
              backgroundImage: `url('/image/backgroundSs2.jpeg')`,
            }}
          ></div>
        </AnimationWraRL>


          {/* Content Section */}
          <div className="text-gray-700 text-lg sm:text-xl leading-relaxed p-6 mt-12 sm:p-12">
            <div className="space-y-8 text-xl sm:text-3xl transition-transform">
              {/* 1 Item */}
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <div className="flex items-start space-x-4 m-6 sm:m-12">
                  <img
                    src="/image/icons/iconSs1.png"
                    alt="Qualité"
                    className="w-16 h-16 m-4 bg-none dark:bg-lime-600 dark:rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold m-4 text-black hover:text-lime-600 hover:scale-x-110 duration-500 dark:text-white">
                      Expertise polyvalente et complète
                    </h4>
                  </div>
                </div>
              </AnimationWrapper>

              {/* 2 Item */}
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <div className="flex items-start space-x-4 m-6 sm:m-12">
                  <img
                    src="/image/icons/iconSs2.png"
                    alt="Dynamique"
                    className="w-16 h-16 m-4 bg-none dark:bg-lime-600 dark:rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold m-4 text-black hover:text-lime-600 hover:scale-x-110 duration-500 dark:text-white">
                      Engagement envers l’excellence opérationnelle
                    </h4>
                  </div>
                </div>
              </AnimationWrapper>

              {/* 3 Item */}
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <div className="flex items-start space-x-4 m-6 sm:m-12">
                  <img
                    src="/image/icons/iconSs3.png"
                    alt="A l'écoute"
                    className="w-16 h-16 m-4 bg-none dark:bg-lime-600 dark:rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold m-4 text-black hover:text-lime-600 hover:scale-x-110 duration-500 dark:text-white">
                      Solutions innovantes et adaptées
                    </h4>
                  </div>
                </div>
              </AnimationWrapper>

              {/* 4 Item */}
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <div className="flex items-start space-x-4 m-6 sm:m-12">
                  <img
                    src="/image/icons/iconSs4.png"
                    alt="A l'écoute"
                    className="w-16 h-16 m-4 dark:bg-lime-600 dark:rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold m-4 text-black hover:text-lime-600 hover:scale-x-110 duration-500 dark:text-white">
                      Accompagnement sur mesure
                    </h4>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>


      <section className="p-8 dark:bg-gray-900 ">
        <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
          <h2 className="text-amber-700 text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-center ">
            <b className=" font-bold mb-4 text-black   duration-500 dark:text-white">
              <b className="text-blue-600 hover:text-black hover:dark:text-lime-600 duration-500 ">INSTRUMEA</b> intervient dans plusieurs secteurs d'activités
            </b>
          </h2>
        </AnimationWrapper>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Column 1 */}
            <AnimationWraRL transition={{ duration: 1, delay: 0.3 }}>
              <div className="bg-white p-6 rounded-lg text-center   border-0 hover:border hover:border-blue-600 shadow-lg  ">
                <div className="w-40 h-40 p-8 mx-auto mb-4 rounded-full overflow-hidden  ">
                  <img
                    src="/image/icons/icon3.png"
                    alt="Image 1"
                    className="w-full h-full object-cover bg-blend-color-dodge"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl hover:text-black  ">
                  Pétrochimie 
                </h3>
                <p
                  className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4'
                    }`}
                >
                   
                  Instrumea fiabilise l’instrumentation des installations dédiées à la transformation des coupes pétrolières.
                </p>
                <button
                  onClick={toggleDescription}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {showMore ? '◁' : '▷'}
                </button>
              </div>
            </AnimationWraRL>

            {/* Column 2 */}
            <AnimationWraRL transition={{ duration: 1, delay: 0.1 }}>
              <div className="bg-white p-6 rounded-lg text-center   border-0 hover:border hover:border-blue-600 shadow-lg">
                <div className="w-40 h-40 p-8 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/image/icons/icon5.png"
                    alt="Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl  hover:text-black ">
                  Chimie
                </h3>
                <p
                  className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4 '
                    }`}
                >
                  
                  Instrumea possède une solide expertise de l’instrumentation utilisée par l’industrie de la chimie de spécialités.
                </p>
                <button
                  onClick={toggleDescription}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {showMore ? '◁' : '▷'}
                </button>
              </div>
            </AnimationWraRL>

            {/* Column 3 */}
            <AnimationWraLR transition={{ duration: 1, delay: 0.2 }}>
              <div className="bg-white p-6 rounded-lg text-center  border-0 hover:border hover:border-blue-600 shadow-lg">
                <div className="w-40 h-40 p-8 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/image/icons/icon1.png"
                    alt="Image 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl  hover:text-black ">
                  Energie
                </h3>
                <p
                  className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4 '
                    }`}
                >
                  
                  Instrumea opère dans le secteur du gaz naturel, se spécialisant dans l'ingénierie des installations industrielles de liquéfaction et de regazéification du méthane.
                </p>
                <button
                  onClick={toggleDescription}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {showMore ? '◁' : '▷'}
                </button>
              </div>
            </AnimationWraLR>
            {/* Column 4 */}
            <AnimationWraLR transition={{ duration: 1, delay: 0.2 }}>
              <div className="bg-white p-6 rounded-lg text-center   border-0 hover:border hover:border-blue-600 shadow-lg">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full p-8 overflow-hidden">
                  <img
                    src="/image/icons/icon6.png"
                    alt="Image 4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl  hover:text-black ">
                Pharmaceutique
                </h3>
                <p
                  className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4 '
                    }`}
                >
                  
                  Pour répondre aux plus hautes exigences de l'industrie pharmaceutique, Instrumea assure la conformité aux réglementations strictes en matière de sécurité et d’hygiène. 
                </p>
                <button
                  onClick={toggleDescription}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {showMore ? '◁' : '▷'}
                </button>
              </div>
            </AnimationWraLR>
          </div>


        </div>
      </section>



      {/* Section 3 */}
      <div
        className="py-12 px-6 bg-cover bg-center bg-white"
        style={{
          backgroundImage: `url('/image/backgroundSs3.jpeg')`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 ">
            Nos compétences:
            </h2>
          </AnimationWrapper>
          <div className="h-1 bg-blue-600 mb-8 w-1/4 mx-auto"></div>
          <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
            <p className="text-lg text-black mb-6 mt-2 md:text-2xl  bg-white/50 backdrop-blur-md shadow-lg rounded-lg p-4 dark:text-gray-900">
              Nous offrons des solutions complètes en planification, supervision
              de travaux. Nous assurons la maintenance,
              améliorons les équipements, gérons les obsolescences, et
              garantissons des processus fiables grâce à des méthodologies
              rigoureuses.
            </p>

          </AnimationWrapper>

          <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12  ">
              {carouselImages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer dark:bg-gray-900"
                  onClick={() => handleCardClick(index)}
                >
                  {/* Always show title */}
                  <h3 className="text-3xl font-semibold text-blue-900 mb-2 p-4 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="p-4">
                    <img
                      src={item.src}
                      alt={`Service ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  </div>
                  {/* Show description and image only if expanded */}
                  {expandedCard === index && (
                    <div className="p-4">
                      <p className="text-gray-700 text-2xl dark:text-white">{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  )
}

export default Services
