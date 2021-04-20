var root = new Vue({
    el: '#header-vue',
     data: {
     //Struttura dati per link nav
     linksNav: [
     'Home',
     'About Us',
     'Facilities',
     'Membership',
     'Testimonials',
     'Blog'
     ],
   
    
    
        },
     
    
    });


    var root = new Vue({
      el: '#footer-vue',
       data: {
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

       openingHours: [
          {
            range: 'Monday-Friday',
            schedule: '9:00 - 21:00'
          },
          {
            range: 'Saturday-Sunday',
            schedule: '9:00 - 19:00'
          },
       ]
     
      
      
          },
       
      
      });