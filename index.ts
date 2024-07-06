import { addition,subtraction,multiply,divide } from "./function";


function calculation(operation : "+" | "-" | "*" | "/", firsNumber : number, secondNumber :number) : number{

    let result = 0;
    if (operation === "+") {
        result = addition(firsNumber,secondNumber)
    }
    else if(operation === "*"){
    result =    multiply(firsNumber,secondNumber)
    }
    else if( operation === "-")
    {
        result = subtraction(firsNumber,secondNumber)

    } else {
         result= divide(firsNumber,secondNumber);
    }

    return result;
}

console.log(calculation("-",2,3));
