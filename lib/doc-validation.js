const WordExtractor = require("word-extractor");

function validDoc(filePath) {
    const extractor = new WordExtractor();
    return extractor.extract(filePath);
}

module.exports = {
    validDoc: validDoc
}
