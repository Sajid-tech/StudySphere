const http = require('http');

const server = http.createServer((req,res)=>{
const url = req.url 
if(url === '/'){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Home Page")
}else if ( url === '/project'){
     res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Project page")
}else{
     res.writeHead(400,{'Content-Type':'text/plain'})
    res.end("This page cannot be found")
}

})

const port = 3000

server.listen(port,()=>{
    console.log(`Routes is listening on port ${port}`)
})