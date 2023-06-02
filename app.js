"use strict";
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const buttonEl = document.querySelector("button");
const numResults = [];
const stringResult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val, " and ", resultObj.timestamp);
}
buttonEl.addEventListener('click', () => {
    const numb1 = num1El.value;
    const numb2 = num2El.value;
    const result = add(+numb1, +numb2);
    const resultStr = add(numb1, numb2);
    numResults.push(result);
    stringResult.push(resultStr);
    console.log(result);
    console.log(resultStr);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, stringResult);
});
