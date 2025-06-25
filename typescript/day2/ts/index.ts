//Basic Types

let num: number = 1234_2423242;

// let num1:bigint = 324353253453n;

console.log("num:", num);
// console.log("num1:",num1)

// Strings

let character: string = "code for fun";

// boolean
//  only in variable u get the type , on const show it same u passed it
let isAvailable: boolean = true;
// const isAvailable  = true

let numArray: number[] = [1, 2, 3, 4];
let charArray: string[] = ["1", "2", "a"];

// const chararra=charArray.forEach(item=>item.includes('a'))

// const hello =numArray.forEach(val => val.toFixed(2))

let val: undefined = undefined;
//same for null
let val1: null = null;

let user;
console.log(user); // return undefined

// OBJECT

let obj: object = {
  a: "hello",
  b: 1,
};
// or  like this
// let obj: {a:string,b:number} ={
//     a:"hello",
//     b:1,

// }

let obj1 = { ...obj, a: "sajid" };
console.log("obj1", obj1);

// usually we called it tuple : tupple allow an array to have diffrent type of datatype see below eg
// use: where we have to give strict positing in array eg. coordinate
let valArray: [number, string] = [1, "alice"];

let coordinates3D: [number, number, number] = [10, 20, 30]; //{x,y,z} axis

let response: [number, string] = [200, "Success"]; // htt-response

// tuple best fit in key value pair like

// drawback of using tuple

response.push(0); // here it get appened wheareas we have defined two data types only
console.log("response", response);

// ENUM

//by the help of enum we can defined the  set of named constant
// it help to make our code more readiable or maintable

//PascalCase
enum Color {
  // APP_NAME='my_app_name',
  Red = "red",
  Green = "green",
  Blue = "blue",
}

console.log(Color.Blue); // itgive you 2 , index value(0,1,2) but if we give red =1 than blue become 3 and if we give string tha nn that string return
// help weher we defined the app name and use accros the platform

let color: Color = Color.Green;
console.log(color);

// example with enum doing the same

// const Small = 1
// const Medium =2
// const Large = 3

// let size = Medium

// convert in enum

//we can export it to use in diffrent file
// const enum Size {
//     Small=1,
//     Medium,
//     Large,
// }
enum Size {
  Small = 1,
  Medium,
  Large,
}

let size: Size = Size.Large;

console.log(size);

// unknwon type

let notSure: unknown = "a"; // here it can be number tstring or anytype

// use: where we are not sure of the type of variable

if (typeof notSure == "number") {
  notSure.toFixed(2);
} else if (typeof notSure == "string") {
  notSure.length;
}

// never type

// in TypeScript, the never type is indeed used for functions that:

// 1. Never return (e.g., infinite loops).

// 2.Always throw an error (e.g., throw new Error(...)).

function infiniteLoop(): never {
  while (true) {
    //do something enlesly
    console.log(1);
  }
}

// infiniteLoop()

// second use

function throwError(message: string): never {
  throw new Error(message);
}

// throwError("something went wrong")

//void type : mostly use in function

// void mens nothing return , example value ,null: only show message and undefined

// The function performs an action but returns no meaningful value (not even null).
function logMessage(message: string): void {
  console.log(message);
  // return undefined
}

// TYPE INFERENCE AND TYPE ASSESRTION

// type Infernce

// Definition: TypeScript automatically guesses the type of a variable based on its initial value.

let username = "Sajid"; // TypeScript infers `username` as `string`

// Key Point:

// If no type is specified, TypeScript assigns the type of the initial value to the variable.

// type assertion

// Definition: Forcefully telling TypeScript the type of a variable (useful when TypeScript can't infer it correctly).

let someValue: any = "Hello wor;d"; // Method 1: `as` keyword
let strLength: number = (someValue as string).length;

// Method 2: Angle brackets (older syntax)
let strLength2: number = (<string>someValue).length;

console.log(strLength); // Output: 11

// When to Use:

// When you know the type better than TypeScript (e.g., with any or complex types).

//union
// if it is string or number  where we use union
let id: string | number; // id can either be string  or number
// eg:
id = "abc";
id = 101;
// id = true // not taken

function prindId(id: string | number) {
  console.log(`id:${id}`);
}

prindId("abc");
prindId(11);

// type narrowing
// Definition: A way to detect the exact type of a variable when it has a union type (e.g., string | number).

// Why? Helps TypeScript safely apply type-specific operations (like .toUpperCase() for string)
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("ID is a string:", id.toUpperCase()); // Safe: `id` is now `string`
  } else {
    console.log(`ID is a number: ${id}`); // `id` is now `number`
  }
}

printId("hello"); // Output: "ID is a string: HELLO"
printId(123); // Output: "ID is a number: 123"

// typeof Checks: Narrow types using conditions like typeof x === "string".

// Works with Unions: Helps TypeScript lock in the exact type inside a code block.

// Avoids Errors: Prevents operations like toUpperCase() on a number.

// interface

// ye ek traika jisme mein apne object ko structure krte hai  ki uske andar konsi property ya function defined hogi ,
//  ye enforced krta hai typesafety , kese ensure krta hai kyuki ye specific shape de edta hai ek object ko ya class ko

// This is a way to organize an object by deciding which properties or functions it will have.
// It helps keep the code type-safe because it gives the object or class a specific structure or shape.

//  only use in type checking

// Define an interface for a 'User'
interface User {
  name: string;
  age: number;
  //   greet(): void; // Method
  greet: () => void;
}

function greet() {
  console.log("hy");
}
// Create an object that follows the 'User' structure
const person: User = {
  name: "Sajid",
  age: 25,
  //   greet() {
  //     console.log(`Hello, I'm ${this.name}!`);
  //   },
  // to access the outside function
  greet,
};

person.greet(); // Output: "Hello, I'm Sajid!"

// Key Points:

// If person misses name, age, or greet(), TypeScript throws an error.

// The object must match the interface structure.


// complex example : interface with function


interface MathOp {
    (a:number,b:number):number ; // returnumber
}

const add:MathOp=(x,y)=>{
    return x+y
}
const sub:MathOp=(x,y)=>{
    return x-y
}

console.log(add(1,2))
console.log(sub(5,2))


// type alias

//  measn we can provide new meaningfull name or alias to the type , help in resualbable and readibale


// type AliasName= TypeDefinition  //syntax 


type UserId = string;

let userId:UserId ='abc'   // see userid defined as sting already we ar eusing it as alias


type Person1 ={
    name:string,
    age:number
}

let person1:Person1={
    name:'abc',
    age:12
}


console.log(person1)


type Id = string | number

let orderId:Id ='abc'
let orderId1:Id =1



// diffrence between interface and type alias 

// 2:32:22 