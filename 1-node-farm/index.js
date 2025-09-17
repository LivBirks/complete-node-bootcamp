const fs = require('fs');
const http = require('http');
const url = require('url');

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

const replaceTemplate = (template, productData) => {
    // use regex so it replaces all placeholders with than name
    let output = template.replace(/{%PRODUCTNAME%}/g, productData.productName);
    output = output.replace(/{%IMAGE%}/g, productData.image);
    output = output.replace(/{%FROM%}/g, productData.from);
    output = output.replace(/{%NUTRIENTS%}/g, productData.nutrients);
    output = output.replace(/{%QUANTITY%}/g, productData.quantity);
    output = output.replace(/{%PRICE%}/g, productData.price);
    output = output.replace(/{%DESCRIPTION%}/g, productData.description);
    output = output.replace(/{%ID%}/g, productData.id);

    if (!productData.organic) {
        output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    }
    return output;
}


// top level code only runs on execution so this data will be saved and not be read per request
const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8')
// This is an array of objects with data for each card
const dataObject = JSON.parse(data);

// Read Overview Page
const overviewTemplate = fs.readFileSync(`${__dirname}/starter/templates/overview.html`, 'utf-8');

// Read Product Page
const productTemplate = fs.readFileSync(`${__dirname}/starter/templates/product.html`, 'utf-8');

// Read Card
const cardTemplate = fs.readFileSync(`${__dirname}/starter/templates/card.html`, 'utf-8');



// accepts a callbackfunction, request and reponse variables
const server = http.createServer((req, res) => {
    console.log(`req.url: ${req.url}`);
    const { query, pathname } = url.parse(req.url, true);
    console.log(`query.id: ${query.id}`);
    console.log(`pathname: ${pathname}`);
    console.log("------------------------------")

    // Overview Page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(data);
    } else {
        // code, then headers
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello world'
        });
        res.end('<h1>Page not found</h1>');
    }
    // res.end('Hello from the server');
});

//takes port, local host address, optional - callbackfunction to run when it's set up
server.listen(8000, '127.0.0.1', () => {
    console.log('listening to requests on port 8000')
});