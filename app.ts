const num1El = document.getElementById("num1") as HTMLInputElement;
const num2El = document.getElementById("num2") as HTMLInputElement;
const buttonEl = document.querySelector("button")!; 

const numResults: number[] = [];
const stringResult: string[] = [];
type NumOrString = number | string;  // it is called type alias used to create your own type

function add(num1: NumOrString, num2: NumOrString){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    }else if(typeof num1 === "string" && typeof num2 === "string"){
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj: {val: number, timestamp: Date}){
    console.log(resultObj.val," and ",resultObj.timestamp);
}

buttonEl.addEventListener('click',() => {
    const numb1 = num1El.value;
    const numb2 = num2El.value;
    const result = add(+numb1,+numb2) as number;
    const resultStr = add(numb1,numb2)as string;
    numResults.push(result);
    stringResult.push(resultStr);
    console.log(result);
    console.log(resultStr);
    printResult({val: result, timestamp: new Date()})
    console.log(numResults,stringResult);
})