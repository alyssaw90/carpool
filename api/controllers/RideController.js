/**
 * RideController
 *
 * @description :: Server-side logic for managing rides
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  create:function(req,res){
    var rideData = {
      rideName: req.body.rideName,
      start: req.body.start,
      stop: req.body.stop,
      maxRiders: req.body.maxRiders,
      currentRiders: req.body.currentRiders,
      carMake: req.body.carMake,
      carModel: req.body.carModel,
      carColor: req.body.carColor,
      geoStart: req.body.geoStart,
      geoEnd: req.body.geoEnd,
      time: req.body.time,
      owner: req.session.user
    };

    Ride.create(rideData).exec(function(err,ride){
      if(err) res.send(400,err);
      rideData.owner=req.session.user;
      res.send(ride);
    });
  }

};

