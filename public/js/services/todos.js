angular.module('flightService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Flight', ['$http', '$q', function ($http, $q) {
        function getFlightData() {
            var respond = $q.defer();

            $http.get("flight-data.json").then(function (res) {
               // console.log("response", res);
                respond.resolve(res);

            }), function (error) {
                console.log("error", error);
                respond.reject(error);
            }

            return respond.promise;

        };
        return {
            getFlightData: getFlightData
        }

    }
    ]);
