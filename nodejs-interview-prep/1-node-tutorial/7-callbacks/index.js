const fs = require('fs')



function person(name,callbackFn){
    console.log(`hello my name is ${name}`)
    callbackFn()

}

function address(){
    console.log("India")
}

person('Sajid',address)

fs.readFile('input.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error reading file",err)
        return 
    }
    console.log(data)
})



// exmaple of callback hell
console.log("Starting process...");

// setTimeout(() => {
//   console.log("Step 1: Fetching user data...");

//   setTimeout(() => {
//     console.log("Step 2: Verifying user credentials...");

//     setTimeout(() => {
//       console.log("Step 3: Fetching user permissions...");

//       setTimeout(() => {
//         console.log("Step 4: Fetching dashboard data...");

//         setTimeout(() => {
//           console.log("Step 5: Rendering dashboard...");

//           setTimeout(() => {
//             console.log("Step 6: Attaching event listeners...");

//             setTimeout(() => {
//               console.log("Step 7: Finalizing UI...");

//               setTimeout(() => {
//                 console.log("✅ All tasks completed successfully!");
//               }, 500);
//             }, 500);
//           }, 500);
//         }, 500);
//       }, 500);
//     }, 500);
//   }, 500);
// }, 500);



