import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import './index.css';

const Coach = ({ text,image,startUrl }) => {
  return (
    <div className="coach">
      <div className ="coach-box">
        <div className="header">
        <h2>Welkom bij het hoofdstuk</h2>
        <h3>Ontspanning</h3>
        </div>
        <div className="text-coach">
        <p>{text}</p>
        <div className="button">
          <Link to={startUrl}>Begin</Link>
        </div>
        </div>
      </div>
      <img className="talk" src={require('./wolk.png')}/>

      <img className="image" src={require('./coach-bril.png')}/>
    </div>
  );
};

Coach.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  startUrl: PropTypes.string.isRequired,
};

export default Coach;
