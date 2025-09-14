const fs = require('fs');

// Read Files
// const textInput = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textInput);

// Write Files
// fs.writeFileSync('./starter/txt/output.txt', `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`, 'utf-8')
// console.log("File written.")

//Async
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('your file has been written ✍️');
            });
        });
    });
});
console.log('will read file...');

// error handling
fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if (err) return console.log('Error 🛑');
    console.log('success 🟢');
});