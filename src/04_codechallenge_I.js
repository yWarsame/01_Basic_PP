
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});
const num1 = +prompt("tippen sie die erst Zahl ein: "); // + konvertiert zu Number
const num2 = +prompt("nun tippen sie die zweite Zahl ein: ");
const sum = num1 + num2;

console.log(`Die Summe der Zahlen ist: ${sum}`);