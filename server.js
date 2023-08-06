// Using the HTTP module
const http = require('http');

const hostname = 'localhost'
const port = 7000

const server = http.createServer((request,response) =>{
    // Return “Hello world” from the response

    response.end('Hello World')
})



server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/ `)
})