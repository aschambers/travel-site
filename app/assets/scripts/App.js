var $ = require('jquery');
// var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes.");
	}
}

// alert('This is a test for webpack automation');

// create new object using the Person object
var john = new Person("John Doe", "blue");
john.greet();
var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

// $("h1").remove();


// var john = {
// 	name: "John Doe",
// 	favoriteColor: "blue",
// 	greet: function() {
// 		console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + ".");
// 	}
// }

// john.greet();