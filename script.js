import {wordsArray} from "./data.js";

// DOM

let theWordOutput = document.getElementById("word");
let grid = document.getElementById("grid");
let submitBtn = document.getElementById("submit");

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


// Create grid rows dinamically
let activeRow;
let inputFields;
let idNum = 1;

function addRow() {
    let row = document.createElement("div");
    row.classList.add("row", "active");
    row.setAttribute("id", `row-${idNum}`);
    for (let i = 0; i < 5; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("maxlength", "1");
        input.setAttribute("id", `input-${i+1}`);
        input.classList.add("inputformat");
        row.appendChild(input);
    }
    grid.appendChild(row);
    activeRow = document.querySelector(".active");
    inputFields = activeRow.children;
    idNum++;
    jumpNextField();
}

addRow();

// Focus on next input field on key up and submit on return

function jumpNextField() {
    inputFields[0].focus();
    for (let i = 0; i < inputFields.length - 1; i++) {
        inputFields[i].addEventListener("keyup", function() {
            this.nextSibling.focus();
        }
    )}

    inputFields[4].addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            submitButtonFuncs();
        }
    });
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

// Iterate through inputs and compare with letters

function matchOrNot() {
    
    for (let i = 0; i < inputArray.length; i++) {
        if (randomWord[i] == inputArray[i]) {
            inputFields[i].style.background = "green";
            inputFields[i].setAttribute("readonly", "");
        }
        else if (randomWord.includes(inputArray[i])) {
            inputFields[i].style.background = "yellow";
            inputFields[i].setAttribute("readonly", "");
        }
        else {
            inputFields[i].style.background = "grey";
            inputFields[i].setAttribute("readonly", "");
        }
    }
} 

// Add new rows

function addNewRow() {
    document.getElementById(`row-${idNum-1}`).classList.remove("active");
    addRow();
    activeRow = document.querySelector(".active");
    inputFields = activeRow.children;
    inputArray = [];
}

function submitButtonFuncs() {
    addInputValues();
    matchOrNot();
    addNewRow();
}

submitBtn.addEventListener("click", submitButtonFuncs);

//Generate keyboard and render to DOM 