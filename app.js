var num1El = document.getElementById("num1"); //we have added this because it does not identify what is the type of element
var num2El = document.getElementById("num2");
var buttonEl = document.querySelector("button"); // we dont needed to add the above extra syntax because here it is stated that it is a button element
function add(num1, num2) {
    return num1 + num2;
}
buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.addEventListener('click', function () {
    var numb1 = num1El.value;
    var numb2 = num2El.value;
    var result = add(+numb1, +numb2);
    console.log(result);
});
