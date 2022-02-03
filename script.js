import {wordsArray} from './data.js';

// DOM

let theWordOutput = document.getElementById("word");
let inputLetters = document.getElementsByClassName("inputs");
let submitBtn = document.getElementById("submit");
let output = document.getElementById("output");

// Random string from the array

let randomWord = "";

function selectWord() {
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    theWordOutput.innerText = randomWord;
    return randomWord;
}

window.addEventListener(onload, selectWord);

selectWord();

//console.log(randomWord);