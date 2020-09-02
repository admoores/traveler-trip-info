"use strict";

import airlinesService from "api/airlines.service.js";
import profilesService from "api/profiles.service.js";
import tripsService from "api/trip.service.js";

function getTravelersFlightInfo() {
  function airlinesToObj(airlinesList) {
    const retObj = {};

    airlinesList.forEach((airline) => {
      retObj[airline.code] = airline;
    });

    return retObj;
  }

  async function createOutput() {
    const airlines = airlinesToObj(await airlinesService.get());
    const listOfTravelers = await profilesService.get();
    const tripObj = await tripsService.get();

    return listOfTravelers.map((traveler) => {
      const travelerFlights = tripObj.trip.flights.filter((t) => {
        return t.travelerIds.includes(traveler.personId);
      });

      const flightsList = travelerFlights.map((flight) => {
        return flight.legs.map((leg) => {
          return {
            airlineCode: leg.airlineCode,
            airlineName: airlines[leg.airlineCode],
            flightNumber: leg.flightNumber,
            frequentFlyerNumber:
              traveler.rewardPrograms.air[leg.airlineCode] || ""
          };
        });
      });

      return {
        id: traveler.id,
        name: traveler.name,
        flights: flightsList
      };
    });
  }

  return createOutput();
}

module.exports = getTravelersFlightInfo;
