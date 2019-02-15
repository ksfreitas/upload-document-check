const node_xj = require("xls-to-json");
const tmp = require('tmp');

function validXls(filePath) {
    const tmpFile = tmp.fileSync();

    return new Promise(function (resolve, reject) {
        node_xj({
            input: filePath,
            output: tmpFile.name
        }, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve();
            }
            tmpFile.removeCallback();
        });
    });
}

module.exports = {
    validXlsx: validXls
};
