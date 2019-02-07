import React from 'react';
import './Banner.css';

const Banner = (props) => (
  <div className="banner">
    <img className="banner-img" src="https://buildv2.adimo.co/Static/Views/displayAds-preview/mpu.jpg" alt=""/>
    <button onClick={props.nextStep} className="add">Adimo</button>
  </div>
)

export default Banner