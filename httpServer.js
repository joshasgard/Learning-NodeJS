const http = require('http')
const {readFileSync} = require('fs');

// get all files
const homepage = readFileSync('./index.html')


const server = http.createServer((req, res) => {
    const url = req.url;
    // Home page
    if (url === '/') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }
    // About Page
    else if (url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>My about Page</h1>')
        res.end()
    }
    // 404 
    else {
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page Not Found </br> <a href="/">Return Home</a></h1>')
        res.end()
    }
})
server.listen(5000)