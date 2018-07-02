angular.module('flightController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope', '$http', "Flight", function ($scope, $http, Flight) {
  
			var _this = this;
			_this.showHide = true;
			    _this.labelArray = {
					    "Pune":"PNQ",
						"Delhi":"DEL",
						"Banglore":"BAG",
						"Chandigarh":"CHG"
				}
		   _this.returnbtn = true;
		   _this.waybtnDSB = function(){
			  _this.waybtn = true;
			  _this.returnbtn = false;
		   }
		   _this.returnbtnDSB = function(){
			_this.returnbtn = true;
			_this.waybtn = false;
		 }
	
        Flight.getFlightData().then(
		function(values){
		   _this.flights = values.data.flightData;
		   _this.origin = values.data.flightData[0].origin;
		   _this.destination = values.data.flightData[0].destination;
		});

		$scope.searchFlight = function (user) {
			var availableFlights = [];
			_.each( _this.flights, function (f) {
				_this.origin = f.origin.toUpperCase();
				_this.destination  = f.destination.toUpperCase();
				// console.log("dd",user.originCity.toUpperCase() ,orig, user.destinationCity.toUpperCase() ,dest);
				if ((user.originCity.toUpperCase() == _this.origin) && (user.destinationCity.toUpperCase() == _this.destination)) {
					_.each(f.flights, function (fl) {
					  if ((user.depdate == fl.departure_date) && (user.retdate == fl.return_date)) {
							availableFlights.push(fl);
						}
					  })
			}
			})

			if(!availableFlights.length){
				_this.origin = "";
				_this.destination  = "";
				_this.showHide = false;
				
			}
			_this.flights = [{"flights":availableFlights}];
			// console.log("data2", _this.flights);
		}


	}]);