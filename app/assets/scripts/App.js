function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	// this changes how when and where the function is called
	this.greet = function() {
		console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
	}
}

// create new object using the Person object
var john = new Person("John Doe", "blue");
john.greet();
var jane = new Person("Jane Smith", "green");
jane.greet();


// var john = {
// 	name: "John Doe",
// 	favoriteColor: "blue",
// 	greet: function() {
// 		console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + ".");
// 	}
// }

// john.greet();