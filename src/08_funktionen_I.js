
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

//ausgabeNamen3("Max", "Mütze");

// Argumente werden von prompt() geliefert --> Input
//const prompt = require('prompt-sync')({sigint: true});
//ausgabeNamen3(prompt("Vorname: "),prompt("Name: "));
/*
function ausgabeNamen3(firstName, familyName) { // Parameter
    console.log("Hallo, " + firstName + " " + familyName + "!");
}
*/
/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Verantwortlichkeiten
// Postulat: one fnction = one job (uncle Bob)
// SRP single responsibility principle
//ausgabeNamenSRP("Max", "Mütze");
/*
function ausgabeNamenSRP(firstName, familyName) { // Parameter
     //1st responsibility: string composing
     const GAP = " ";
     let outputStr = "Hallo, " + firstName + " " + familyName + "!" ;
    //2nd responsibility: string output
    console.log(outputStr);
}
*/

/***** Funktionen 03b *****/
// 03b Verantwortlichkeiten in getrennte Funktionen auslagern
//1st responsibility: string composing
/*output(getString("Max, Mütze"));
function getString(firstName, familyName ) {

    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!";
    return outputStr;  //FKT.- OUTPUT sendet Daten zum call

}

// 2nd responsibility: string output
// output("hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);

}

*/
output(getString("Max", "Mütze"));  
function getString(firstName, familyName) {
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!";
    output ("test !");
    return outputStr; // Fkt.- OUTPUT sendet Daten zum call.
    output ("hi"); // Abbruch nach return
}

function output(outputData) {
    console.log(outputData);
}