'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('QuestionnaireApp.services', []).
        factory('notify', function($window) {
            var msgs = [];
            return function(msg) {
                msgs.push(msg);
                if (msgs.length == 3) {
                    $window.alert(msgs.join("\n"));
                    msgs = [];
                }
            };
        }).factory('countryCodes', function($http) {
    var urlInfo = 'http://api.geonames.org/countryInfoJSON?formatted=true&lat=47.03&lng=10.2&username=test2&style=full&callback=JSON_CALLBACK';
    var out = {};
    $http.jsonp(urlInfo).then(function(response) {

        var data = response.data;
//            console.log(data);
        if (data.status) {
            console.log("Error: " + data.status.message);
        } else {
            if (data.geonames.length === 0) {
                console.log("No data found");
            } else {
//                    console.log(data.geonames[0].countryCode);
//                    out=data.geonames[0].countryCode;
//                    out["result"] = data.geonames[0].countryCode;
            }
        }
    },
            function(data, status) {
                console.log("HTTP Error - " + status);
            }
    );
    return {
        result: out
    }
});
