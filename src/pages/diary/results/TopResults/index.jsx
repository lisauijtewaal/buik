import React, { Component } from 'react';
import '../index.css';
import ResultList from './ResultList';
import { DiaryContext} from "../../../../context/diary-context";
import { Link } from 'react-router-dom';

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
            <p>Hieronder vind je de top 3 triggers die mogelijk klachten kunnen veroorzaken</p>
            <div className="links"> <Link to='/dagboek/resultaten/top-3/' onClick={() => window.print()}>
              <button className="hallo" type="button">
                <img className="printImage" src={require('../../../../images/print.png')}/>
              </button>
            </Link></div>
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
