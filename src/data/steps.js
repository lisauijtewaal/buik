import React from 'react';
import Slider from '../components/fields/slider';
import Number from '../components/fields/number';
import Input from '../components/fields/input';
import { Link } from 'react-router-dom';


export default {
  stress: {
    url: '/dagboek/ontspanning',
    category: 'Ontspanning',
    coach: {
      nextUrl: '/dagboek/ontspanning/stress',
      text: 'Er worden nu enkele persoonlijke vragen gesteld over stress en ontspanning. Aan de hand van jouw antwoorden kan ik kijken of dit mogelijk invloed heeft op jouw klachten ',
      image: 'coach-bril.png',
      category: 'Ontspanning',
    },
    steps: {
      stress: {
        url: '/spanning/langdurige-stress',
        text: 'Langdurige stress',
        textfield: 'Langdurig veel stress kan voor veel problemen zorgen en aandoeningen zelfs veroorzaken. Wat betreft een prikkelbare darm syndroom heeft stress direct invloed op je spijsvertering en verklaart de extra klachten tijdens stress.',
        image: require('../images/diaryCategory/stress/step_1.jpg'),
        question: 'Hoeveel stress heb jij vandaag ervaren?',
        field: <Slider type="stress"/>,
        nextUrl: '/dagboek/ontspanning/angst',
        category: 'Ontspanning',
      },
      angst: {
        url: '/spanning/angst',
        text: 'angst',
        textfield: 'Langdurig veel stress kan voor veel problemen zorgen en aandoeningen zelfs veroorzaken. Wat betreft een prikkelbare darm syndroom heeft stress direct invloed op je spijsvertering en verklaart de extra klachten tijdens stress.',
        image: './images/diaryCategory/stress/step_2.png',
        question: 'Hoeveel angst heb jij vandaag ervaart?',
        type: 'angst',
        field: <Slider type="angst"/>,
        nextUrl: '/dagboek/voeding',
        category: 'Ontspanning',
      },
    },
  },
  food: {
    url: '/dagboek/voeding',
    category: 'voeding',
    coach: {
      nextUrl: '/dagboek/voeding/fruit',
      text: 'Coach tekst voor voeding',
      image: 'images/coach_img_stress.png',
      category: 'Voeding',

    },
    steps: {
      fruit: {
        url: '/voeding/fruit',
        text: 'Fruit',
        textfield: 'Verorber jij regelmatig fruit? Slim! Zo sleep je bergen nuttige voedingsstoffen aan voor je lijf. Fruit is goed voor je gezondheid en drukt het risico op diverse chronische ziekten waaronder PDS.',
        image: require('../images/diaryCategory/food/fruit.jpg'),
        question: 'Hoeveel stuks fruit heb jij vandaag gegeten?',
        link: '/voeding/fruit',
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
        category: 'voeding',
        nextUrl: '/dagboek/voeding/koolzuur',
      },
      koolzuur: {
        url: '/voeding/koolzuur',
        text: 'Koolzuur',
        textfield: 'koolzuur is niet best',
        image: require('../images/diaryCategory/food/soda.jpg'),

        question: 'Hoeveel glazen koolzuurhoudende drank heb jij vandaag op?',
        field: (
          <Number
            type="koolzuur"
            calculateScore={value => {
              if (value === 0) {
                return 10;
              } else if (value <= 2) {
                return 5;
              } else {
                return 1;
              }
            }}
          />
        ),
        category: 'voeding',
        nextUrl: '/dagboek/beweging',
      },
    },
  },
  movement: {
    url: '/dagboek/beweging',
    category: 'beweging',
    coach: {
      nextUrl: '/dagboek/beweging/sport',
      text: 'Het is natuurlijk allang bekend dat bewegen goed voor je is. Maar ook de darmen komen in beweging wanneer jij beweegt. ',
      image: 'images/coach_img_stress.png',
      category: 'Beweging',
    },
    steps: {
      sport: {
        url: '/beweging/sport',
        text: 'Sport',
        textfield: 'Regelmatig sporten brengt je darmen in beweging.',
        image: '"../images/diaryCategory/stress/step_1.jpg',
        question: 'Hoeveel minuten heb jij vandaag gesport?',
        field: (
          <Input
            type="sport"
            calculateScore={value => {
              const score = value / 60 * 10;
              if (score < 1) {
                return 1;
              } else if (score > 10) {
                return 10;
              }
              return score;
            }}
          />
        ),
        category: 'beweging',
        nextUrl: '/dagboek/beweging/huishoudelijke_taken'
      },
      huishoudelijke_taken: {
        url: '/beweging/huishoudelijke-taken',
        text: 'Huishoudelijk werk',
        textfield: 'Wist je dat je met huishoudelijk werk ook al een hoop beweegt? Zo gebruik je bijna al je spieren bij tuinieren of stofzuigen',
        image: './images/diaryCategory/stress/step_2.png',
        question: 'Hoeveel glazen koolzuurhoudende drank heb jij vandaag op?',
        field: (
          <Input
            type="sport"
            calculateScore={value => {
              const score = value / 60 * 10;
              if (score < 1) {
                return 1;
              } else if (score > 10) {
                return 10;
              }
              return score;
            }}
          />
        ),
        category: 'beweging',
        nextUrl: '/dagboek/resultaten',
      },
    },
  },
  results: {
    url: '/dagboek/resultaten',
    category: 'resultaten',
    coach: {
      nextUrl: '/dagboek/resultaten/top-3',
      text: 'Coach tekst voor resultaten',
      image: 'images/coach_img_stress.png',
      category: 'Resultaten'
    },
  },
};