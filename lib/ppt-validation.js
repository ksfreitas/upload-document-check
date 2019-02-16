const PPT = require('ppt');

function validPpt(fileName) {
    return new Promise(function (resolve, reject) {
        const opts = {};
        try {
            PPT.readFile(fileName, opts);
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}


module.exports = {
    validPpt: validPpt
};
