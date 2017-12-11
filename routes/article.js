var express = require('express');
var router = express.Router();
var jade = require('jade');
var fs = require('fs');

/* GET */
router.get('/', function(req, res, next) {
	console.log("publisher js article: " + req.query.article);

	var folder = './views/partials/articles/';
	var file = req.query.article


	fs.readFile(folder + file + '.jade', 'utf8', function (err,data) {
		if(err) {
			return console.log(err);
		}
		
		var fn = jade.compile(data);
		var html = fn();

		res.render('article', 
  			{ 
  				title: 'Creative Europe Desk Denmark',
  				article: html
  			}
  	
  		);

	});
});

module.exports = router;