

// Code your solution here
// index.js

// Array containing the number of batteries assembled per batch
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Function to calculate total batteries using reduce method
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// Calculate total batteries using reduce
const totalBatteries = batteryBatches.reduce(reducer, 0);

// Export totalBatteries so it can be tested
module.exports = totalBatteries;
