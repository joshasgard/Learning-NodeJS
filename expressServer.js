const express = require('express');
const app = express()

// == Express HTTP Methods ==
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use - for middleware
//app.listen

app.get('/',(req,res)=>{
    console.log('user hit the resource')
    res.status(200).send("Home Page")
})

app.get('/about',(req,res)=>{
    res.status(200).send("About Page")
})

app.all('*',(req,res)=>{
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(5000, ()=>{
    console.log('server is listening on Port 5000')
})

