import React from 'react';
import Slider from '../components/fields/slider';
import Number from '../components/fields/number';
import Input from '../components/fields/input';
import Popup from '../components/popup'
import { Link } from 'react-router-dom';


export default {
  stress: {
    url: '/dagboek/ontspanning',
    category: 'Denken',
    coach: {
      nextUrl: '/dagboek/ontspanning/stress',
      text: 'Er worden nu enkele persoonlijke vragen gesteld over stress en ontspanning. Aan de hand van jouw antwoorden kan ik kijken of dit mogelijk invloed heeft op jouw klachten ',
      image: require('../components/diary/coach/coach-bril.png'),
      category: 'Ontspanning',
    },
    steps: {
      stress: {
        url: '/spanning/langdurige-stress',
        text: 'stress',
        textfield: 'Tijdens langdurige stress is onze  stofwisseling minder belangrijk en dus ook minder actief. Stofwisseling helpt om voedsel om te zetten in energie. Wanneer je moet vluchten of vechten gebruikt je lichaam de energie die op dat moment voorradig is. De stofwisseling vertraagt, of stopt zelfs helemaal. De gevolgen zijn een opgeblazen gevoel, een rommelende buik, of zelfs hevige krampen.',
        image: require('../images/diaryCategory/stress/stress.jpg'),
        question: 'Hoeveel stress heb jij vandaag ervaren?',
        fact1: 'Fruit bevordert de diversiteit van ons darmflora',
        fact2: 'Fruit werkt laxerend en helpt bij obsitpatie',
        fact3: 'In een periode van stress kunnen er met name klachten optreden rond de zwakke plekken van het lichaam. Vanzelfsprekend kan bij het prikkelbare darm syndroom de darm als zwakke plek gezien worden. Met stress verergeren de klachten van PDS daarom vaak.',
        field: <Slider type="stress"/>,
        popup: 'Beweeg de slider heen en weer.',
        popImage: require('../images/diaryCategory/slider.gif'),
        nextUrl: '/dagboek/ontspanning/angst',
        category: 'Ontspanning',
      },
      angst: {
        url: '/spanning/angst',
        text: 'Ontspanning',
        textfield: 'Bij een gezond dagpatroon hoort ook de nodige mate van evenveel inspanning en ontspanning is dus belangrijk. Hoe zit het met jouw balans? Neem jij genoeg rust tussen alle bezigheden door? Verstandig! Doe je te veel of kom je niet genoeg aan activiteiten toe? Dat kan natuurlijk altijd. Dan kan het gebrek aan inspanning en ontspanning een belangrijke prikkel zijn van jouw klachten.',
        image: require('../images/diaryCategory/stress/relax.jpg'),
        question: 'Hoe ontspannen voelde jij je vandaag?',
        type: 'angst',
        field: <Slider type="angst"/>,
        popup: 'Beweeg de slider heen en weer.',
        popImage: require('../images/diaryCategory/slider.gif'),
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
        fact1: 'Fruit bevordert de diversiteit van ons darmflora',
        fact2: 'Fruit werkt laxerend en helpt bij obsitpatie',
        fact3: 'Wist je dat PDS-patiënten fruit vaak beter verdragen als ze het op een lege maag eten? Er is dan minder gisting/gasvorming in je maag & darmen en het verteert ook beter',
        textfield: 'Verorber jij regelmatig fruit? Slim! Zo sleep je bergen nuttige voedingsstoffen aan voor je lijf. Fruit is goed voor je gezondheid en drukt het risico op diverse chronische ziekten waaronder PDS. Fruit bevat veel gefermenteerde vezels. Dit zijn vezels die in de darm worden afgebroken. De stoffen die vervolgens vrijkomen houden de ontlasting soepel. Vezelrijke voeding is belangrijk voor een gezonde spijsvertering en goede stoelgang. ',
        help: 'De richtlijn is om gemiddeld 2 stuks fruit per dag te eten. Vind je dit lastig? probeer dan is om wat fruit bij je yoghurt te namen of als smoothie',
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
        popup: 'Klik op de plus-of minbutton om het aantal te wijzigen.',
        popImage: require('../images/diaryCategory/number.gif'),
        category: 'voeding',
        nextUrl: '/dagboek/voeding/koolzuur',
      },
      koolzuur: {
        url: '/voeding/koolzuur',
        text: 'Koolzuur',
        textfield: 'Producten met koolzuur (bubbeltjes) zoals frisdranken en bier kunnen wel zorgen voor extra lucht en kans op kramp en pijn in de darmen. Daarnaast bevatten veel koolzuurhoudende dranken een hoop suikers. Suiker en kunstmatige zoetstoffen kunnen darmklachten verergeren. Vooral gasvorming en buikpijn kunnen erger worden door suiker en kunstmatige zoetstoffen.',
        image: require('../images/diaryCategory/food/soda.jpg'),
        fact1: 'Fruit bevordert de diversiteit van ons darmflora',
        fact2: 'Fruit werkt laxerend en helpt bij obsitpatie',
        fact3: 'Wist je dat PDS-patiënten fruit vaak beter verdragen als ze het op een leg',
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
        popup: 'Klik op de plus-of minbutton om het aantal te wijzigen.',
        popImage: require('../images/diaryCategory/number.gif'),
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
        textfield: 'Regelmatig sporten brengt je darmen in beweging.Sporten zorgt voor een betere darmwerking in het algemeen: dankzij een betere bloeddoorstroming kan de dikke darm meer efficiënt werken. En natuurlijk is sporten ook voor de rest van je gezondheid aan te bevelen.',
        image: '"../images/diaryCategory/stress/step_1.jpg',
        question: 'Hoeveel minuten heb jij vandaag gesport?',
        field: (
          <Input
            type="sport"
            calculateScore={value => {
              const score = value / 60 * 10;
              if (score < 1) {
                return 1;
              } else if (score > 4) {
                return 10;
              }
              return score;
            }}
          />
        ),
        category: 'beweging',
        popup: 'Klik in het inputfield en type het juiste getal.',
        popImage: require('../images/diaryCategory/input.gif'),
        nextUrl: '/dagboek/beweging/huishoudelijke_taken'
      },
      huishoudelijke_taken: {
        url: '/beweging/huishoudelijke-taken',
        text: 'Bewegen',
        textfield: 'Natuurlijk heeft niet iedereen tijd om dagelijks uren te sporten, maar door kleine momenten in je dag in te bouwen waarop je een aantal oefeningen doet of gewoon jezelf te verplichten om kleine fysieke taken te doen tussendoor kan je je lichaam al veel fitter maken. Het zijn kleine dingen maar als je ze elke dag gedurende een langere periode doet dan betekenen ze wel een wereld van verschil voor de darmen.',
        image: './images/diaryCategory/stress/step_2.png',
        question: 'Hoeveel minuten heb jij vandaag bewogen?',
        field: (
          <Input
            type="huishoudelijke_taken"
            calculateScore={value => {
              const score = value / 60 * 10;
              if (score < 1) {
                return 1;
              } else if (score > 4) {
                return 10;
              }
              return score;
            }}
          />
        ),
        category: 'beweging',
        popup: 'Klik in het inputfield en type het juiste getal.',
        popImage: require('../images/diaryCategory/input.gif'),
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
      image: require('../components/diary/coach/coach_thumbsup.png'),
      category: 'Resultaten'
    },
  },
};