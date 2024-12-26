import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import AnimationWraRL from '../components/animationWraRL.jsx';
import AnimationWrapper from './animationWraUP.jsx';


const carouselImages = [
  {
    src: "/image/image1.jpg",
    title: "Coordinateur Instrumentation (F/H)",
    description:
      "Poste basé chez notre client, en tant que Coordinateur Instrumentation. " +
      "Intégré au service maintenance, vous réaliserez une assistance technique de méthodes et fiabilisation en instrumentation.",
    Pays: "France",
    Ville: "Rhône",
    Compétences: `
      - Savoir définir et suivre la politique d’essais systématiques des chaînes d’alarme / sécurité
      - Mener des études de faisabilité et proposer des améliorations techniques
      - Gérer les interventions sur site pour diagnostics et résolutions de problème
      - Analyse de criticité instrumentation
      - Mettre en place des indicateurs de performance et plans d’actions de fiabilité
      - Identification, commande et gestion du stock et des pièces de rechange
      - Rédiger des cahiers des charges
      - Préparation des marchés de travaux
      - Il peut être amené à réceptionner du matériel chez les constructeurs
      - Il participe au suivi des travaux et à leur réception
      - Il est responsable de la mise à jour des dossiers techniques liés à sa mission
      - Il participe à l’analyse des dysfonctionnements des équipements d’instrumentation et propose des actions correctives en conséquence (modification d’équipement, mode opératoire et procédures)
    `,
  },
  {
    src: "/image/image1.jpg",
    title: "Préparateur Instrumentation (F/H) ",
    description:
      "Poste basé chez notre client, en tant que préparateur Instrumentation " +
      "Intégré au service travaux neufs vous réaliserez une assistance technique d’accompagnement à la préparation d’arrêt.",
    Pays: "France",
    Ville: "Rhône",
    Compétences: `
      - Savoir identifier un de scope travaux en instrumentation et proposer des solutions adaptées. 
      - Savoir rédiger des cahiers des charges. 
      - Savoir gérer les appels d'offres et sélectionner les fournisseurs .
      - Assurer le lien entre équipes techniques et fonctions transverses .
      - Contrôler les documents techniques, dossiers, certifications et inspections .
      - Gestion des bases de données instrumentation .
      - Mise à jour des standards d'installation (supportage, hook-up, schémas de boucles types de câblage …) et études préliminaires d'installation (cheminements, localisation des BJ, routing …)  
      - Relevés sur site et préparation documentaire .
    `,
  },
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1, // Show only one card in the center
  centerMode: true,
  centerPadding: "0px", // No padding around the centered card
  autoplay: true,
  autoplaySpeed: 3000,
};

Modal.setAppElement("#root");

const ImagePopup = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const navigate = useNavigate(); // Correctly place useNavigate here
  const handleSeeMore = (item) => {
    setModalContent(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#eaf1f5] dark:bg-gray-900">
      <AnimationWraRL transition={{ duration: 1, delay: 0.2 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  dark:text-white text-blue-900 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-br-full bg-none p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8 hover:bg-white hover:text-cyan-600 duration-300">
          Nos Offres d'Emploi :
        </h2>

      </AnimationWraRL>
      <div className="h-full flex justify-center items-center bg-[#eaf1f5]  p-6 dark:bg-gray-900">

        <div className="w-full max-w-5xl">
          <AnimationWrapper transition={{ duration: 1, delay: 0.2 }}>
            <Slider {...carouselSettings}>
              {carouselImages.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <div
                    className="bg-white border rounded-lg  flex flex-col md:flex-row p-6"
                    style={{
                      width: "100%",
                      maxWidth: "1300px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Image Column */}
                    <div className="w-full md:w-1/2">
                      <img
                        className="object-cover w-full h-full rounded-lg"
                        src={item.src}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                      <h5 className="mb-4 text-xl md:text-3xl font-bold text-neutral-800">
                        {item.title}
                      </h5>
                      <p className="mb-4 text-base md:text-lg text-gray-700">
                        {item.description}
                      </p>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-tr-full rounded-bl-full hover:bg-blue-600 text-lg md:text-2xl"
                        onClick={() => handleSeeMore(item)}
                      >
                        Voir Plus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </AnimationWrapper>

          {/* Popup Modal */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Card Details"
            className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 h-3/4 mx-auto p-4 md:p-6 lg:p-8 relative"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-stone-950 text-lg md:text-xl"
            >
              ✕
            </button>
            <div className="h-full overflow-y-auto">
              <img
                src={modalContent.src}
                alt={modalContent.title}
                className="rounded-lg rounded-b-none w-full h-60 md:h-72 lg:h-80 object-cover mb-4"
              />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 m-4">
                  {modalContent.title}
                </h2>
                <div className="flex items-center p-4 border-2 border-solid border-blue-300 rounded-lg m-4">
                  <img
                    src="/image/icons/iconF2.png"
                    alt="icon"
                    className="w-8 h-8 md:w-9 md:h-9"
                  />
                  <b className="text-gray-900 ml-4 md:ml-6 text-lg md:text-xl lg:text-2xl">
                    {modalContent.Pays}:{" "}
                    <span className="text-blue-600">{modalContent.Ville}</span>
                  </b>
                </div>
              </div>
              <p className="text-gray-700 mx-4 md:mx-8 text-lg md:text-xl lg:text-2xl mb-4">
                {modalContent.description}
              </p>
              <p className="mx-4 md:mx-8 text-xl lg:text-2xl text-neutral-800 mb-4">
                Compétences requises
              </p>
              <ul className="list-disc text-gray-800 mx-8 md:mx-12 mt-4 text-base md:text-lg lg:text-xl space-y-2">
                {modalContent.Compétences &&
                  modalContent.Compétences.split("\n")
                    .filter((line) => line.trim() !== "")
                    .map((line, index) => (
                      <li key={index} className="text-base md:text-lg lg:text-xl">
                        {line.trim()}
                      </li>
                    ))}
              </ul>
              <div className="flex justify-end m-4 md:m-8">
                <button
                  className="font-bold inline-flex items-center justify-center px-12 py-3  p-6 text-base  text-center text-gray-900 border-2 border-blue-900 rounded-lg hover:bg-blue-400 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-gray-600 dark:border-gray-400 dark:hover:bg-blue-400 dark:focus:ring-gray-800 m-4 duration-500"
                  onClick={() => {
                    const jobTitle = `Candidature pour le poste de ${modalContent.title}`;
                    const queryParam = new URLSearchParams({
                      Object: jobTitle,
                    }).toString();
                    navigate(`/contact?${queryParam}`);
                  }}
                >
                  Postule
                  <img
                    src="/image/logoW.png"
                    alt="icon"
                    className="w-9 h-5 md:w-7 md:h-7 ml-4 animate-pulse"
                  />
                </button>
              </div>
            </div>
          </Modal>

        </div>
      </div>
    </div>

  );
};

export default ImagePopup;
