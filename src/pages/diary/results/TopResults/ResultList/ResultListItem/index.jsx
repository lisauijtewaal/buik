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


    return (

      <li className={`item-${index + 1} ${scoreColor}`}>
        <div className="colorband" style={{backgroundColor: scoreColor}}></div>
        <div className="field">
        <div className="number">
        <div className="header">
          <h1>{question.text}</h1>
          <h2>({question.category})</h2>
        </div>
        <div className="textfield">
        <p>
          Op basis van jouw antwoorden blijkt dat de trigger '{question.text}'  mogelijk klachten kan veroorzaken in jouw dagelijks leven. Maar {question.fact3}

        </p>

          <Link to={question.url}>
            <button className="hallo" type="button">
              Lees hoe je jouw klachten kan verminderen❯
            </button>
          </Link>
        </div>
        </div>
        </div>
      </li>
    );
  }
}

export default ResultListItem;
