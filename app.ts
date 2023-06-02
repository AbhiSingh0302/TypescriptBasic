const num1El = document.getElementById("num1") as HTMLInputElement;
const num2El = document.getElementById("num2") as HTMLInputElement;
const buttonEl = document.querySelector("button")!; 
function add(num1: number | string, num2: number | string){  // union types allowed us to accept more than one type of types
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    }else if(typeof num1 === "string" && typeof num2 === "string"){
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}

buttonEl.addEventListener('click',() => {
    const numb1 = num1El.value;
    const numb2 = num2El.value;
    const result = add(+numb1,+numb2);
    const resultStr = add(numb1,numb2);
    console.log(result);
    console.log(resultStr);
})