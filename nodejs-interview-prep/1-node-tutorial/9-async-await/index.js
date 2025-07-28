// simpler and modern way of handlling promises 

function delayFn(time){
    return new Promise((resolve)=>setTimeout(resolve,time))
    
}


async function delayFnGreet(name){
    console.log("before time",name)
    await delayFn(2000)
    console.log("after time",name)
}

delayFnGreet("Sajid")



async function division(num1,num2){
    try{
        if(num2 === 0 ) throw new Error("Cannot devide by zero")
            return num1/num2
    }catch(err){
        console.error("error",err)
        return null
    }
}


async function main() {

    console.log(await division(10,2))
    console.log(await division(10,5))
    
}


main()