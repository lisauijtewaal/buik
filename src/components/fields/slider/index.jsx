import React from 'react';
import './index.css';





const Slider = () => {
  return (
    <div className="sliderContainer"> <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/></div>
  );
};

export default Slider;
