
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

// Funktionsrumpf | (callee)
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Simonas!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// call
// ausgabeNamen();

// Funktionalität
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS ...
    let firstName = "Yasin";
    console.log("Hallo, " + firstName  + "!");
}

// console.log(firstName); // Fehler: Scope

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2();
ausgabeNamen2("Yasin"); // Argument --> Daten für Parameter
ausgabeNamen2("Tarik");
ausgabeNamen2("Sandra");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo, " + firstName  + "!");
}
