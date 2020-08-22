const fs = require ('fs');
const text = fs.readFileSync ('script.js', 'utf8');
console.clear();
console.log(text);