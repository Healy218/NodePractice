const fs = require('fs');


//Blocking, Syncronous way to do it
// const textin = fs.readFileSync('./txt/input.txt', 'utf-8');
// const textOut = `This is what we know about the avacado: ${textin}. \n Created on ${Date.now()}`;
// console.log(textOut);
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log("File Written!");

//Non-blocking, a-synchronous way

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
    });
});

console.log("Will write data!");