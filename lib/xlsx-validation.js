const xlsx = require('node-xlsx');

function validXlsx(filePath) {
    return new Promise(function (resolve, reject) {
        try {
            xlsx.parse(filePath);
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    validXlsx: validXlsx
};
