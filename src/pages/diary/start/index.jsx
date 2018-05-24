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
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={() => this.hideAlert()}

      >
        Wij raden je altijd aan om contact op te nemen met de huisarts wanneer u last heeft van maag-en darmklachten.
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
            halldsodoso
          </a>
          {this.state.alert}
        </div>
      </div>
    );
  }
}

export default App;
