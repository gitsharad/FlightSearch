angular.module('flightController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope', '$http', "Flight", function ($scope, $http, Flight) {
  
	        var _this = this;
			    _this.labelArray = {
					    "Pune":"PNQ",
						"Delhi":"DEL",
						"Banglore":"BAG",
						"Chandigarh":"CHG"
				}
	
        Flight.getFlightData().then(
		function(values){
		   _this.flights = values.data.flightData;
			//console.log("values",values.data.flightData[0]);
		   _this.origin = values.data.flightData[0].origin;
		   _this.destination = values.data.flightData[0].destination;
		});

		$scope.searchFlight = function (user) {
			var availableFlights = [];
			_.each( _this.flights, function (f) {
				var orig = f.origin.toUpperCase();
				var dest = f.destination.toUpperCase();
				// console.log("dd",user.originCity.toUpperCase() ,orig, user.destinationCity.toUpperCase() ,dest);
				if ((user.originCity.toUpperCase() == orig) && (user.destinationCity.toUpperCase() == dest)) {
					_.each(f.flights, function (fl) {
						console.log("dddemo",user.depdate ,fl.departure_date, user.retdate ,fl.return_date);
						
						if ((user.depdate == fl.departure_date) && (user.retdate == fl.return_date)) {
							availableFlights.push(fl);
						}
					})
				}
			})
			console.log("data", _this.flights);
			_this.flights = [{"flights":availableFlights}];
			console.log("data2", _this.flights);
		}


	}]);