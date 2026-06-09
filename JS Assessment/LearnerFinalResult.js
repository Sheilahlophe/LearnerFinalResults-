// This program calculates a learners final result
// It will ask for the learners name and mark
// Then it will display if they passed or failed

const prompt = require("prompt-sync")()

// Ask the user for their name and mark
let learnerName = prompt("Enter your name: ")
let mark = Number(prompt("Enter your mark out of 100: "))

// Check if the learner passed or failed
if(mark >= 50){
    console.log("Learner Name: " + learnerName)
    console.log("Mark Obtained: " + mark)
    console.log("Final Result: Pass")
}
else{
    console.log("Learner Name: " + learnerName)
    console.log("Mark Obtained: " + mark)
    console.log("Final Result: Fail")
}