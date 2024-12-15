import React, { useState, useEffect } from 'react'
import { useAddKeyframes, fadeInAnimation, fadeOutAnimation } from "../components/animationUtils.jsx";
import '../pages/services.css';
import { motion } from 'framer-motion';
import  AnimationWrapper from '../components/animationWraUP.jsx';

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
      src: '/image/image1.jpg',
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
      src: '/image/image3.jpg',
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

      >
        {/* Title Section */}
        <div className="rounded-lg text-left mt-0 max-w-lg md:max-w-2xl lg:max-w-3xl bg-white p-4 text-black opacity-90 shadow-lg transform transition hover:scale-105" style={fadeInAnimation}>
          <p className="text-base md:text-lg lg:text-4xl">
            Installée en Rhône Alpes, <b className="text-blue-600">INSTRUMEA</b> est
            une société spécialisée dans les métiers de l'ingénierie.
          </p>
          <p className="text-base md:text-lg lg:text-3xl">
            dans le domaine de l'instrumentation et de l'informatique industriel.
          </p>
          <p className="text-base md:text-lg lg:text-3xl">
            Elle accompagne les industries françaises dans leurs projets, elle
            propose une assistance technique en maintenance, travaux neufs et
            préparation d'arrêt.
          </p>
        </div>

        {/* Cards Section */}
        <div
          className="absolute transform translate-x-0 md:translate-x-[50%] lg:translate-x-[90%] w-11/12 md:w-2/3 lg:w-2/4 mt-20 md:mt-[300px] lg:mt-[550px] z-20 flex justify-center"
          style={{ gap: '0px' }}
        >
          <div className="bg-amber-700 border border-gray-200 shadow-lg overflow-hidden rounded-b-full relative h-[250px] md:h-[350px] lg:h-[400px] w-full md:w-[400px] lg:w-[500px] p-4 md:p-6 lg:p-8 opacity-90 flex justify-center items-center transform transition hover:scale-105">
            <a className="block h-full" style={fadeInAnimation}>
              <img
                className="object-cover w-30 h-30 mb-4  mx-auto"
                src="/image/icons/iconS1.png"
                alt="/service"
                style={{ filter: 'invert(1)' }}
              />
              {/* Title with overlay */}
              <h5 className="absolute inset-0 mt-12 md:mt-16 lg:mt-20 flex items-center justify-center text-white text-sm md:text-3xl lg:text-3xl font-bold tracking-tight text-center" style={fadeInAnimation}>
                Présentation de nos services et domaines d'expertise
              </h5>
            </a>
          </div>
        </div>
      </div>


      <div className="bg-white bg-cover bg-center">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-4">
          {/* First Column (Main Paragraph with Title) */}
          <div ref={ref} className="text-lg md:text-xl leading-relaxed p-6 mt-8 md:p-12">
            <motion.h2
              className="text-amber-700 text-3xl md:text-5xl font-bold mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
            >
              <b className="text-black font-bold mb-4">
                Présentation de notre entreprise et de ses processus :
              </b>
            </motion.h2>
            <div className="p-6 text-gray-600">
              <motion.p
                className="text-blue mb-4 text-xl md:text-3xl hover:text-blue-800"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Instrumea offre une expertise complète en ingénierie et gestion de
                projets, avec une approche structurée et rigoureuse.
              </motion.p>
              <motion.p
                className="mb-4 text-xl md:text-3xl hover:text-blue-800"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Nous intervenons dans la planification, la préparation des travaux,
                l’achat de matériel, et la supervision des opérations.
              </motion.p>
              <motion.p
                className="mb-4 text-xl md:text-3xl hover:text-blue-800"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Nos services incluent le développement d’applications sur
                automates, la rédaction de cahiers des charges, et la maintenance
                des équipements, tout en garantissant des solutions fiables et
                innovantes.
              </motion.p>
              <motion.p
                className="mb-4 text-xl md:text-3xl hover:text-blue-800"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Nous assurons également la budgétisation, l'amélioration des
              équipements, et la gestion de démarches SIL et SIS, tout en
              respectant les normes QHSE grâce au référentiel MASE.
              </motion.p>
              <motion.p
                className="mb-4 text-xl md:text-3xl hover:text-blue-800"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
              Avec une méthodologie rigoureuse, nous répondons aux besoins les
              plus complexes, notamment dans les projets neufs, l’automatisme,
              et la préparation des arrêts techniques.
              </motion.p>
              
            </div>
          </div>


          {/* Wrapper for Centering */}
          <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
          <div
            className="flex items-center justify-center bg-cover bg-center hover:scale-110 rounded-full p-6 md:p-8 max-w-[80%] mx-auto mt-20 m-10"
            style={{
              backgroundImage: `url('/image/background.jpg')`,
              height: '700px',
              width: '700px',

            }}
            
          ></div>
           </AnimationWrapper>

        </div>
      </div>

      {/* Section 3 */}
      <section className="bg-white bg-cover bg-center">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-4">
          {/* Wrapper for Centering */}
          <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
          <div
            className="flex items-center justify-center bg-cover bg-center hover:scale-110 rounded-full p-6 md:p-8 max-w-[80%] mx-auto m-10"
            style={{
              backgroundImage: `url('/image/background1.jpg')`,
              height: '700px',
              width: '700px',

            }}
          ></div>
          </AnimationWrapper>

          <div className="text-gray-700 text-lg md:text-xl leading-relaxed p-6 mt-8 md:p-12">
            <div className="space-y-8 text-xl md:text-3xl transition-transform">
              {/* 1 Item */}
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <div className="flex items-start space-x-4 m-6 md:m-12"
             >
                <img
                  src="/image/icons/iconSs1.png"
                  alt="Qualité"
                  className="w-16 h-16 m-4"
                />
                <div>
                  <h4 className="font-semibold m-4 text-black hover:text-blue-800">
                    Expertise polyvalente et complète
                  </h4>
                </div>
              </div>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              {/* 2 Item */}
              <div className="flex items-start space-x-4 m-6 md:m-12">
                <img
                  src="/image/icons/iconSs2.png"
                  alt="Dynamique"
                  className="w-16 h-16 m-4"
                />
                <div>
                  <h4 className="font-semibold m-4 text-black hover:text-blue-800">
                    Engagement envers l’excellence opérationnelle
                  </h4>
                </div>
              </div>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              {/* 3 Item */}
              <div className="flex items-start space-x-4 m-6 md:m-12">
                <img
                  src="/image/icons/iconSs3.png"
                  alt="A l'écoute"
                  className="w-16 h-16 m-4 "
                />
                <div>
                  <h4 className="font-semibold m-4 text-black hover:text-blue-800">
                    Solutions innovantes et adaptées
                  </h4>
                </div>
              </div>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              {/* 4 Item */}
              <div className="flex items-start space-x-4 m-6 md:m-12">
                <img
                  src="/image/icons/iconSs4.png"
                  alt="A l'écoute"
                  className="w-16 h-16 m-4"
                />
                <div>
                  <h4 className="font-semibold m-4 text-black hover:text-blue-800">
                    Accompagnement sur mesure
                  </h4>
                </div>
              </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>




      <section className="p-8">
      <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
        <h2 className="text-amber-700 text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
          <b className="text-black font-bold mb-4 hover:text-blue-800 ">
            <b className="text-blue-600 hover:text-black">INSTRUMEA</b> intervient dans plusieurs secteurs d'activités
          </b>
        </h2>
        </AnimationWrapper>
        <div className="container mx-auto">
        <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Column 1 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-40 h-40 p-8 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/image/icons/icon3.png"
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl hover:text-black">
                Raffinage Pétrochimie
              </h3>
              <p
                className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4'
                  }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                feugiat justo id ligula sollicitudin, nec condimentum ligula mollis.
                Ut pretium, orci in hendrerit cursus, quam purus cursus urna, et
                sollicitudin eros libero non justo. Quisque vel tempor dui.
              </p>
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {showMore ? '◁' : '▷'}
              </button>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-40 h-40 p-8 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/image/icons/icon5.png"
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl  hover:text-black">
                Chimie
              </h3>
              <p
                className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4'
                  }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                feugiat justo id ligula sollicitudin, nec condimentum ligula mollis.
                Ut pretium, orci in hendrerit cursus, quam purus cursus urna, et
                sollicitudin eros libero non justo. Quisque vel tempor dui.
              </p>
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {showMore ? '◁' : '▷'}
              </button>
            </div>

            {/* Column 3 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-40 h-40 p-8 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/image/icons/icon1.png"
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl  hover:text-black">
                Energie
              </h3>
              <p
                className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4'
                  }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                feugiat justo id ligula sollicitudin, nec condimentum ligula mollis.
                Ut pretium, orci in hendrerit cursus, quam purus cursus urna, et
                sollicitudin eros libero non justo. Quisque vel tempor dui.
              </p>
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {showMore ? '◁' : '▷'}
              </button>
            </div>

            {/* Column 4 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full p-8 overflow-hidden">
                <img
                  src="/image/icons/icon6.png"
                  alt="Image 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl  hover:text-black">
                Pharmaceutique
              </h3>
              <p
                className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4'
                  }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                feugiat justo id ligula sollicitudin, nec condimentum ligula mollis.
                Ut pretium, orci in hendrerit cursus, quam purus cursus urna, et
                sollicitudin eros libero non justo. Quisque vel tempor dui.
              </p>
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {showMore ? '◁' : '▷'}
              </button>
            </div>
          </div>
          </AnimationWrapper>

          <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-40 h-40 p-8 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/image/icons/icon3.png"
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl  hover:text-black">
                Raffinage Pétrochimie
              </h3>
              <p
                className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4'
                  }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                feugiat justo id ligula sollicitudin, nec condimentum ligula mollis.
                Ut pretium, orci in hendrerit cursus, quam purus cursus urna, et
                sollicitudin eros libero non justo. Quisque vel tempor dui.
              </p>
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {showMore ? '◁' : '▷'}
              </button>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-40 h-40 p-8 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/image/icons/icon5.png"
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl  hover:text-black">
                Chimie
              </h3>
              <p
                className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4'
                  }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                feugiat justo id ligula sollicitudin, nec condimentum ligula mollis.
                Ut pretium, orci in hendrerit cursus, quam purus cursus urna, et
                sollicitudin eros libero non justo. Quisque vel tempor dui.
              </p>
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {showMore ? '◁' : '▷'}
              </button>
            </div>

            {/* Column 3 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-40 h-40 p-8 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/image/icons/icon1.png"
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl  hover:text-black">
                Energie
              </h3>
              <p
                className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4'
                  }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                feugiat justo id ligula sollicitudin, nec condimentum ligula mollis.
                Ut pretium, orci in hendrerit cursus, quam purus cursus urna, et
                sollicitudin eros libero non justo. Quisque vel tempor dui.
              </p>
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {showMore ? '◁' : '▷'}
              </button>
            </div>

            {/* Column 4 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full p-8 overflow-hidden">
                <img
                  src="/image/icons/icon6.png"
                  alt="Image 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2 lg:text-3xl  hover:text-black">
                Pharmaceutique
              </h3>
              <p
                className={`text-gray-800 text-sm mb-4 lg:text-2xl ${showMore ? '' : 'line-clamp-4'
                  }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                feugiat justo id ligula sollicitudin, nec condimentum ligula mollis.
                Ut pretium, orci in hendrerit cursus, quam purus cursus urna, et
                sollicitudin eros libero non justo. Quisque vel tempor dui.
              </p>
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {showMore ? '◁' : '▷'}
              </button>
            </div>
          </div>
          </AnimationWrapper>


        </div>
      </section>







      {/* Section 2 */}
      <div
        className="py-12 px-6 bg-cover bg-center bg-white"
        style={{
          backgroundImage: `url('/image/BGlogo.png')`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
        <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ses compétences:
          </h2></AnimationWrapper>
          <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
          <div className="h-1 bg-blue-600 mb-8 w-1/4 mx-auto"></div>
          <p className="text-lg text-black  mb-6 mt-2 md:text-2xl ">
            Nous offrons des solutions complètes en planification, supervision
            de travaux. Nous assurons la maintenance,
            améliorons les équipements, gérons les obsolescences, et
            garantissons des processus fiables grâce à des méthodologies
            rigoureuses.
          </p>
          </AnimationWrapper>
          <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {carouselImages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                {/* Always show title */}
                <h3 className="text-3xl font-semibold text-blue-900 mb-2 p-4">
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
                    <p className="text-gray-700 text-2xl">{item.description}</p>
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
