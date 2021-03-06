angular.module('scheduleApp', ['firebase'])

.controller('mainController', function($scope, $firebase) {
  
  
var ref = new Firebase("https://blazing-inferno-1033.firebaseio.com/days");  
var fb = $firebase(ref);
var syncObject = fb.$asObject();

 syncObject.$bindTo($scope, 'days');
  
   $scope.reset = function() {    

    fb.$set({
      01: {
        name: 'Times',
        slots: {
          "900": {
            time: '9:00am',
            booked: false
          },
          "1000": {
            time: '10:00am',
            booked: false
          },
          "1100": {
            time: '11:00am',
            booked: false
          },
          "1200": {
            time: '12:00pm',
            booked: false
          },
          "1300": {
            time: '1:00pm',
            booked: false
          },
          "1400": {
            time: '2:00pm',
            booked: false
          },
          "1500": {
            time: '3:00pm',
            booked: false
          },
         "1600": {
            time: '4:00pm',
            booked: false
          },
          "1700": {
            time: '5:00pm',
            booked: false
        
          }
      }
    }

    });    

  };
  
});

