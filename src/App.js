import React from 'react';
import Home from "./pages/Home";
import Location from "./pages/Location";
import Gallery from "./pages/Gallery";
import './App.css'; // app.css 불러오기

const App = () => {
  return (
    <div>
      {/* 각 페이지를 스크롤 방식으로 배치 */}
      <div className="scroll-section">
        <Home />
      </div>
      <div className="scroll-section">
        <Location />
      </div>
      <div className="scroll-section">
        <Gallery />
      </div>
    </div>
  );
};

export default App;
