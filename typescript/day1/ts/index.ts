let num1 :number  = 100 
// let num1 = 100 
num1 = 1

// it will throw an err  because typescript is statically type , becz we already defined num1 as number so u can't assign as string  


// function 

function add1(a:number,b:number):number{
    return a+b;  
}


const y = add1(1,2);
console.log("add two num:",y);

// if we give type any than it same like javascript 