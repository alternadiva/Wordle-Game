import {wordsArray} from './data.js';

// DOM

let theWordOutput = document.getElementById("word");
let inputFields = document.getElementsByClassName("inputs");
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
    for (let i = 0; i < inputFields.length; i++) {
        let inputValue = inputFields[i].value;
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
            inputFields[i].style.background = "green";
        }
        else if (randomWord.includes(inputArray[i])) {
            trueFalse.push("yellow");
            inputFields[i].style.background = "yellow";
        }
        else {
            trueFalse.push("grey");
            inputFields[i].style.background = "grey";
        }
    }
    console.log(trueFalse);
}

submitBtn.addEventListener("click", matchOrNot)