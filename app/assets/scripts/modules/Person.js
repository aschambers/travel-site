class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}
	// this changes how when and where the function is called
	greet() {
		console.log("Hi, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
	}
}
// export object should be the Person object so it can be used by other files using require
// module.exports = Person;
export default Person;