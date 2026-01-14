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

/* Getränke-Challenge */


/**const Namme = require("Namme:");
const age = parseInt(prompt("Alter:"));

switch(true) {
    case age >= 0 && age <= 5:  
        console.log(`${Namme} trinkt Milch.`); 
        break;
    case age >= 6 && age <= 12: 
        console.log(`${Namme} trinkt Saft.`); 
        break;
    case age >= 13 && age <= 17: 
        console.log(`${Namme} trinkt Cola.`); 
        break;
    case age >= 18: 
        console.log(`${Namme} trinkt Wein.`); 
        break;
    default: 
        console.log("Ungültiges Alter!");
}*/

function getraenkeWahl() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Name: ', (name) => {
    rl.question('Alter: ', (alter) => {
      const a = parseInt(alter);
      let getraenk;
      
      if (a >= 0 && a <= 5) getraenk = "Milch";
      else if (a >= 6 && a <= 12) getraenk = "Saft";
      else if (a >= 13 && a <= 17) getraenk = "Cola";
      else if (a >= 18) getraenk = "Wein";
      else getraenk = "Tee";
      
      console.log(`${name} trinkt ${getraenk}.`);
      rl.close();
    });
  });
}

// Funktion aufrufen
getraenkeWahl();