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

  printDocument() {
    const input = document.getElementsByClassName('results');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }


  render() {

    return (
      <DiaryContext.Consumer>
        {(diaryState)=> (
          <div className="results">

            <h1>Resultaten</h1>
            <p>Hieronder vind je de top 3 triggers die mogelijk klachten kunnen veroorzaken</p>
            {/*<div className="links"> <Link to='/dagboek/resultaten/top-3/' onClick={this.printDocument}>*/}
                {/*/!*<img className="printImage" src={require('../../../../images/download.png')}/>*!/*/}
            {/*</Link></div>*/}
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
