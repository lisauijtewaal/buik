import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import './index.css';

const Coach = ({ text,image,nextUrl, category }) => {
  return (
    <div className="coach">
      <div className ="coach-box">
        <div className="header">
        <h2>Welkom bij het hoofdstuk</h2>
        <h3>{category}</h3>
        </div>
        <div className="text-coach">
        <p>{text}</p>
          <Link to={nextUrl}>
            <button type="button">
              Start!
            </button>
          </Link>

        </div>
      </div>
      <img className="talk" src={require('./wolk.png')}/>
      <img className="image" src={image}/>
    </div>
  );
};

Coach.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Coach;
