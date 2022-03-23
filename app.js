// //require('./module')
// const {readFileSync, writeFileSync} = require('fs');
// // or const fs = require('fs');
// const first = readFileSync('./content/first.txt', 'utf-8')
// const second = readFileSync('./content/second.txt', 'utf-8')

// writeFileSync('./content/result-sync.txt', 
//                 `Here is the result: ${first}, ${second}`, {flag:'a'})

// const {readFile, writeFile} = require('fs');
// console.log('start')
// readFile('./content/first.txt','utf8', (err, result)=>{
//     if (err){
//         console.log(err)
//         return
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf-8',(err,result)=>{
//         if (err){
//             console.log(err)
//             return
//         }
//         const second = result;
//         writeFile('./content/result-async.txt',
//         `Here is the result:${first}, ${second}`,
//         (err,result)=>{
//             if (err){
//                 console.log(err);
//                 return;
//             }
//             console.log('done with this task');
//         })
//     })
// })
// console.log('starting next task')

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if (req.url === '/'){
//         res.end('Welcome to homepage')
//     }
//     if (req.url === '/about'){
//         res.end('Here is our short history')
//     }
//     res.end(`
//         <h1>Oops!</h1>
//         <p>We can't find the requested page</p>
//         <a href="/">Go back to the homepage</a>
//     `)
// })

// server.listen(5000)
// const _ = require("lodash")

// const items = [1,[2,[3,[4,5,6],7],8],9]
// const newitems = _.flattenDeep(items)
// console.log(newitems)
// console.log('hello fam')

// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path, 'utf-8',(err, data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data)
//             }
//     })
// })
// }

// getText('./content/first.txt')
//     .then(result=>console.log(result))
//     .catch((err)=>console.log(err))

// const {readFile, writeFile} = require('fs');
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async() =>{
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf-8');
//         const second = await readFilePromise('./content/second.txt', 'utf-8');
//         await writeFilePromise(
//             './content/result-mind.txt', 
//             `Awesome Awesome: ${first} ${second}`)
//         console.log(first, second);
//     } catch (error) {
//         console.log(error)
//     }
   
// }
// start()


// ==Events====

// const EventEmitter = require('events');
// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name,id)=>{
//     console.log(`data received for user:${name} with id:${id}`)
// })
// customEmitter.on('response', ()=>{
//     console.log(`some other logic here`)
// })
// customEmitter.emit('response', 'john',34)
// Many built-in modules extends the Events module in Javaascript

//STREAMS
//  1. Writeable
//  2. Readable
//  3. Duplex
//  4. Transform

const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './facebook-Log/index.html'))
})

app.listen(5000, ()=>{
    console.log('Server is listening on Port 5000...')
})


