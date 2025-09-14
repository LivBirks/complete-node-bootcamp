const fs = require('fs');
const http = require('http');

/////////////////////////////////////////////////////////////////////////
// FILES

// Read Files
// const textInput = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textInput);

// Write Files
// fs.writeFileSync('./starter/txt/output.txt', `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`, 'utf-8')
// console.log("File written.")

//Async
// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('your file has been written ✍️');
//             });
//         });
//     });
// });
// console.log('will read file...');

// error handling
// fs.readFile('abc.txt', 'utf-8', (err, data) => {
//     if (err) return console.log('Error 🛑');
//     console.log('success 🟢');
// });

/////////////////////////////////////////////////////////////////////////
// SERVER

// accepts a callbackfunction, request and reponse variables
const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the server');
});

//takes port, local host address, optional - callbackfunction to run when it's set up
server.listen(8000, '127.0.0.1', () => {
    console.log('listening to requests on port 8000')
});