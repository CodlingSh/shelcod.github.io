/*"use strict"
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
};*/

/* jQuery version */


$(document).ready(function() {
    var letList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var symList = ['{', '}', '(', ')', '[', ']', '#', ';', ':', '^', ',', '.', '?', '!', '&', '_', '@', '$', '%', '/', '\\', '+', '=', '-', '*'] ;

    function getRandomInt(n) {
        return Math.floor(Math.random() * n);
    }
    function shuffle(s) {
      var arr = s.split('');           // Convert String to array
      var n = arr.length;              // Length of the array
      
      for(var i=0 ; i<n-1 ; ++i) {
        var j = getRandomInt(n);       // Get random of [0, n-1]
        
        var temp = arr[i];             // Swap arr[i] and arr[j]
        arr[i] = arr[j];
        arr[j] = temp;
      }
      
      s = arr.join('');                // Convert Array to string
      return s;                        // Return shuffled string
    }

    $("#calculate").click(function() {
        // Variables
        let length = $("#length").val();
        let caps = $("#caps").val();
        let numbers = $("#numbers").val();
        let symbols = $("#symbols").val();
        let password = "";

        // generate the lowercase characters
        for (var i = 0; i < (length - caps - numbers - symbols); i++) {
            password += letList[Math.floor(Math.random() * letList.length)];
        }

        // generate the uppercase characters
        for (i = 0; i < caps; i++) {
            password += letList[Math.floor(Math.random() * letList.length)].toUpperCase();
        }

        // generate the numbers
        for (i = 0; i < numbers; i++) {
            password += Math.floor(Math.random() * 10);
        }

        // generate the symbols
        for (i = 0; i < symbols; i++) {
            password += symList[Math.floor(Math.random() * symList.length)];
        }

        // shuffle the string
        password = shuffle(password);

        $("#passBox > p").text(password);

    })
})