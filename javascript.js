/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/
let task = 1;
// Skriv koden for oppgave 1 her
console.log("---------------");
console.log(`task ${task++}`);

function oddOrEven(num) {
  // we'll do this
  val = Math.ceil(num / 2);
  // aka we divide by half, and round up.
  // so if the final value is still equal to num/2
  // then we have a even number

  if (val == num / 2) {
    return "Partall";
  } else if (val > num / 2 && typeof val == typeof num) {
    return "Oddetall";
  } else {
    return "neither";
  }
}

let v1 = oddOrEven(5);
let v2 = oddOrEven(2);
let v3 = oddOrEven("pie");

console.log(v1);
console.log(v2);
console.log(v3);
console.log("---------------");
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her
console.log("---------------");
console.log(`task ${task++}`);

function allCaps(input) {
  let output = "";
  for (let l in input) {
    output += input[l].toUpperCase();
  }
  output += "!";
  return output;
}

console.log(allCaps("message"));
console.log(allCaps("good day"));
console.log(
  allCaps(
    "we've been trying to reach you regarding your car's extended varanty",
  ),
);
console.log("---------------");
/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her

console.log("---------------");
console.log(`task ${task++}`);

function nightyNigth(name, time) {
  if (!time) {
    return "error, no time given";
  } else if (time < 0 || time > 23) {
    return `Ugyldig tid`;
  } else if (time >= 0 && time <= 5) {
    return `God natt ${name}`;
  } else if (time > 5 && time <= 11) {
    return `God morgen ${name}`;
  } else if (time > 11 && time <= 17) {
    return `God dag ${name}`;
  } else if (time > 17 && time <= 23) {
    return `God kveld ${name}`;
  }
}

console.log(nightyNigth("steve", -2));
console.log(nightyNigth("bob", 2));
console.log(nightyNigth("jerry", 10));
console.log(nightyNigth("knuth", 12));
console.log(nightyNigth("OJ", 22));
console.log(nightyNigth("perry"));

console.log("---------------");
/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her
console.log("---------------");
console.log(`task ${task++}`);

function snip(array) {
  array.shift();
  array.pop();
  return array;
}
let a1 = ["Rød", "Grønn", "Blå", "Gul"];
console.log(snip(a1));
let a2 = [1, 2, 3, 4, 5, 6];
console.log(snip(a2));
let a3 = [];
console.log(snip(a3));

console.log("---------------");

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her
console.log("---------------");
console.log(`task ${task}`);

function vanskeligToGoy(str) {
  //   let i = 0;
  let vanStart;
  let vanEnd;

  // step 1: get rid of excess spaces
  let firstLetter;
  let lastLetter;
  for (let spc = 0; spc < str.length; spc++) {
    /* Ok, so the plan. We need to get rid of all excess spaces
        to do this we are going to go through the whole string
        and find the first and last non space symbol, and remove everything outside
        that range */
    if (str[spc] != " " && !firstLetter) {
      firstLetter = spc;
    }
    if (str[spc] != " ") lastLetter = spc;
  }
  //   console.log("first and last");
  //   console.log(firstLetter, lastLetter);

  for (let i = 0; i < str.length - 8; i++) {
    // find out where "vanskelig" er
    if (
      str[i + 0] == "v" &&
      str[i + 1] == "a" &&
      str[i + 2] == "n" &&
      str[i + 3] == "s" &&
      str[i + 4] == "k" &&
      str[i + 5] == "e" &&
      str[i + 6] == "l" &&
      str[i + 7] == "i" &&
      str[i + 8] == "g"
    ) {
      vanStart = i;
      vanEnd = i + 8;
      //   console.log(vanStart, vanEnd);
    }
  }
  /*
  Now we have all we need. Now, for one final iteration
  */

  let streamlined = "";
  let replaced = false;
  for (i in str) {
    if (i >= firstLetter && i < vanStart) {
      streamlined += str[i];
    }
    if (i >= vanStart && i <= vanEnd && replaced == false) {
      streamlined += "gøy";
      replaced = true;
    }
    if (i > vanEnd && i <= lastLetter) {
      streamlined += str[i];
    }
  }
  //   console.log(streamlined);
  return streamlined;
}
let m1 = "  Javascript er vanskelig   ";
let m2 = " Det er vanskelig å bruke metoder ";
let m3 = "   vanskelig        ";
// vanskeligToGoy(m);
console.log(vanskeligToGoy(m1));
console.log(vanskeligToGoy(m2));
console.log(vanskeligToGoy(m3));
// just for the record: this iterates over the string 3 times. That is not mega effective
console.log("---------------");
console.log("---------------");
console.log(`task ${task++}, addendum.`);
console.log(
  "apparently there are built in functions for this in javascript. more specifically: .replace() would save one whole iteration by itself, and one more since we could just do the whole job with just one for loop. .trim() doesn't edit the original, but maybe...",
);
console.log("let's try an improved version");

function vtg(string) {
  string = string.trim();
  string = string.replace("vanskelig", "gøy");
  return string;
}

let mList = [m1, m2, m3];
for (m in mList) {
  let result = vtg(mList[m]);
  console.log(result);
}
console.log("whelp. that's what I get for re-inventing the wheel... ");
console.log("or .trim() and .replace()");
console.log("---------------");

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

// const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her
console.log("---------------");
console.log(`task ${task}`);
let items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];
console.log(items);
// step 1
items.shift();
console.log(items);

// step 2
items.splice(2, 1, "Linjal");
console.log(items);

// step 3
items.splice(0, 2, "Markeringspenn");
console.log(items);

// step 4
let strItems = items.join(" | ");
console.log(strItems);

console.log("---------------");
console.log(`task ${task++}, extra`);

// extra
items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];
let eArray = [];
for (i in items) {
  let containsE = false;
  for (l in items[i]) {
    if ((items[i][l] == "e" || items[i][l] == "E") && containsE == false) {
      eArray.push(items[i]);
    }
  }
}
console.log(eArray);
console.log("---------------");

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her
console.log("---------------");
console.log(`task ${task++}`);

function contains(array, string) {
  let doesIt = false;
  let where;
  for (a in array) {
    if (array[a] == string) {
      doesIt = true;
      where = a;
    }
  }

  if (!doesIt) {
    array.push(string);
  } else {
    array.splice(where, 1);
  }
  return array;
}
console.log(contains(["Rød", "Grønn"], "Blå"));
console.log(contains(["Rød", "Grønn", "Blå"], "Grønn"));
console.log(contains(["En", "To", "Tre"], "Fire"));
console.log(contains(["En", "To", "Tre"], "To"));
console.log("---------------");

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
console.log("---------------");
console.log(`task ${task++}`);

function sunglasses(input) {
  if (typeof input == typeof "string") {
    let newString = "😎" + input + "😎";
    return newString;
  } else if (typeof input == typeof 42) {
    // input = input*2
    let newString = "😎" + input * 2 + "😎";
    return newString;
  } else if (typeof input == typeof true) {
    if (input == true) {
      let newString = "😎" + "Ja" + "😎";
      return newString;
    } else {
      let newString = "😎" + "Slapp av" + "😎";
      return newString;
    }
  } else {
    return "😎Kun primitive verdier😎";
  }
}
console.log(sunglasses("hello"));
console.log(sunglasses("22"));
console.log(sunglasses(2.2222));
console.log(sunglasses(true));
console.log(sunglasses(null));
console.log("---------------");
