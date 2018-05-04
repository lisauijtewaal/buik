import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Coach from '../coach';
import { DiaryContext } from "../../../context/diary-context";
import './index.css';
import ResultList from '../../../pages/diary/results/TopResults/ResultList';

class App extends Component {
  render() {



  }
}

App.propTypes = {
  diaryCategory: PropTypes.shape({
    url: PropTypes.string.isRequired,
    finishedUrl: PropTypes.string.isRequired,
    coach: PropTypes.shape().isRequired,
    steps: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default App;
