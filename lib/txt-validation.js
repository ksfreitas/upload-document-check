const mmm = require('mmmagic');
const Magic = mmm.Magic;
const magic = new Magic(mmm.MAGIC_MIME_TYPE);

function validTxtPlain(filePath) {
    return new Promise(function (resolve, reject) {
        magic.detectFile(filePath, function (err, result) {
            if (err) {
                reject(err);
            } else {
                if (result != 'text/plain') {
                    reject(new Error(`Mime type is not txt/plain: ${result}`))
                } else {
                    resolve();
                }
            }
        });
    });
}

module.exports = {
    validTxtPlain: validTxtPlain
};
