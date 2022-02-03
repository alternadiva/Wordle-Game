import {wordsArray} from './data.js';

// DOM

let theWordOutput = document.getElementById("word");
let inputFiels = document.getElementsByClassName("inputs");
let submitBtn = document.getElementById("submit");
let output = document.getElementById("output");

// Random string from the array on load event

let randomWord = [];

function selectWord() {
    let pickedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    theWordOutput.innerText = pickedWord;
    randomWord = pickedWord.split("");
    console.log(randomWord); //Remove later
    return randomWord;
}

window.addEventListener("load", selectWord);

// Get input array

let inputArray = [];

function addInputValues() {
    for (let i = 0; i < inputFiels.length; i++) {
        let inputValue = inputFiels[i].value;
        inputArray.push(inputValue.toUpperCase());
    }
    return inputArray;
}

submitBtn.addEventListener("click", addInputValues)


// Iterate through inputs and compare with letters

function matchOrNot() {
    let trueFalse = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (randomWord[i] == inputArray[i]) {
            trueFalse.push("green");
        }
        else if (randomWord.includes(inputArray[i])) {
            trueFalse.push("yellow");
        }
        else {
            trueFalse.push("grey");
        }
    }
    console.log(trueFalse);
}

submitBtn.addEventListener("click", matchOrNot)