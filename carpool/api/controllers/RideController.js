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
      carMake: req.body.carMake,
      carModel: req.body.carModel,
      carColor: req.body.carColor,
      owner: req.session.user
    };

    Ride.create(rideData).exec(function(err,ride){
      if(err) res.send(400,err);
      rideData.owner=req.session.user;
      res.send(ride);
    });
  }

};

