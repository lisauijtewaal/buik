import React from 'react';
import Slider from '../components/fields/slider';
import Number from '../components/fields/number';
import Input from '../components/fields/input';

/*
All the data for the different triggers in the app
 */


export default {
  stress: {
    url: '/dagboek/ontspanning',
    pages: '/2',
    category: 'Denken',
    coach: {
      nextUrl: '/dagboek/ontspanning/stress',
      text: 'Er worden nu enkele persoonlijke vragen gesteld over stress en ontspanning. Aan de hand van jouw antwoorden kan ik kijken of dit mogelijk invloed heeft op jouw klachten ',
      image: require('../components/diary/coach/coachrelax.png'),
      category: 'Ontspanning',
    },
    steps: {
      stress: {
        color: '#ffc65c',
        url: '/spanning/langdurige-stress',
        text: 'Stress',
        textfield: 'Tijdens langdurige stress is onze  stofwisseling minder belangrijk en dus ook minder actief. Stofwisseling helpt om voedsel om te zetten in energie. Wanneer je moet vluchten of vechten gebruikt je lichaam de energie die op dat moment voorradig is. De stofwisseling vertraagt, of stopt zelfs helemaal. De gevolgen zijn een opgeblazen gevoel, een rommelende buik, of zelfs hevige krampen.',
        image: require('../images/diaryCategory/stress/stress.jpg'),
        question: 'Hoeveel stress heb jij vandaag ervaren?',
        fact1: 'Fruit bevordert de diversiteit van ons darmflora',
        fact2: 'Fruit werkt laxerend en helpt bij obsitpatie',
        fact3: 'In een periode van stress kunnen er met name klachten optreden rond de zwakke plekken van het lichaam. Vanzelfsprekend kan bij het prikkelbare darm syndroom de darm als zwakke plek gezien worden. Met stress verergeren de klachten van PDS daarom vaak.',
        field: <Slider key="stress" type="stress"/>,
        popup: 'Beweeg de slider heen en weer.',
        step: '1',
        popImage: require('../images/diaryCategory/slider.gif'),
        nextUrl: '/dagboek/ontspanning/angst',
        category: 'Ontspanning',
      },
      angst: {
        color: '#ffc65c',
        url: '/spanning/angst',
        text: 'Tijd voor jezelf',
        textfield: 'Bij een gezond dagpatroon hoort ook de nodige mate van evenveel inspanning en ontspanning is dus belangrijk. Hoe zit het met jouw balans? Neem jij genoeg rust tussen alle bezigheden door? Verstandig! Doe je te veel of kom je niet genoeg aan activiteiten toe? Dat kan natuurlijk altijd. Dan kan het gebrek aan inspanning en ontspanning een belangrijke prikkel zijn van jouw klachten.',
        image: require('../images/diaryCategory/stress/relax.jpg'),
        question: 'Hoe ontspannen voelde jij je vandaag?',
        type: 'angst',
        field: <Slider key="angst" type="angst"/>,
        step: '2',
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
    pages: '/2',
    coach: {
      nextUrl: '/dagboek/voeding/fruit',
      text: 'We beginnen nu aan het hoofdstuk voeding. Verschillende voedingsmiddelen kunnen effecten hebben op de darmen. In dit hoofdstuk stel ik vragen over deze voedingsmiddelen. ',
      image: require('../components/diary/coach/coachfruit.png'),
      category: 'Voeding',

    },
    steps: {
      fruit: {
        url: '/voeding/fruit',
        color: '#c2bc3b',
        text: 'Peulvruchten',
        fact1: 'Fruit bevordert de diversiteit van ons darmflora',
        fact2: 'Fruit werkt laxerend en helpt bij obsitpatie',
        fact3: 'Wist je dat gedroogde of rauwe peulvruchten voor darmklachten kunnen zorgen, maar dat je deze onschadelijk door de peulvruchten te weken en ze minimaal 10 minuten te koken. ',
        textfield: 'Peulvruchten zijn zaden of zaden met hun omhulsel (bijv linzen, bruine bonen, witte bonen en kapucijners.  De boon in de peul is in feite het ‘kind’ en de vorm van voortplanting van een plant. Om zichzelf weerbaar te maken, produceren planten verscheidene ‘gifstoffen’ als lectine, fytinezuur en saponinen. \n' +
        '\n' +
        'deze kunnen de werking van de darmen ontregelen en uiteindelijk de nieren beschadigen. ',
        help: 'De richtlijn is om gemiddeld 2 stuks fruit per dag te eten. Vind je dit lastig? probeer dan is om wat fruit bij je yoghurt te namen of als smoothie',
        image: require('../images/diaryCategory/food/bonen.jpg'),
        question: 'Hoeveel gram rauwe peulvruchten heb jij vandaag gegeten?',
        link: '/voeding/fruit',
        field: (
          <Input
            key="fruit"
            type="fruit"
            label="gram"
            calculateScore={value => {
              const score = value / 20 *10;
              if (score < 2.5) {
                return 1;
              } else if(score> 2.5) {
                return 10;
              }
              return score;
            }}
          />
        ),
        popup: 'Klik in het inputfield en type het juiste getal',
        step: '1',
        popImage: require('../images/diaryCategory/input.gif'),
        category: 'voeding',
        nextUrl: '/dagboek/voeding/koolzuur',
      },
      koolzuur: {
        url: '/voeding/koolzuur',
        color: '#c2bc3b',
        text: 'Koolzuur',
        textfield: 'Producten met koolzuur (bubbeltjes) zoals frisdranken en bier kunnen wel zorgen voor extra lucht en kans op kramp en pijn in de darmen. Daarnaast bevatten veel koolzuurhoudende dranken een hoop suikers. Suiker en kunstmatige zoetstoffen kunnen darmklachten verergeren. Vooral gasvorming en buikpijn kunnen erger worden door suiker en kunstmatige zoetstoffen.',
        image: require('../images/diaryCategory/food/soda.jpg'),
        fact1: 'Fruit bevordert de diversiteit van ons darmflora',
        fact2: 'Fruit werkt laxerend en helpt bij obsitpatie',
        fact3: 'wist je dat PDS-patiënten fruit vaak beter verdragen als ze het op een leg',
        question: 'Hoeveel glazen koolzuurhoudende drank heb jij vandaag op?',
        field: (
          <Number
            key="koolzuur"
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
        step: '2',
        popImage: require('../images/diaryCategory/number.gif'),
        category: 'voeding',
        nextUrl: '/dagboek/beweging',
      },
    },
  },
  movement: {
    url: '/dagboek/beweging',
    category: 'beweging',
    pages: '/2',
    coach: {
      nextUrl: '/dagboek/beweging/sport',
      text: 'Het is natuurlijk allang bekend dat bewegen goed voor je is. Maar ook de darmen komen in beweging wanneer jij beweegt. ',
      image: require('../components/diary/coach/coachsport.png'),
      category: 'Beweging',
    },
    steps: {
      sport: {
        url: '/beweging/sport',
        color: '#92a6cb',
        text: 'Sport',
        textfield: 'Regelmatig sporten brengt je darmen in beweging. Sporten zorgt voor een betere darmwerking in het algemeen: dankzij een betere bloeddoorstroming kan de dikke darm  efficiënter werken. En natuurlijk is sporten ook voor de rest van je gezondheid aan te bevelen.',
        image: require('../images/diaryCategory/movement/sport.jpeg'),
        question: 'Hoeveel minuten heb jij vandaag gesport?',
        field: (
          <Input
            key="sport"
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
        step: '1',
        popImage: require('../images/diaryCategory/input.gif'),
        nextUrl: '/dagboek/beweging/huishoudelijke_taken'
      },
      huishoudelijke_taken: {
        color: '#92a6cb',
        url: '/beweging/huishoudelijke-taken',
        text: 'Dagelijkse beweging',
        textfield: 'Natuurlijk heeft niet iedereen tijd om dagelijks uren te sporten, maar door kleine momenten in je dag in te bouwen waarop je een aantal oefeningen doet of gewoon jezelf te verplichten om kleine fysieke taken te doen tussendoor kan je je lichaam al veel fitter maken. Het zijn kleine dingen maar als je ze elke dag gedurende een langere periode doet dan betekenen ze wel een wereld van verschil voor de darmen.',
        image: require('../images/diaryCategory/movement/dagelijks.jpeg'),
        question: 'Hoeveel minuten heb jij vandaag bewogen?',
        field: (
          <Input
            key="huishoudelijke_taken"
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
        step: '2',
        nextUrl: '/dagboek/resultaten',
      },
    },
  },
  results: {
    url: '/dagboek/resultaten',
    category: 'resultaten',
    coach: {
      nextUrl: '/dagboek/resultaten/top-3',
      text: 'Heel goed! Je hebt alle vragen beantwoord. Ik heb nu een goed beeld van jouw levensstijl en geef je graag advies. Klik op de volgende pagina om te zien wat oorzaken kunnen zijn van jouw klachten.',
      image: require('../components/diary/coach/coachfinish.png'),
      category: 'Resultaten'
    },
  },
};