const fs = require('fs');
const pdf = require('pdf-parse');

function validPdf(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    return pdf(dataBuffer);
}

module.exports = {
    validPdf: validPdf
};
