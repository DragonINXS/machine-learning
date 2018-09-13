const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// WHERE YOU TRAIN - VERY SIMPLE EXAMPLE


// ==========================================================================
// Example 1 
// ==========================================================================

// // output is first element in each array
// network.train([
//     { input: [0,0,0], output: [0] },
//     { input: [0,0,1], output: [0] },
//     { input: [0,1,1], output: [0] },
//     { input: [1,0,1], output: [1] },
//     { input: [1,1,1], output: [1] }
// ]);

// // test if scenario will return 1 - probability
// const output = network.run([1, 0, 0]); 


// ==========================================================================
// Example 2 
// ==========================================================================

// teams in first array -> index of who wins in output
network.train([
    { input: [1,2], output: [1] }, // Team 2 wins
    { input: [0,3], output: [1] }, // Team 3 wins
    { input: [2,3], output: [0] }, // Team 2 wins
    { input: [2,4], output: [1] } // Team 4 wins
]);
    
// if Team 1 plays Team 4
const output = network.run([1,4]); 



// returns probability
console.log(`Prob: ${output}`);
