let superChimpOne = {
    astronautID: 1,
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    move: function () {return Math.floor(Math.random()*11)}
};
let superChimpTwo = {
    astronautID: 2,
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6, 
    move: function () {return Math.floor(Math.random()*11)}
};
let salamander = {
    astronautID: 3,
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5, 
    move: function () {return Math.floor(Math.random()*11)}
};
let dog = {
    astronautID: 4,
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    move: function () {return Math.floor(Math.random()*11)}
};
let ecdysozoa = {
    astronautID: 5,
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

let animalCrew = [superChimpOne, superChimpTwo, salamander, dog, ecdysozoa];
// Print out the relevant information about each animal.

// Start an animal race!

// function crewReports(){
//   for (i=0; i < crew.length; i++){
//   console.log( `${name: } is a ${species: }. They are ${age: } years old and ${mass: } kilograms. Their ID is ${astronautID: }.`);
//   }
// }
// crewReports;

let animalCrewSteps = [superChimpOne.move , salamander.move , superChimpTwo.move , astroDog.move , waterBear.move];

let crewTurn = [0, 0, 0, 0, 0];

function fitnessTest(animalCrew){
  let results = [];
    for (let i = 0; i < animalCrewSteps.length; i++){
     while(animalCrewSteps[i] > 20){
      animalCrew[i].move;
      crewTurn[i] = crewTurn[i] + 1;
  } else (animalCrewSteps[i] < 20){
        numSteps += animalCrew[i].move();
        turns++;
        results.push(`${name} took ${turns} turns to take 20 steps.`);
    }
    return results;
}

fitnessTest(animalCrew);