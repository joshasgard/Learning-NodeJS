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
const _ = require("lodash")

const items = [1,[2,[3,[4,5,6],7],8],9]
const newitems = _.flattenDeep(items)
console.log(newitems)
console.log('hello guys')
