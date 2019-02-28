// Code your solutions in this file

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {  
  console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
    }
    return names;
}
printBadges(names);


// function tailsNeverFails() {
// var coinFace = Math.floor(Math.random() * 2);

// while(coinFace === 0){
//     console.log("Heads! Flipping again...");
//     var coinFace = Math.floor(Math.random() * 2);
// }
// console.log("Tails! Done flipping.");

// }