import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import './index.css';
import SweetAlert from 'react-bootstrap-sweetalert';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  }

  deleteThisGoal() {
    const getAlert = () => (
      <SweetAlert
        warning
        confirmBtnText="Ik heb het begrepen"
        title="Regelmatig last van maag-en darmklachten?"
        buttons= 'true'
        onConfirm={() => this.hideAlert()}

      >
        Neem dan altijd contact op met een huisarts of specialist. Op die manier sluit je uit dat er geen ernstige ziekte de oorzaak is van de klachten.
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {

    console.log('Hiding alert...');
    this.setState({
      alert: null
    });
    window.location.href = "/dagboek/ontspanning#/dagboek/ontspanning";

  }

  render() {
    return (
      <div className="start">
        <h1>Welkom bij mijn dagboek</h1>
        <img className="diary" src={require('./diary.png')}/>
        <div style={{padding: '20px'}}>
          <a

            onClick={() => this.deleteThisGoal()}
            className='btn btn-danger'
          >
            Start!
          </a>
          {this.state.alert}
        </div>
      </div>
    );
  }
}

export default App;
