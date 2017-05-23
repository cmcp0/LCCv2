/**
 * ChampionsController
 *
 * @description :: Server-side logic for managing champions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	resImages : function (req, res) {
		var https = require('https');
        var responseData = '';
        var parsed = '';
        var obj = new Object();
        var champion = new Object();



        var options = {

            hostname: 'global.api.pvp.net',
            port: '443',
            path: '/api/lol/static-data/na/v1.2/champion?champData=image&api_key=',
            method: 'GET'

        };

        callback = function (response) {

            response.on('data', function (chunk) {
                responseData += chunk;
            })

            response.on('end', function ( ) {
							//console.log(responseData);
							parsed = JSON.parse(responseData);
							obj = parsed;

							var jsonString = JSON.stringify(obj);

							res.send(jsonString);
            });
        }

        https.request(options, callback).end();
	},

	resFull : function (req, res) {
		var https = require('https');
        var responseData = '';
        var parsed = '';
        var obj = new Object();
        var champion = new Object();
				var rId = '';

				inData = req.params.all();
				rId = inData.id;



        var options = {

            hostname: 'global.api.pvp.net',
            port: '443',
            path: '/api/lol/static-data/na/v1.2/champion/'+rId+'?champData=all&api_key=',
            method: 'GET'

        };

        callback = function (response) {

            response.on('data', function (chunk) {
                responseData += chunk;
            })

            response.on('end', function ( ) {
							//console.log(responseData);
							parsed = JSON.parse(responseData);
							obj = parsed;

							var jsonString = JSON.stringify(obj);

							res.send(jsonString);
            });
        }

        https.request(options, callback).end();
	},

};
