console.log("Hello Nodejs from typescript")

// basic types 
let isDone : Boolean = false

let num : Number = 100

let str : String = "Sajid"

let list:number[] = [1,2,3,4,5]

// let products:string[] = ["product1","product2"]
let products:Array<string> = ["product1","product2"]


let randomValue:any = 4



randomValue = "sangam"
randomValue= true 
randomValue =[]


let xyz:undefined = undefined
let yz:null = null



enum Color {
  Red,
  Green,
  Blue,
}

let d: Color = Color.Green;

//tuple

let abc: [string, number] = ["hi", 400];

//interfaces, types

interface User {
  name: String;
  id: number;
  email?: string; //optional
  readonly createdAt: Date;
}

const user: User = {
  name: "Sajid",
  id: 1,
  createdAt: new Date(),
  email: "abc@gmail.com",
};

type Product = {
  title: string;
  price: number;
};

const product1: Product = {
  title: "Product 1",
  price: 200,
};


//function with type annotations

function multiply(a:number,b:number):number{
    return a*b
}


const result = multiply(1,9)

// console.log(result)


function greet(name:string, greeting?:string):string{
    return `${name} ${greeting}`
}

console.log(greet("sajid","How are you"))