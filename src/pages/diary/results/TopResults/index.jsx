import React, { Component } from 'react';
import '../index.css';
import ResultList from './ResultList';
import { DiaryContext} from "../../../../context/diary-context";
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <DiaryContext.Consumer>
        {(diaryState)=> (
          <div className="results">

            <h1>Resultaten</h1>


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
