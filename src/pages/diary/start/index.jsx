import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import './index.css';
import SweetAlert from 'react-bootstrap-sweetalert';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // standaard wordt er op de pagina geen alert getoond.
      alert: null
    };
  }

  deleteThisGoal() {
    const getAlert = () => (
      //  het component SweetAlert en de gezette variabelen.
      <SweetAlert
        warning
        confirmBtnText="Ik heb het begrepen"
        confirmBtnColor='#fffff'
        title="Ernstige  maag-en darmklachten?"
        buttons= 'true'
        onConfirm={() => this.hideAlert()}

      >
        Neem dan altijd contact op met een huisarts of specialist en blijf er niet langer mee rondlopen. Op basis van je resultaten kunnen jullie samen zoeken naar een passende oplossing.
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {
    // wanneer de gebruiker de popup wegklikt verwijder alert en ga  naar de volgende pagina.

    console.log('Hiding alert...');
    this.setState({
      alert: null
    });
    window.location.href = "/dagboek/ontspanning#/dagboek/ontspanning";

  }

  render() {
    return (
      <div className="start">
        <h3>Welkom Lisa bij het onderdeel 'mijn dagboek'</h3>
        <div className="coach">
          <div className ="coach-box">
            <div className="header">
              <h2>Mijn naam is Finn</h2>
            </div>
            <div className="text-coach">
              <p>Ik ben jouw persoonlijke coach. Samen gaan we op zoek naar factoren (binnen deze app triggers genoemd) die bij jou voor klachten kunnen zorgen. Dat doen we aan de hand van het beantwoorden van enkele vragen. Ben je er klaar voor?</p>
              <div style={{padding: '20px'}}>
                <button>   <a
                  onClick={() => this.deleteThisGoal()}
                  className='btn btn-danger'
                >
                  Begin
                </a></button>

                {this.state.alert}
              </div>
            </div>
          </div>
          <img className="talk" src={require('../../../images/wolk.png')}/>
          <img className="image" src={require('../../../images/coach_thumbsup.png')}/>
        </div>

      </div>
    );
  }
}

export default App;
