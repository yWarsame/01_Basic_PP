let date = new Date();
console.log("Datum: " + date);
let year = date.getFullYear();
console.log("Jahr: " + year);
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;


let year = new Date().getFullYear();
console.log("Jahr: " + year);
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Deklaration | Tests | Aussagenlogik

let isJohnOlder = (ageJohn > ageMark); // Test auf Ungleichheit
let isJohnEqual = (ageJohn == ageMark) // Test auf Gleichheit
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
