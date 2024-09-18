function calculate() {


let inputElement1 = document.getElementById("display1");
let inputElement2 = document.getElementById("display2");
let finalResult =  document.getElementById("result");
let resultElement;

const value1 = parseFloat(inputElement1.value);
const value2 = parseFloat(inputElement2.value);


    switch(operator) {

        case '+':
            resultElement = value1 + value2;
            break;

         case '-':
            resultElement = value1 - value2;
            break;

        case '*':
            resultElement = value1 * value2;
            break;

        case '/':
            resultElement = value1 / value2;
            break;

        default:
            resultElement = "Invalid Operator";
            

    }

    finalResult.innerHTML  = "Result: " + resultElement;
}

function clearCalculate(): void {

    (document.getElementById("display1");
    (document.getElementById("display2");
    (document.getElementById("result");
   
}








