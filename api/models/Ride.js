/**
* Ride.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    rideName:{
      type:'string'
      // required: true
    },
    start: {
      type: 'string'
      // required: true
    },
    stop: {
      type: 'string'
      // required: true
    },
    maxRiders: {
      type: 'integer'
      // required: true
    },
    currentRiders:{
      type:'integer',
      defaultsTo:0
    },
    carMake: {
      type: 'string'
      // required: true
    },
    carModel: {
      type: 'string'
      // required: true
    },
    carColor: {
      type: 'string'
      // required: true
    },
    geoStart: {
        type: 'json'
    },
    geoEnd: {
      type: 'json'
    },

    // Associations
    owner: {
      model: 'User'
    }
  }
};

