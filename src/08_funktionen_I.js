
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionaufruf | Call
//test ();

//Funktionrumpf | callee
//Funktiondeklaration

/*function test ()

{

    console.log ("Hallo , Simonas! ");

}
*/

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN
    // call

/*
    
    ausgabeName();
    // Funktionalität
function ausgabeName() 
{
    // interne Variable | What happens in VEGAS stays in VEGAS :)
    let firstname="Simonas";

    console.log("Hallo ," + firstname +"! ")
    
}

// console.log(firstname);  //Fehler  What happens in VEGAS stays in VEGAS :)

*/

function ausgabeNamen() {
    let firstName = "Yasin";
    console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // Fehler: Scope

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

//ausgabeNamen2();
//ausgabeNamen2("Yasin"); // Argument --> Daten für Parameter
//ausgabeNamen2("Tarik");
//ausgabeNamen2("Sandra");
//
//function ausgabeNamen2(firstName) { // Parameter
  //  console.log("Hallo, " + firstName + "!");
//};

// function ausgabeNamen3(firstName, familyName) {  // Parameter
//     console.log("Hallo, " + firstName + " " + familyName + "!");
// }
//ausgabeNamen3();
/*ausgabeNamen3("Max", "Mütze");

function ausgabeNamen3(firstName, familyName) {
    console.log("Hallo, " + firstName + " " + familyName + "!");
}
*/
/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

//ausgabeNamen3();

ausgabeNamen3("Max", "Mütze");

// Argumente werden von prompt() geliefert --> Input
const prompt = require('prompt-sync')({sigint: true});
ausgabeNamen3(prompt("Vorname: "),prompt("Name: "));

function ausgabeNamen3(firstName, familyName) { // Parameter
    console.log("Hallo, " + firstName + " " + familyName + "!");
}