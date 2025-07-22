const fs = require("fs")
const path = require("path")

// path join
const datfolder = path.join(__dirname,"data")
// data folder created 
if(!fs.existsSync(datfolder)){
    fs.mkdirSync(datfolder)
    console.log("data folder created")
}


const filePath = path.join(datfolder,'example.txt')
//synchronous way of creating the file

fs.writeFileSync(filePath,'hello from nodejs')

console.log('file created succesfully')

// read content fom teh file 

const readContentFromFile = fs.readFileSync(filePath,'utf8')


console.log('file content:',readContentFromFile)

// append the file 

fs.appendFileSync(filePath,'\nThis is the new line to that file ')

console.log("new file content added")


// async way to creaeting the file 


const asyncFilePath=path.join(datfolder,'async-example.txt')
fs.writeFile(asyncFilePath,"hello async node js",(err)=>{
    if(err) throw err;
    console.log('Aysnc file is created successfully')

    fs.readFile(asyncFilePath,'utf8',(err,data)=>{
        if(err) throw err
        console.log('Async file content:',data)
    })
    fs.appendFile(asyncFilePath,'\nThis is the new line to the async file ',(err)=>{
        if(err) throw err 
        console.log('New line added successfully')
         fs.readFile(asyncFilePath,'utf8',(err,updatedData)=>{
        if(err) throw err 
        console.log('Updated  file content:',updatedData)
    })
    })
   
})
