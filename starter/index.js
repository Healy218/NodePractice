const fs = require('fs');

const textin = fs.readFileSync('./txt/input.txt', 'utf-8');

const textOut = `This is what we know about the avacado: ${textin}. \n Created on ${Date.now()}`;

console.log(textOut);

fs.writeFileSync('./txt/output.txt', textOut);

console.log("File Written!");