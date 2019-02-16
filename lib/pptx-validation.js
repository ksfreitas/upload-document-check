const PptxCompose = require('pptx-compose');

function validPptx(filePath) {
    return new Promise(function (resolve, reject) {
        function unhandledRejection(reason) {
            reject(reason);
            process.removeListener('unhandledRejection', unhandledRejection);
        }

        process.addListener('unhandledRejection', unhandledRejection);
        new PptxCompose().parse(filePath, (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
            process.removeListener('unhandledRejection', unhandledRejection);
        })
    });
}

module.exports = {
    validPptx: validPptx
};
