const http = require('http')
const port = 3000
var message = 'I am so happy to be part of the Node Girls workshop!';

let handler =(req,res) =>{
    
    res.writeHead(200,{'content-type' : 'text/html'})
    res.write(message)
    res.end()
}
const server = http.createServer(handler)

server.listen(port ,()=>{
    console.log(`server is running successfully on localhost:${ port } and ready to get requests `);
    
})