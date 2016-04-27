var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/btb';

var db;
//Create a connection to mongo
MongoClient.connect(mongoUrl, function(error, database){
	db = database;
});

router.get('/search', function(req, res, next) {
	db.collection('students').find().toArray(function(error, studentResult){
		res.json(studentResult);
	});
});


router.post('/search', function(req, res, next) {
	console.log('Someone hit the server!!');
	//We get name from teh post request (in this case, from Angular)
	var individualStudent = req.body.name;
	db.collection('students').find({name: individualStudent}).toArray(function(error, studentResult){
		if(studentResult.length == 0){
			db.collection('students').insertOne({
				name: individualStudent
			})
			res.json("Sorry, there were no results. We have added " + individualStudent + " to the databtase");
		}else{
			res.json(studentResult[0].name + ' student');
		}
	});



	// var dcClass = [
	// 	'Tristan',
	// 	'Josh',
	// 	'Bogdan',
	// 	'Keith',
	// 	'Will',
	// 	'Curtis',
	// 	'Joe',
	// 	'Kochan',
	// 	'Patrick',
	// 	'Jonathan',
	// 	'Jeremy'
	// ];

	// if(dcClass.indexOf(name) > -1){
	// 	res.json({message: "Hello, " + name + ", you are a student in this class."});
	// }else{
	// 	res.json({message: "You are not in this class."});
	// }

});


module.exports = router;
