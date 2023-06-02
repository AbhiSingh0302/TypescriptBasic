const num1El = document.getElementById("num1") as HTMLInputElement; //we have added this because it does not identify what is the type of element
const num2El = document.getElementById("num2") as HTMLInputElement;
const buttonEl = document.querySelector("button"); // we dont needed to add the above extra syntax because here it is stated that it is a button element

function add(num1: number, num2: number){
    return num1 + num2;
}

buttonEl?.addEventListener('click',() => {
    const numb1 = num1El.value;
    const numb2 = num2El.value;
    const result = add(+numb1,+numb2);
    console.log(result);
})