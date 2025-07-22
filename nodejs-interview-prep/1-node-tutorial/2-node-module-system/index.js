// nodejs modulule system 
// by defination  node module system  allow you to  organize your code into multiple resubale piece of code for example creating a n very large ecommer application where you will having diffrent diffrent section something lik ethat if you are writing the each and everlines of code in single file what will happen code will become very messy and that is also not recommended and you will not be able to manage that code properly so what will happend nodejs has a modeule system where you will be able to create a diffrent dirrent module  than you can use those module in a single root file just like react has multiple component and we import those component in a single file so that is the same thing we are going to do here so we are going to create a module and we are going to use that module in our main file so let's get started

// in nodejs each file treated as seprate module

// code start 


//module.exports  -> export  (to export that module to other files)
//require -> import  ( to import that module in other files)


// const {add,sub,divide} = require('./first-module.js')
// or 
 const firstModule = require('./first-module.js')


 console.log("adding two number",firstModule.add(5,88))


try{

    console.log("try to divide by zero")
    let result = firstModule.divide(5,4)
    // let result = firstModule.divide(5,0)
    console.log("divide by zero",result)

}catch(error){
    console.log("Caught an error",error.message)
}


// module wrapper

// question: how the module wrapper is actually work 
// ->  in node js evrey module whatever module we are creating is wrapped in function before it executed  and this wrapper function we called as module wrapper function . so what happend how this work? ->  from module wrapper function this function has some of the parameter  like export , require , module , filename and directory( which file getting renderd)

(
    function(exports,require,module,__filename,__dirname){
        // your module code goes here
    }
)

