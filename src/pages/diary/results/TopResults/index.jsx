import React, { Component } from 'react';
import '../index.css';
import ResultList from './ResultList';
import { DiaryContext} from "../../../../context/diary-context";
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

window.html2canvas = html2canvas;
class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <DiaryContext.Consumer>
        {(diaryState)=> (
          <div className="results">

            <h1>Resultaten</h1>
            <p>Aan de hand van jouw antwoorden is er gekeken welke triggers de mogelijke oorzaak kunnen zijn van jouw klachten. In onderstaande top-3 zie je welke triggers dit zijn en kan je meer lezen over deze trigger.   </p>
            <ResultList results={diaryState.results} />
            <div className="button">
              <Link role="button" to={'/'}>Finish!</Link>
            </div>
          </div>
        )}
      </DiaryContext.Consumer>
    );
  }
}

export default App;
