import React from 'react';
import Slider from '../components/fields/slider';

export default {
  stress: {
    url: '/dagboek/ontspanning',
    finishedUrl: '/dagboek/voeding',
    coach: {
      text: 'Coach tekst voor ontspanning',
      image: './images/coach_img_stress.png',
    },
    steps: [
      {
        text: 'Stap 1',
        image: './images/diaryCategory/stress/step_1.png',
        field: <Slider />,
      },
      {
        text: 'Stap 2',
        image: './images/diaryCategory/stress/step_2.png',
        field: <Slider />,
      },
    ],
  },
  food: {
    coach: {
      text: 'Coach tekst voor voeding',
      image: './images/coach_img_food.png',
    },
    steps: [
      {
        text: 'Stap 1',
        image: './images/diaryCategory/food/step_1.png',
        field: <Slider />,
      },
    ],
  },
};