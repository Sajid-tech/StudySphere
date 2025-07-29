// what is event emitter ? -> same as event listner in js 

// Think of EventEmitter as a way for one part of your app to say something happened, and for another part to listen and react to it.

// Just like:

// "Hey! Someone pressed a button!"
// And then someone else hears that and says:
// "Okay, I'll do something now."


const EventEmitter = require('events');

const myFirstEmiiter = new EventEmitter();


// register my first listener 

myFirstEmiiter.on('greet',(name)=>{
    console.log(`hello ${name}`)
})


myFirstEmiiter.emit('greet','Sajid')

// 'emit' is used to trigger an event 
// 'on' is used to add a callback function that going to be executed when the event is triggered