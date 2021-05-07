"use strict"
var $ = function(id) { return document.getElementById(id) }

var randNum;
var pLength = 10;
var finalPass = "";

for (var i = 0; i < pLength; i++) {
    randNum = Math.floor(Math.random() * 26);
    console.log(randNum, " ", i);
    finalPass = finalPass.concat("", randNum);
}

$("error").innerHTML() = "You have more capitals, numbers, and symbols selected then your password length. Please increase your length."  