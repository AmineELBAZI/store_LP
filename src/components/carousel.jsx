import React, { useState, useEffect, useRef } from 'react';
import './carouselCss.css';


const Carousel = () => {
  // States for managing the carousel index and timeouts
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);

  const carouselItems = [
    {
      imgSrc: '/image/background.jpg',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      imgSrc: '/image/background1.jpg',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      imgSrc: '/image/background2.jpg',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      imgSrc: '/image/background1.jpg',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
  ];

  const timeRunning = 3000; // Time for animation to run
  const timeAutoNext = 7000; // Time for auto-next

  const moveToNext = () => {
    if (isAnimating) return; // Prevent if already animating
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const moveToPrev = () => {
    if (isAnimating) return; // Prevent if already animating
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const autoNextTimeout = setTimeout(() => {
      moveToNext();
    }, timeAutoNext);

    return () => clearTimeout(autoNextTimeout); // Clean up the timeout on component unmount
  }, [currentIndex]);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, timeRunning);

    return () => clearTimeout(animationTimeout); // Clean up animation timeout
  }, [isAnimating]);

  return (
    <div className="carousel">
      {/* Carousel List */}
      <div className="list" ref={sliderRef}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.imgSrc} alt={item.title} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnail List */}
      <div className="thumbnail" ref={thumbnailRef}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.imgSrc} alt={item.title} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="arrows">
        <button onClick={moveToPrev}>&lt;</button>
        <button onClick={moveToNext}>&gt;</button>
      </div>

      {/* Time Running */}
      <div className="time"></div>
    </div>
  );
};

export default Carousel;
