'use strict';

// TODO Import what you need

function getTravelersFlightInfo() {

  // TODO Replace this hard coded response with your code

  return {
    travelers: [
      {
        id: 1,
        name: 'Neo',
        flights: [
          {
            legs: [
              {
                airlineCode: 'AA',
                airlineName: 'American',
                flightNumber: 'AA456',
                frequentFlyerNumber: ''
              }
            ]
          },
          {
            legs: [
              {
                airlineCode: 'VA',
                airlineName: 'Virgin',
                flightNumber: 'VA789',
                frequentFlyerNumber: 'NVA123'
              },
              {
                airlineCode: 'AK',
                airlineName: 'Alaskan',
                flightNumber: 'AK789',
                frequentFlyerNumber: 'NAK123'
              }
            ]
          }
        ]
      }
    ]
  };
}

module.exports = getTravelersFlightInfo;
