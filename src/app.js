var root = new Vue({
    el: '#root',
     data: {
     //Dati Nav
     linksNav: [
      {
       sect: 'Home',
       dest: '#',
      },
      {
        sect: 'About Us',
        dest: '#',
       },
       {
        sect: 'Facilities',
        dest: '#',
       },
       {
        sect: 'Membership',
        dest: '#',
       },
       {
        sect: 'Testimonials',
        dest: '#',
       },
       {
        sect: 'Blog',
        dest: '#',
       },
     ],
     showMenu: false,
     //Dati Main
    //Trainers Section
     trainers: [
       {
         nome: 'Ann Baker',
         role: 'Personal Trainer',
         idImg: '1',
       },
       {
        nome: 'Anne Warren',
        role: 'Personal Trainer',
        idImg: '3',
      },
      {
        nome: 'Peter Rice',
        role: 'Personal Trainer',
        idImg: '4',
      },
     ],
     //Activities Section
    activities: [
      {
        icon:"fas fa-fire-alt",
        title:"Strength & Conditioning",
        divider:"img/divider-x-red.png"
      },
      {
        icon:"fas fa-bicycle",
        title:"Fitness & Cardio",
        divider:"img/divider-x-red.png"
      },
      {
        icon:"fab fa-skyatlas",
        title:"Flexibility & Rest",
        divider:"img/divider-x-red.png"
      },
      {
        icon:"fas fa-heartbeat",
        title:"Healt & Diet",
        divider:"img/divider-x-red.png"
      },
    ],
     //Facilities Section
     imagesFacilities: [
       'https://avada.theme-fusion.com/gym/wp-content/uploads/sites/9/2015/05/home-image1.jpg' ,
       'https://avada.theme-fusion.com/gym/wp-content/uploads/sites/9/2015/05/home-image2.jpg',
       'https://avada.theme-fusion.com/gym/wp-content/uploads/sites/9/2015/05/home-image3.jpg',
       'https://avada.theme-fusion.com/gym/wp-content/uploads/sites/9/2015/12/home-image4.jpg',
       'https://avada.theme-fusion.com/gym/wp-content/uploads/sites/9/2015/05/home-image54.jpg',
       'https://avada.theme-fusion.com/gym/wp-content/uploads/sites/9/2015/05/home-image6.jpg'
     ],
     //RealWorldResult Section
     realWorldResults: [
       {
         image: 'img/review_1-compressor.jpg',
         id: 'Tara Smith',
         review: ' “The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!” '
       },
       {
        image: 'img/review_3-compressor-2.jpg',
        id: 'Simon Chel',
        review: ' “The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment.” '
      },
      {
        image: 'img/review_2-compressor.jpg',
        id: 'Jen Wirth',
        review: ' “No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers.” '
      },
      {
        image: 'img/review_4-compressor-2.jpg',
        id: 'Jeff Glum',
        review: ' “The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.” '
      }
     ],
     
    //Dati Footer
       //Uso un oggetto come struttura dati per l'indirizzo/e-mail/telefono
       findUs: {
        Address: '12345 North Main Street',
        Telephone: '1.800.555.6789',
        Email: 'info@your-domain.com',
      },
      //Uso un array come struttura per le domande
      questions: [
       'Train with free weights or your body weight?',
       'Notitional advice that will keep you training'
      ],
     //Per gli orari uso un array di oggetti con diverse proprietà
      openingHours: [
         {
           type: 'Weekdays',
           range: 'Monday-Friday',
           schedule: '9:00 - 21:00'
         },
         {
           type: 'Weekends',
           range: 'Saturday-Sunday',
           schedule: '9:00 - 19:00'
         },
      ],
     //Per le Info copyright uso un array
     copyrightInfo: [
      '© Copyright 2012 - 2021 ',
      
      'Avada Theme by Theme Fusion ',
      
      'All Rights Reserved',
     
      'Powered by WordPress',
     ],
     //Per le icone social uso un array di oggetti con le proprietà che nel codice mostrerò con la direttiva v-bind
     socialIcons: [
      {
        fam: 'fab ',
        prefix: 'fa-',
        id: 'facebook-f',
        link:'https://it-it.facebook.com/',
        target: '_blank'
      },
      {
        fam: 'fab ',
        prefix: 'fa-',
        id: 'twitter',
        link:'https://twitter.com/?lang=it',
        target: '_blank'
      },
      {
        fam: 'fab ',
        prefix: 'fa-',
        id: 'instagram',
        link: 'https://www.instagram.com/',
        target: '_blank'
      },
    ]
    
   
    
    
        },
     
    
    });

