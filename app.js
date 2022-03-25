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

// const express = require('express');
// const path = require('path');
// const app = express();

// // setup static and middleware
// app.use(express.static('./public'))

// // app.get('/', (req,res)=>{
// //     res.sendFile(path.resolve(__dirname, './facebook-Log/index.html'))
// // })
// // adding to static assets
// // SSR

// app.all('*',(req,res)=>{
//     res.status(404).send('resource not found')
// })

// app.listen(5000, ()=>{
//     console.log('Server is listening on Port 5000...')
// })


// const express = require('express');
// const app = express();
// const { products } = require('./data')

// app.get('/', (req,res)=>{
//     res.send('<h1>Home Page</h1> <a href="/api/products">products</a>')
// })

// app.get('/api/products/:productID', (req,res)=>{
//     // console.log(req);
//     // console.log(req.params);
//     const {productID} = req.params;
//     const singleProduct = products.find((product) => product.id === Number(productID));
//     if (!singleProduct){
//         return res.status(404).send('Product does not exist')
//     }
//     res.json(singleProduct);
//     // // const newProducts = products.map((product)=>{
//     // //     const {id,name,image} = product;
//     // //     return {id,name,image}
//     // })
//     // res.json(newProducts)
// })

// app.get('/api/products/:productID/review/:reviewID', (req,res)=>{
//     console.log(req.params);
//     res.send('hello world');
// })

// app.get('/api/v1/query', (req,res)=>{
//     console.log(req.query);
//     const {search, limit} = req.query
//     let sortedProducts = [...products];
    
//     if (search){
//         sortedProducts = sortedProducts.filter((product)=>{
//             return product.name.startsWith(search)
//         })
//     }
//     if (limit){
//         sortedProducts = sortedProducts.slice(0,Number(limit))
//     }
//     if (sortedProducts.length < 1){
//         return res.status(200).json({success:true,data:[]})
//     }
//     res.status(200).json(sortedProducts)
//     //res.send('hello world')
// })

// app.listen(5000,()=>{
//     console.log('Server is listening on port 5000......')
// })

const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res

app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.send('Home')
})

app.get('/about', (req,res)=>{
    res.send('About')
})

app.get('/api/products', (req,res)=>{
    res.send('Product')
})

app.get('/api/items', (req,res)=>{
    res.send('Items')
})

app.listen(5000, ()=> {
    console.log('Server is listening on port 5050...')
})