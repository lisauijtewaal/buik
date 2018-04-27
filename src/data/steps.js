import React from 'react';
import Slider from '../components/fields/slider';

export default {
  stress: {
    url: '/dagboek/ontspanning',
    finishedUrl: '/dagboek/voeding',
    category: 'Ontspanning',
    coach: {
      text: 'Coach tekst voor ontspanning',
      image: 'images/coach_img_stress.png',
    },
    steps: [
      {
        text: 'Langdurige stress',
        textfield: 'Langdurig veel stress kan voor veel problemen zorgen en aandoeningen zelfs veroorzaken. Wat betreft een prikkelbare darm syndroom heeft stress direct invloed op je spijsvertering en verklaart de extra klachten tijdens stress.',
        image: '"../images/diaryCategory/stress/step_1.jpg',
        question: 'Hoeveel stress heb jij vandaag ervaart?',
        field: <Slider />,
      },
      {
        text: 'kortudrige stress',
        textfield: 'Langdurig veel stress kan voor veel problemen zorgen en aandoeningen zelfs veroorzaken. Wat betreft een prikkelbare darm syndroom heeft stress direct invloed op je spijsvertering en verklaart de extra klachten tijdens stress.',
        image: './images/diaryCategory/stress/step_2.png',
        question: 'Hoeveel stress heb jij vandaag ervaart?',
        field: <Slider />,
      },
    ],
  },
  food: {

    url: '/dagboek/voeding',
    finishedUrl: '/dagboek/beweging',
    category: 'voeding',
    coach: {
      text: 'Coach tekst voor voeding',
      image: 'images/coach_img_stress.png',
    },
    steps: [
      {
        text: 'Fruit',
        textfield: 'Fruit is slecht voor je',
        image: '"../images/diaryCategory/stress/step_1.jpg',
        question: 'Hoeveel fruit heb jij vandaag gegeten?',
        field: <Slider />,
      },
      {
        text: 'Koolzuur',
        textfield: 'koolzuur is niet best',
        image: './images/diaryCategory/stress/step_2.png',
        question: 'Hoeveel glazen koolzuurhoudende drank heb jij vandaag op?',
        field: <Slider />,
      },
    ],
  },
};