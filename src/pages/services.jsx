import React, {useState, useEffect} from 'react'

const Services = () => {
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
        className="py-[300px] bg-cover bg-center flex flex-col items-start justify-center  relative p-10 "
        style={{backgroundImage: backgroundImage}}
      >
        {/* Title Section */}
        <div className="rounded-lg  text-left mt-[0px]  max-w-3xl bg-white p-4  text-black opacity-90 shadow-lg hover:scale-110">
          <p className="text-lg md:text-2xl">
            Installée en Rhône Alpes, <b className="text-blue-600">INSTRUMEA</b>{' '}
            est une société spécialisée dans les métiers de l'ingénierie.
          </p>
          <p className="text-lg md:text-xl">
            dans le domaine de l'instrumentation et de l'informatique
            industriel.
          </p>
          <p className="text-lg md:text-xl">
            Elle accompagne les industries françaises dans leurs projets, elle
            propose une assistance technique en maintenance, travaux neufs et
            préparation d'arrêt.
          </p>
        </div>

        {/* Cards Section */}
        <div
          className="absolute transform  translate-x-[90%] w-2/4   mt-[550px]   z-20"
          style={{gap: '0px'}}
        >
          <div className="bg-amber-700 border  border-gray-200 shadow-lg overflow-hidden rounded-b-full relative h-[400px] w-[500px] p-8 opacity-90 flex justify-center items-center hover:scale-110">
            <a className="block h-full">
              <img
                className="object-cover w-22 h-22 mb-4 m-2 mx-auto"
                src="/image/icons/iconS1.png"
                alt="/service"
                style={{filter: 'invert(1)'}}
              />

              {/* Icon at the top */}
              <div className="absolute top-4 left-4 bg-transparent flex justify-center  items-center"></div>

              {/* Title with overlay */}
              <h5 className="absolute inset-0  mt-20  flex items-center justify-center  text-white text-2xl font-bold tracking-tight  text-center">
                Présentation de nos services et domaines d'expertise
              </h5>
            </a>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white bg-cover bg-center">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-4">
          {/* First Column (Main Paragraph with Title) */}
          <div className="text-gray-700 text-lg md:text-xl leading-relaxed p-12 mt-8">
            <h2 className="text-amber-700 text-5xl font-bold mb-8">
              <b className="text-black  font-bold mb-4">
                Présentation de notre entreprise et de ses processus :
              </b>
            </h2>
            <p className="text-black m-6 text-3xl">
              Instrumea offre une expertise complète en ingénierie et gestion de
              projets, avec une approche structurée et rigoureuse. Nous
              intervenons dans la planification, la préparation des travaux,
              l’achat de matériel, et la supervision des opérations.
            </p>
            <p className="text-black m-6 text-3xl">
              Nos services incluent le développement d’applications sur
              automates, la rédaction de cahiers des charges, et la maintenance
              des équipements, tout en garantissant des solutions fiables et
              innovantes.
            </p>
            <p className="text-black m-6 text-3xl">
              Nous assurons également la budgétisation, l'amélioration des
              équipements, et la gestion de démarches SIL et SIS, tout en
              respectant les normes QHSE grâce au référentiel MASE.
            </p>
            <p className="text-black m-6 text-3xl">
              Avec une méthodologie rigoureuse, nous répondons aux besoins les
              plus complexes, notamment dans les projets neufs, l’automatisme,
              et la préparation des arrêts techniques.
            </p>
          </div>

          {/* Second Column (Three Sections with Logos and Titles) */}
          <div className="space-y-8 bg-[#eaf1f5] rounded-l-full text-5xl ml-0 p-[150px] hover:scale-110 ">
            {/* First Item */}
            <div className="flex items-start space-x-4 mt-12">
              <img
                src="/image/icons/iconQ1.png"
                alt="Qualité"
                className="w-20 h-20 m-12  "
              />
              <div>
                <h1 className=" font-semibold m-12 text-black">
                  Société à taille humaine
                </h1>
              </div>
            </div>

            {/* Second Item */}
            <div className="flex items-start  mt-12 space-x-4">
              <img
                src="/image/icons/iconQ2.png"
                alt="Hygiène"
                className="w-20 h-20  m-12 "
              />
              <div>
                <h4 className=" font-semibold m-12 text-black">Dynamique</h4>
              </div>
            </div>

            {/* Third Item */}
            <div className="flex items-start m-12 space-x-4">
              <img
                src="/image/icons/iconQ3.png"
                alt="Sécurité"
                className="w-20 h-20 m-12  "
              />
              <div>
                <h4 className=" font-semibold m-12 text-black">A l'écoute</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ses compétences:
          </h2>
          <div className="h-1 bg-blue-600 mb-8 w-1/4 mx-auto"></div>
          <p className="text-lg text-black  mb-6 mt-2 md:text-xl">
            Nous offrons des solutions complètes en planification, supervision
            de travaux, développement d'applications automatisées, et mise en
            œuvre de systèmes de sécurité. Nous assurons la maintenance,
            améliorons les équipements, gérons les obsolescences, et
            garantissons des processus fiables grâce à des méthodologies
            rigoureuses. Notre expertise inclut également la budgétisation, la
            consultation de sous-traitants, et la gestion de projets neufs et
            d'arrêts techniques.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {carouselImages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                {/* Always show title */}
                <h3 className="text-2xl font-semibold text-blue-900 mb-2 p-4">
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
                    <p className="text-gray-700 text-lg">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white bg-cover bg-center">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#eaf1f5] gap-4">
          {/* First Column (Main Paragraph with Title) */}
          <div
            className="py-12 px-6 bg-cover bg-center  rounded-r-full"
            style={{
              backgroundImage: `url('/image/background.jpg')`,
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* First Item */}
          </div>

          {/* Second Column (Three Sections with Logos and Titles) */}
          <div className="space-y-8 bg-[#eaf1f5] p-20">
            {/* First Item */}
            <div className="flex items-start space-x-4">
              <img
                src="/image/icons/iconQ1.png"
                alt="Qualité"
                className="w-16 h-16 p-2 bg-amber-600 rounded-full"
              />
              <div>
                <h4 className="text-2xl font-semibold text-blue-800">
                  Qualité
                </h4>
                <p className="text-lg text-black mt-2">
                  La qualité de nos services est notre priorité. Nous
                  garantissons des solutions innovantes et efficaces tout en
                  respectant les standards les plus stricts en matière de
                  qualité.
                </p>
              </div>
            </div>

            {/* Second Item */}
            <div className="flex items-start space-x-4">
              <img
                src="/image/icons/iconQ2.png"
                alt="Hygiène"
                className="w-16 h-16 p-2 bg-amber-600 rounded-full"
              />
              <div>
                <h4 className="text-2xl font-semibold text-blue-800">
                  Hygiène
                </h4>
                <p className="text-lg text-black mt-2">
                  Nous veillons à respecter les règles d'hygiène et à garantir
                  un environnement de travail sain et sûr pour tous nos
                  collaborateurs.
                </p>
              </div>
            </div>

            {/* Third Item */}
            <div className="flex items-start space-x-4">
              <img
                src="/image/icons/iconQ3.png"
                alt="Sécurité"
                className="w-16 h-16 p-2 bg-amber-600 rounded-full"
              />
              <div>
                <h4 className="text-2xl font-semibold text-blue-800">
                  Sécurité
                </h4>
                <p className="text-lg text-black mt-2">
                  La sécurité de nos équipes est essentielle. Nous mettons en
                  place des procédures strictes pour éviter les accidents et
                  garantir la sécurité de tous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
