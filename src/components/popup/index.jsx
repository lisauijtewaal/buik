import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';



class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <img className="inner_image" src={this.props.image}/><br />
          <button className="button_start" onClick={this.props.closePopup}>sluiten</button>
        </div>
      </div>
    );
  }


}

export default Popup;