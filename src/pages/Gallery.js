import React, { useState, useEffect } from 'react';
import './Gallery.css';
import GalleryImage from '../images/004.png';
import Gallery1 from '../images/Gallery1.jpg';
import Gallery2 from '../images/Gallery2.jpg';
import Gallery3 from '../images/Gallery3.jpg';
import Gallery4 from '../images/Gallery4.jpg';
import Gallery5 from '../images/Gallery5.jpg';
import Gallery6 from '../images/Gallery6.jpg';
import Gallery7 from '../images/Gallery7.jpg';
import Gallery8 from '../images/Gallery8.jpg';
import Gallery9 from '../images/Gallery9.jpg';
import Gallery10 from '../images/Gallery10.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 5초마다 자동 슬라이드 기능 추가
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    
    // 컴포넌트가 언마운트될 때 인터벌 클리어
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-outer-container">
      {title && <h2 className="carousel-title">{title}</h2>}
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="carousel-content">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            />
          ))}
        </div>
        
        <button className="carousel-button next" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  // 이미지 배열들을 여기에 추가하세요
  const firstSetImages = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5
  ];

  const secondSetImages = [
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10
  ];

  return (
    <div className="gallery-container">
      <img src={GalleryImage} alt="배경 이미지" className="gallery-bg" />
      <div className="carousels-wrapper">
        <Carousel images={firstSetImages} />
        <Carousel images={secondSetImages} />
      </div>
    </div>
  );
};

export default Gallery;