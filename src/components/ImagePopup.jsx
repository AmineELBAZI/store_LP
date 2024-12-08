import React, { useState } from "react";
import Modal from "react-modal"; // Install this with `npm install react-modal`

{/* Fourth Section (Image Carousel with Text Overlay) */}
const ImagePopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-slate-300 py-12">
      <div className="max-w-6xl mx-auto">
        <Slider {...carouselSettings}>
          {carouselImages.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(item)}
            >
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-2xl md:text-3xl font-bold text-center px-4">
                  <h3 className="mb-10">{item.title}</h3>
                  <p className="text-xl font-semibold mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Popup Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Details"
        className="bg-white rounded-lg shadow-lg max-w-md mx-auto p-6 relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        ariaHideApp={false}
      >
        {selectedImage && (
          <div>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
            <p className="text-gray-600">{selectedImage.description}</p>
          </div>
        )}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          ✕
        </button>
      </Modal>
    </div>
  );
};

export default ImagePopup;
