"use strict"
var $ = function(id) { return document.getElementById(id); };

var scramble = function(word) {
    var j, x, i;
    for (i = word.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = word[i];
        word[i] = word[j];
        word[j] = x;
    }
    return word;
}

var calculate = function() {
    letterList = 'abcdefghijklmnopqrstuvwxyz'
    symbolList = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'

    var pLength = parseInt($("length").value);
    var pCaps = parseInt($("caps").value);
    var pNums = parseInt($("numbers").value)
    var pSymbols = parseInt($("symbols").value)
    var finalPass = []

    var letterList = "abcdefghijklmnopqrstuvwxyz"
    var symbolList = "!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"
    var randNum;
    var i = 0;

    if (pLength - (pCaps + pNums + pSymbols) > 0) {
        for (i = 0; i < (pLength - (pCaps + pNums + pSymbols)); i++) {
            randNum = Math.floor(Math.random() * 26);
            console.log(randNum, " ", i);
            finalPass.push(letterList.slice(randNum, randNum + 1));
        }

        for (i = 0; i < pCaps; i++) {
            randNum = Math.floor(Math.random() * 26);
            finalPass.push(letterList.slice(randNum, randNum + 1).toUpperCase());
        }

        for (i = 0; i < pNums; i++) {
            randNum = Math.floor(Math.random() * 9);
            finalPass.push(randNum);
        }

        for (i = 0; i < pSymbols; i++) {
            randNum = Math.floor(Math.random() * 26);
            finalPass.push(symbolList.slice(randNum, randNum + 1));
        }

        finalPass = scramble(finalPass);
        finalPass = finalPass.join("");
        
        $("error").innerHTML = finalPass;
    } else {
        $("error").innerHTML = "You have more capitals, numbers, and symbols selected then your password length. Please increase your length."; 
    }

    
}

window.onload = function() {
    $("calculate").onclick = calculate;
};
