//Basic Types

let num:number = 1234_2423242;


let num1:bigint = 324353253453n;


console.log("num:",num)
console.log("num1:",num1)





// Strings 

let character: string ="code for fun"



// boolean
//  only in variable u get the type , on const show it same u passed it 
let isAvailable : boolean  = true
// const isAvailable  = true


let numArray: number[] = [1,2,3,4]
let charArray: string[] = ['1','2','a']


// if u are giving undefined than your value should also be undefined 
let val: undefined = undefined
//same for null
let val1:null = null








// OBJECT

let obj: object ={
    a:"hello",
    b:1
}
// or  like this 
// let obj: {a:string,b:number} ={
//     a:"hello",
//     b:1,
   
// }


let obj1 = {...obj ,a:"sajid"}
console.log("obj1",obj1)


// usually we called it tuple
let valArray:[number,string]=[1,'a']