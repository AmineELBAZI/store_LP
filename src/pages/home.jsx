import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import ImagePopup from "../components/ImagePopup"
import { Link } from 'react-router-dom';

function Home() {
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
      src: '/image/image1.jpg',
      title: 'Système de sécurité instrumentés',
      description:
        'Dans le contexte de la sécurité industrielle, les systèmes de sécurité instrumentés (SIS) ' +
        'sont essentiels pour garantir les réductions de risque identifiés comme nécessaire dans les dans les analyses' +
        ' de risques ou dans les études de danger. Pour évaluer et analyser ces systèmes, Instrumea propose ' +
        'des solutions adaptées visant à atteindre les niveaux requis de sécurité et de conformité,',
    },
    {
      src: '/image/image2.jpg',
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
      src: '/image/image3.jpg',
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
    <div className="bg-gray-100">
      {/* First Section (Background Image with Title) */}
      <div
        className="py-[200px] bg-gradient-to-r from-cyan-950 to-white bg-cover bg-center flex flex-col items-start justify-center relative pl-8 pr-8"


      >
        {/* Title Section */}
        <div className=" max-w-3xl z-10   p-3">

          <div
            className="bg-cover bg-center w-full h-20  mr-2 hover:opacity-80  "
            style={{
              backgroundImage: `url('/image/logoW.png')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          >

          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-left ">
            INSTRUMEA
          </h1>


        </div>



        {/* Cards Section */}

        {/* Cards Section */}
        <div
          className="absolute transform translate-x-[90%] w-2/4 mr-0 mt-[600px] grid grid-cols-1 md:grid-cols-4 z-20"
          style={{ gap: '0px' }} // Removes space between cards
        >
          {[
            {
              image: '/image/image3.jpg',
              title: 'Raffinage Pétrochimie',
              link: '/service',
              icon: '/image/icons/icon3.png',
            },
            {
              image: '/image/image1.jpg',
              title: 'Energie',
              link: '/service',
              icon: '/image/icons/icon2.png',
            },
            {
              image: '/image/image2.jpg',
              title: 'Industrie',
              link: '/service',
              icon: '/image/icons/icon1.png',
            },
            {
              image: '/image/image3.jpg',
              title: 'Ingénierie',
              link: '/service',
              icon: '/image/icons/icon4.png',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-lg overflow-hidden hover:scale-125 relative h-[450px] md:h-[350px]"
            >
              <Link to={card.link} className="block h-full">
                <img
                  className="w-full h-full object-cover"
                  src={card.image}
                  alt={card.title}
                />

                {/* Icon at the top */}
                <div className="absolute top-4 left-4 bg-transparent flex justify-center items-center">
                  <img
                    className="w-20 h-20 transform transition-transform duration-300"
                    src={card.icon}
                    alt={`${card.title} icon`}
                    style={{ filter: 'invert(1)' }}
                  />
                </div>

                {/* Title with overlay */}
                <h5 className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold tracking-tight bg-black bg-opacity-50 hover:bg-opacity-10">
                  {card.title}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section (About the Company) */}
      <div className="bg-gray-100 mt-[250px] px-6 mb-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Qui sommes-nous ?
          </h2>
          <div className="h-1 bg-blue-600 mb-8 w-2/4 mx-auto"></div>

          {/* Two text columns and one card column */}
          <div className="grid grid-cols-1 md:grid-cols-3  ml-12 gap-20">
            {/* Text section (2 columns) */}
            <div className="col-span-2 text-gray-700  text-lg md:text-xl leading-relaxed">
              <p>
                <b className="text-blue-900">Instrumea</b> est une société
                spécialisée dans les services techniques en instrumentation.
              </p>
              <p>
                Elle accompagne les industries françaises dans la réalisation de
                leurs projets en proposant des prestations de support au service
                de maintenance,
              </p>
              <p>
                de coordination des travaux neufs et de gestion des arrêts de
                maintenance programmés.
              </p>
            </div>

            {/* Cards section (1 column) */}
            <div className="col-span-1 hover:scale-125">
              <div className="bg-blue-600 p-4 rounded shadow-md text-white">
                <h3 className="text-2xl font-bold mb-4">Notre Expertise</h3>
                <p className="text-lg">
                  Nos spécialistes en instrumentation accompagnent les donneurs
                  d’ordre en apportant leur expertise dans le domaine, afin de
                  garantir la qualité, la sécurité et le respect des délais et
                  objectifs fixés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section (Image and Description Slider) */}

      <ImagePopup></ImagePopup>





      {/* Third Section (3 Columns with Title and Description) */}


      <div
        className="  bg-cover bg-center bg-white pb-8 "
        style={{
          backgroundImage: `url('/image/logoO.png')`,
          backgroundSize: '200%',
          backgroundRepeat: 'no-repeat',
        }}

      >
        <h2 className="text-3xl md:text-4xl font-bold text-white min-w-8 w-2/6 rounded-r-full rounded-tr-none bg-cyan-600 p-6 pl-10 mb-8 hover:bg-white hover:text-cyan-600 ">
          Nos Services :
        </h2>
        <div className="max-w-6xl mx-auto text-center ">


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
            {carouselText.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:shadow-2xl relative overflow-hidden group hover-text-black"
              >
                {/* Hidden image initially, revealed on hover with 50% opacity */}
                <img
                  src={item.src}
                  alt={`Service ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-10 transition-opacity duration-500"
                />
                {/* Card content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white  group-hover:text-blue-900 mb-8 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg group-hover:text-black  opacity-0 mt-4 group-hover:opacity-100 transition-colors duration-300">
                    {/* Handle the second card description as one word per row */}
                    {index === 1
                      ? item.description
                        .split('.')
                        .filter(text => text.trim() !== '')
                        .map((line, idx) => (
                          <span key={idx} className="block  m-3">
                            {line.trim()}
                          </span>
                        ))
                      : item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#eaf1f5] bg-cover bg-center ">

        <div className="grid grid-cols-1   md:grid-cols-2 bg-[#eaf1f5]  gap-4  ">

          {/* First Column (Main Paragraph with Title) */}
          <div className="text-gray-700 text-lg md:text-xl  leading-relaxed  ">
            <h2 className="text-3xl md:text-4xl font-bold text-white  min-w-8 w-2/3 rounded-r-full rounded-tr-none bg-cyan-600 p-6 pl-10 mb-8 hover:bg-white hover:text-cyan-600">
            Nos Politiques  :
            </h2>

            <h3 className="text-amber-700 text-3xl font-bold mb-8 p-6 ">
              <b className="text-black text-3xl font-bold ">
                Politique QHSE
              </b>{' '}
              (Qualité, Hygiène, Sécurité, Environnement)
            </h3>
            <p className="text-black m-3 text-1xl pl-12">
              Notre politique vise à renforcer la culture SSE (Sécurité, Santé,
              Environnement) de nos collaborateurs. Cette approche nous permet
              de perfectionner nos pratiques et de réduire les risques au
              quotidien. S'appuyant sur le référentiel MASE (Manuel
              d'Amélioration Sécurité des Entreprises), cette politique permet
              d'intégrer les meilleures pratiques et de répondre aux exigences
              réglementaires et normatives.
            </p>
          </div>

          {/* Second Column (Three Sections with Logos and Titles) */}
          <div className="space-y-8   bg-white  p-20  ">
            {/* First Item */}
            <div className="flex items-start space-x-4 pt-12">
              <img
                src="/image/icons/iconQ1.png"
                alt="Qualité"
                className="w-16 h-16 p-2 bg-amber-600 rounded-full"
              />
              <div>
                <h4 className="text-blue-900 font-semibold  text-lg">
                  Qualité
                </h4>
                <p>
                  Viser l'excellence en plaçant la satisfaction de nos clients
                  au centre de nos préoccupations.
                </p>
              </div>
            </div>

            {/* Second Item */}
            <div className="flex items-start space-x-4">
              <img
                src="/image/icons/iconQ2.png"
                alt="Sécurité"
                className="w-16 h-16 p-2   bg-amber-600 rounded-full"
              />
              <div>
                <h4 className="text-blue-900 font-semibold  text-lg">
                  Sécurité
                </h4>
                <p>
                  Garantir la sécurité physique et morale de nos collaborateurs.
                </p>
              </div>
            </div>

            {/* Third Item */}
            <div className="flex items-start space-x-4">
              <img
                src="/image/icons/iconQ3.png"
                alt="Environnement"
                className="w-16 h-16 p-2  bg-amber-600 rounded-full "
              />
              <div>
                <h4 className="text-blue-900 font-semibold  text-lg">
                  Environnement
                </h4>
                <p>Minimiser l’impact de notre activité sur l’environnement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
