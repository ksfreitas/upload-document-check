const Jimp = require('jimp');

function validImage(filePath) {
    return new Promise(function (resolve, reject) {
        Jimp.read(filePath, (err, lenna) => {
            if (err) {
                reject(err)
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    validImage: validImage
};
