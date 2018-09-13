const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

// grabbing data from data.json
const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

// default is 20000 iterations I think
network.train(trainingData, {
    iterations: 2000
});

// test string to see if it is hardware or software 
const output = network.run('There are bugs in the code');

console.log(`Category: ${output}`);