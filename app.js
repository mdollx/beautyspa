angular.module('scheduleApp', ['firebase'])

.controller('mainController', function($scope, $firebase) {
  
  
 var ref = new Firebase("https://blazing-inferno-1033.firebaseio.com/days");  
  var fb = $firebase(ref);

  // sync as object 
  var syncObject = fb.$asObject();

  // three way data binding
  syncObject.$bindTo($scope, 'days');
  
    // function to set the default data
  $scope.reset = function() {    

    fb.$set({
      01: {
        name: 'Mon',
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
          }
        }
      },
      02: {
        name: 'Tue',
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
           }
        }
      },
      03: {
        name: 'Wed',
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
          }
        }
      },
      04: {
        name: 'Thurs',
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
          }
        }
      },
      05: {
       name: 'Fri',
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
          }
        }
      
}
    });    

  };
  
});

