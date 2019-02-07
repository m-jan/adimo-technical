import React from 'react';
import './Retailers.css';

const Retailers = (props) => (
  <div className="retailers">
    <button 
      className="back"
      onClick={props.prevStep}>
        <i className="fas fa-arrow-left"></i>
    </button>
    <h1 className="heading">Select who you would like to shop with</h1>
    <button 
      className="retailer-button"
      onClick={props.nextStep}>
      <span className="retailer-logo">Asda</span>
    </button>
    <p className="account">Don't have an account? Create one</p>
    <p className="privacy">Privacy Policy</p>
  </div>
)

export default Retailers  