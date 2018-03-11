var $ = require('jquery');
var Person = require('./modules/Person');

// create new object using the Person object
var john = new Person("John Doe", "blue");
john.greet();
var jane = new Person("Jane Smith", "green");
jane.greet();

// $("h1").remove();


// var john = {
// 	name: "John Doe",
// 	favoriteColor: "blue",
// 	greet: function() {
// 		console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + ".");
// 	}
// }

// john.greet();