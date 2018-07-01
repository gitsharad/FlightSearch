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


	}]);