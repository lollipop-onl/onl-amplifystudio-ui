const fs = require('fs');
const path = require('path');

const cert = fs.readFileSync(path.join(__dirname, 'localhost.pem'));
const key = fs.readFileSync(path.join(__dirname, 'localhost-key.pem'));

module.exports = { cert, key };
