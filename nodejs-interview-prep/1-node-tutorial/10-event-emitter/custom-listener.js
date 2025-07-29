const EventEmitter = require('events')


class MyCustomeEmitter extends EventEmitter{
    constructor(){
        super()
        this.greeting = 'Hello'
    }

    greet(name){
        this.emit('greeting',`${this.greeting},${name}`)
    }
}

const myCustomeEmitter = new MyCustomeEmitter()

myCustomeEmitter.on('greeting',(input)=>{
    console.log(`Greeting Event`,input)
})

myCustomeEmitter.greet('Sajid')