console.log('node moudle wrapper demo')

console.log('__fielname in explorer',__filename)
console.log('__dirname in explorer',__dirname)


module.exports.greet = function (name){
    console.log(`hello ${name}`)
}