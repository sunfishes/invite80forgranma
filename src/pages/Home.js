import React from 'react';
import './Home.css'; // Home.css 불러오기
import flowerImage from '../images/flower3.png';

const Home = () => {
  return (
    <div className="home-container">
      <img src={flowerImage} alt="초대 이미지" className="home-image" />
    </div>
  );
};

export default Home;
