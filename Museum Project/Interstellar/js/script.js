let string1 = "Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.";

let string1TotalCharacterNumber = string1.length;

let string1IterationIndex = 0;

let string1IntervalID = setInterval(function(){

$("#typewriting-target").append(string1.charAt(string1IterationIndex));
string1IterationIndex = string1IterationIndex + 1; /* make string add one character each time it runs through the interation, and it is the next character in the string at the very top  */

console.log("1 iteration completed");

if (string1IterationIndex == string1TotalCharacterNumber){
  clearInterval(string1IntervalID);
}

}, 8);


let string2 = "Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.Love is the one thing were capable of perceiving that transcends dimensions of time and space.";

let string2TotalCharacterNumber = string2.length;

let string2IterationIndex = 0;

let string2IntervalID = setInterval(function(){

$("#typewriting-target-2").append(string2.charAt(string2IterationIndex));
string2IterationIndex = string2IterationIndex + 1; /* make string add one character each time it runs through the interation, and it is the next character in the string at the very top  */

console.log("2 iteration completed");

if (string2IterationIndex == string2TotalCharacterNumber){
  clearInterval(string2IntervalID);
}

}, 30);

