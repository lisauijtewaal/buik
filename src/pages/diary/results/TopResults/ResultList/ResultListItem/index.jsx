import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* De werking
 * score: 1-10
 * question: {
    text: 'Fruit',
    textfield: 'Fruit is slecht voor je',
    image: '"../images/diaryCategory/stress/step_1.jpg',
    question: 'Hoeveel fruit heb jij vandaag gegeten?',
    field: (
      <Number
        type="fruit"
        calculateScore={value => {
          if (value === 0 || value > 3) {
            return 1;
          } else if (value === 1 || value === 3) {
            return 5;
          } else if (value === 2) {
            return 10;
          }
        }}
      />
    ),
    nextUrl: '/dagboek/voeding/koolzuur',
    category: 'Voeding',
  }
 */
class ResultListItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  scrollToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  render() {
    const { score, question, index } = this.props;

    /*
   Koppel een kleur aan de score van de gebruiker
   Standaard is deze groen
   maar wanneer deze lager of gelijk is aan 3 krijgt wordt deze rood
   en tussen 4 en 6 oranje.
   */
    let scoreColor = 'green';
    if (score <= 3) {
      scoreColor = 'red';
    } else if (score <= 6) {
      scoreColor = 'orange';
    }
    console.log(`${question.color} !important`,);


    return (

      <li className={`item-${index + 1} ${scoreColor}`}>
        <div className="field">
          <div className="info">
            <div className="header">
              <style>
                {`
                    body h2 span.manmanman-${index} {
                      background-color: ${question.color} !important;
                    }
                `}
              </style>
              <h2><span className={`manmanman-${index}`}>{question.category}</span></h2>
              <h1><span>{question.text}</span></h1>
              <span className={`rank ${scoreColor}`}><span>{index + 1}</span></span>
            </div>
            <div className="textfield">
              <p>
                Op basis van jouw antwoorden blijkt dat de trigger <span>'{question.text}'</span>  mogelijk klachten kan veroorzaken in jouw dagelijks leven. Maar {question.fact3}

              </p>
            </div>
            <Link to="/stressinfo">
              <button className="button_trigger" type="button" onClick={this.scrollToTop}>
                Lees meer ❯
              </button>
            </Link>
          </div>
        </div>

      </li>
    );
  }
}

export default ResultListItem;
