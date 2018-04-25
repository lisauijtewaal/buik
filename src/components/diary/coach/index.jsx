import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import './index.css';

const Coach = ({ text, startUrl }) => {
  return (
    <div className="coach">
      Coach
      <p>{text}</p>
      <Link to={startUrl}>Start</Link>
    </div>
  );
};

Coach.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  startUrl: PropTypes.string.isRequired,
};

export default Coach;
