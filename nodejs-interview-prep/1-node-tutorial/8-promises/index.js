// to handleing the callback in better way we used promises 

const { error } = require("console")



// Promises help by:

// Flattening the code structure

// Chaining tasks in a readable way (.then().then().catch())

// Handling errors in a single .catch()

// Working seamlessly with async/await for even cleaner syntax


function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve,time))
}

console.log('Promise lecture starts')
delayFn(2000).then(()=>console.log("after 2 secods promise resolved"))
console.log("end")



function divideFn(num1,num2){
        return new Promise((resolve,reject)=>{
            if(num2 === 0){
                reject("Cannot not perform division by 0")
            }else {
                resolve(num1/num2)
            }
        })
}

divideFn(10,2).then((result)=>console.log("res:",result)).catch((err)=>console.log("err:",err))