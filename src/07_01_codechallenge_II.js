/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge (Fallunterscheidung)*/

// Notiz: AND OR NOT --> && || !

// Iteration I: if - else if - Struktur

// const prompt = require('prompt-sync')({sigint: true});
// let yourName, yourAge, yourDrink;

// yourName = prompt("Gib deinen Namen ein: ");
// yourAge = parseInt(prompt("Gib dein Alter ein: "));  
// // Typkonvertierung: parseInt = String in Integer umwandeln

// if (yourAge >= 0 && yourAge <= 5) {
//   yourDrink = "Milch";
// } else if (yourAge >= 6 && yourAge <= 12) {
//   yourDrink = "Saft";
// } else if (yourAge >= 13 && yourAge <= 17) {
//   yourDrink = "Cola";
// } else {
//   yourDrink = "Wein";
// }

// console.log(yourName + " trinkt " + yourDrink + ".");

// Iteration II: case | switch - Struktur
const prompt = require('prompt-sync')({sigint: true});
let yourName, yourAge, yourDrink;
//
yourName = prompt("Gib deinen Namen ein: ");
yourAge = parseInt(prompt("Gib dein Alter ein: "));  
