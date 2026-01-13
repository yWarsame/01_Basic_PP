
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

const num1 = Number(prompt("Tippen Sie die erste Zahl ein: "));
const num2 = Number(prompt("Nun tippen Sie die zweite Zahl ein: "));
const sum = num1 + num2;

console.log("Datentype num1: " + typeof num1);
console.log("Datentype num2: " + typeof num2);
console.log(`Die Summe der Zahlen sind: ${sum}`);