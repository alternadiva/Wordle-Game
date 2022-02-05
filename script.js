import {wordsArray} from './data.js';

// DOM

let theWordOutput = document.getElementById("word");
let inputFields = document.getElementsByClassName("inputs");
let line = document.getElementById("first-line");
let grid = document.getElementById("grid");
let submitBtn = document.getElementById("submit");
let output = document.getElementById("output");

// Random string from the array on load event

let randomWord = [];

function selectWord() {
    let pickedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    theWordOutput.innerText = pickedWord; //Remove later
    randomWord = pickedWord.split("");
    console.log(randomWord); //Remove later
    return randomWord;
}

window.addEventListener("load", selectWord);

// Focus on next input field on key up

function jumpNextField() {
    inputFields[0].focus();
    for (let i = 0; i < inputFields.length - 1; i++) {
        inputFields[i].addEventListener("keyup", function() {
            this.nextSibling.nextSibling.focus();
        }
    )}
}

jumpNextField();

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
            inputFields[i].style.background = "green";
            inputFields[i].setAttribute('readonly', '');
        }
        else if (randomWord.includes(inputArray[i])) {
            inputFields[i].style.background = "yellow";
            inputFields[i].setAttribute('readonly', '');
        }
        else {
            inputFields[i].style.background = "grey";
            inputFields[i].setAttribute('readonly', '');
        }
    }
    addNewLine();
}

//Add a clone line after submit

function addNewLine() {
    let idNr = 1;
    let cloneLine = line.cloneNode(true);
    cloneLine.id = `line-${idNr + 1}`;
    grid.appendChild(cloneLine);
    for (let i = 0; i < cloneLine.children.length; i++) {
        cloneLine.children[i].value = "";
        cloneLine.children[i].style.background = "";
        cloneLine.children[i].removeAttribute('readonly', '');
      }
    idNr += 1;
}

submitBtn.addEventListener("click", matchOrNot);

//Generate keyboard and render to DOM