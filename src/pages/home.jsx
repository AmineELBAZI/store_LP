import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { React, useEffect } from 'react'
import './home.css';
import { useAddKeyframes, fadeInAnimation, fadeOutAnimation } from "../components/animationUtils.jsx";
import AnimationWrapper from '../components/animationWraUP.jsx';
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
    <div className="bg-[#dfdcd7] ">
      {/* First Section (Background Image with Title) */}
      <div
        className="bg-gradient-to-r from-[#a17a50] via-[#d6a870] to-[#ffffff] bg-cover bg-center flex flex-col items-start justify-center relative pl-8 pr-8 "

        style={{
          height: '800px',
          backgroundImage: `url('/image/stor_Image/background.jpg')`, // <- your background image path here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>






        {/* Title Section */}

        <div className=" max-w-3xl z-10   p-3 " style={fadeInAnimation}>


          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 text-left   duration-500 " style={fadeInAnimation}>
            THE  UNTAMED
          </h1>
          <div
            className='p-4 rounded-r-full rounded-bl-full m-4 items-center justify-items-center transition-transform duration-500'

          >

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


            },
            {
              image: '/image/stor_Image/image8.jpg',


            },
            {
              image: '/image/stor_Image/image3.jpg',


            },
            {
              image: '/image/stor_Image/image1.jpg',


            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-lg overflow-hidden relative h-[100px] hover:scale-110  sm:h-[150px] md:h-[260px] lg:h-[350px] duration-500 dark:bg-gray-900"
            >

              <img
                className="w-full h-full object-cover"
                src={card.image}
                alt={card.title}
              />

             

            </div>
          ))}

        </div>

      </div>


      {/* Second Section (About the Company) */}


      <div
        className="mt-[250px] p-20 dark:bg-gray-900 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('/image/background-section.jpg')`, // optional background image
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-[#dfdcd7]/80 dark:bg-gray-900/80 z-0"></div>

        <div className="max-w-full mx-auto relative z-10">
          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
            {[
              '/image/stor_Image/image17.jpg',
              '/image/stor_Image/image8.jpg',
              '/image/stor_Image/image16.jpg',
              '/image/stor_Image/image3.jpg',
              '/image/stor_Image/image19.jpg',
              '/image/stor_Image/image15.jpg',
            ].map((src, index) => (
              <div
                key={index}
                className="overflow-hidden  shadow-lg transform hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#f7f3f0] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Video Section */}
          <div className="w-full md:w-1/2">
            <video
              className="w-full h-auto rounded-xl shadow-lg"
              autoplay
              muted
              loop
              controls
              poster="/image/video/new1_video.gif"
            >
              <source src="/image/video/new_video.mp4" type="video/mp4" />
              المتصفح الخاص بك لا يدعم تشغيل الفيديو.
            </video>
          </div>

          {/* Text Section */}
          <div dir="rtl" className="w-full md:w-1/2 space-y-6 text-center md:text-right">
            <h2 className="text-6xl font-bold text-[#704f3a]">اكتشف منتجنا الجديد</h2>
            <p className="text-3xl text-gray-700">
              اكتشف الابتكار كما لم تراه من قبل. شاهد الفيديو لترى المنتج أثناء الاستخدام، ثم استعرض المزيد من التفاصيل والعروض
            </p>

            <a
              href="https://ma.theuntamed.com/product/memento-mori-rejuvenating-eye-mask/"
              className="inline-block px-6 py-3 bg-[#cea58e] text-white font-semibold rounded-full hover:bg-[#aa7d66] transition duration-300"
            >
              زيارة الموقع الرسمي
            </a>
          </div>

        </div>
      </section>


      {/* Fourth Section (Image and Description Slider) */}


      <div className="bg-cover bg-center bg-[rgb(112,98,88)]  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
          {/* First Column (Main Paragraph with Title) */}


          <div dir="rtl" className="text-lg sm:text-xl leading-relaxed p-6 sm:p-12 fade-in-up bg-[#cea58e]">
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <h2 className="text-amber-700 text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
                <p className="font-bold mb-4 text-black hover:text-blue-700 dark:text-white  m-4 hover:pr-6 duration-500">
                  سيروم للجسم لشد البشرة ومضاد للأكسدة
                </p>
              </h2>
            </AnimationWrapper>
            <div className="p-6 text-gray-600">
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white  hover:pr-6 duration-500">
                  يُحسن من تماسك البشرة بفضل الريسفيراترول الطبيعي
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white  hover:pr-6 duration-500">
                  94٪ من المكونات طبيعية
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white  hover:pr-6 duration-500">
                  مناسب لجميع أنواع البشرة
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white  hover:pr-6 duration-500">
                  خالٍ من التجارب على الحيوانات (CRUELTY-FREE)
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white  hover:pr-6 duration-500">
                  مصنوع في سويسرا
                </p>
              </AnimationWrapper>
              <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
                <p className="mb-4 text-xl sm:text-3xl hover:text-blue-800 dark:text-white hover:pr-6 duration-500">
                  نباتي (VEGAN)
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
                backgroundImage: `url('/image/stor_Image/image22.png')`,
              }}
            ></div>

          </AnimationWraLR>


        </div>
      </div>

      <section className="bg-[rgb(112,98,88)] py-10 flex justify-center items-center">
        <svg
          className="w-20 h-20 animate-bounce text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </section>



      <div className="bg-cover bg-center bg-[rgb(112,98,88)] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
          {/* Wrapper for Centering */}
          <AnimationWraLR transition={{ duration: 1, delay: 0.2 }}>

            <div
              className="flex items-center justify-center mx-auto bg-cover bg-center hover:scale-105  duration-500  mt-[150px] 
                        w-[300px] h-[300px] lg:w-[700px] lg:h-[700px]"
              style={{
                backgroundImage: `url('/image/stor_Image/image9.png')`,
              }}
            ></div>

          </AnimationWraLR>
          {/* First Column (Main Paragraph with Title) */}
          <div
            dir="rtl"
            className="bg-[#cea58e] text-right text-gray-900 dark:text-white fade-in-up p-6 sm:p-16 leading-loose space-y-8"
          >
            {/* Title */}
            <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
              <h2 className="text-4xl sm:text-7xl font-extrabold pt-20 text-black dark:text-white hover:text-blue-700 transition duration-500">
                استمتع بعناية فاخرة لجسمك
              </h2>
            </AnimationWrapper>

            {/* Content */}
            <div className="space-y-6 sm:space-y-10 text-3xl sm:text-3xl pt-20">
              <AnimationWrapper transition={{ duration: 1, delay: 0.3 }}>
                <p className="hover:text-blue-800 transition duration-500">
                  هل تبحث عن لحظة هدوء وسط صخب الحياة؟
                </p>
                <p className="hover:text-blue-800 text-teal-800 mt-10  transition duration-500">
                  The Untamed
                </p>
                <p className="hover:text-blue-800  transition duration-500">
                  تأخذك في رحلة من العناية الذاتية مستوحاة من سحر الطقوس الإسكندنافية
                </p>
              </AnimationWrapper>
            </div>
          </div>





        </div>
      </div>



      {/* Third Section (3 Columns with Title and Description) */}

      <section className="bg-[#c9ae9e] p-5">
        <div className="max-w-7xl mx-auto flex flex-col mt-20 md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-6" dir="rtl">

          {/* Column 1: Image section */}
          <div className="w-full md:w-1/3 flex justify-center p-4">
            <div
              className="bg-cover bg-center hover:scale-105 duration-500 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full shadow-xl"
              style={{
                backgroundImage: `url('/image/stor_Image/image6.jpg')`,
              }}
            ></div>
          </div>

          {/* Column 2: Text section */}
          <div className="w-full md:w-1/3 space-y-4 text-center md:text-right flex flex-col justify-center p-8">
            <h2 className="text-3xl mt-20 font-bold text-white">مرحباً بكم في موقعنا</h2>
            <p className="text-lg text-white">
              استكشف عروضنا واكتشف الصفقات المذهلة المخصصة لك!
            </p>
          </div>

          {/* Column 3: Button section */}
          <div className="w-full md:w-1/3 flex flex-col pt-20 items-center justify-center md:justify-end space-y-4">
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
              className="px-12 py-4 mt-20 bg-white font-bold text-[#cea58e] rounded-full hover:bg-gray-600 hover:text-white transition duration-300"
            >
              زيارة الموقع الرسمي
            </a>
          </div>

        </div>
      </section>

      {/* PARFUM section */}
      <section className="bg-[#f5f5f5] ">
        <div className="max-w-full mx-auto  text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group perspective relative w-full h-[600px]">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div
                    className="absolute w-full h-full"
                    style={{
                      backgroundImage: `url('/image/stor_Image/front${i}.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>

                  {/* Back */}
                  <div
                    className="absolute w-full h-full backface-hidden rotate-y-180"
                    style={{
                      backgroundImage: `url('/image/stor_Image/back${i}.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>






      {/* pake section */}

      <section className="bg-[rgb(112,98,88)] p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-6">
          {/* Column 1: Video */}
          <div className="w-full  md:w-1/3 ">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              poster="/image/video/PF_video.gif" 
              autoplay
              muted 
              loop 
            >
              <source src="/image/video/PF_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Column 2: Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/image/stor_Image/p_image.png"
              alt="Product"
              className="rounded-full shadow-md w-[600px] h-[300px] object-cover "
            />
          </div>

          {/* Column 3: Text + Button */}
          <div className="w-full md:w-1/3 space-y-4 text-center md:text-left" dir="rtl">
            <h2 className="text-5xl font-bold text-[#ffffff]">EAU DE PARFUM</h2>
            <p className="text-red-400 text-2xl">
              اكتشف الابتكار كما لم تراه من قبل
            </p>
            <a
              href="https://ma.theuntamed.com/fragrance/"
              className="inline-block px-6 py-3 bg-[#cea58e] text-white font-semibold rounded-full hover:bg-[#aa7d66] transition duration-300"
            >
              زيارة الموقع الرسمي
            </a>
          </div>
        </div>
      </section>


    



    </div>
  )
}

export default Home
