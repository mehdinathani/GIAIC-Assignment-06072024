function addition( ...c:number[]) : number{

    let value = 0;
    c.forEach(num1 => {
        value += num1;
        
    });

    return value;
}

function subtraction( ...c:number[]):number{

    let value = 0;
    c.forEach(num1 => {
        value -= num1;
        
    });

    return value;
}

function divide(a:number, b:number) : number{
    return (a/b);
}

function multiply(a:number , b:number) : number{
    return a * b;
}

export {addition, subtraction,multiply,divide};




