const fs = require('fs');
const ExcelJS = require('exceljs');

function validXlsx(filePath) {
    return new Promise(async function (resolve, reject) {
        try {
            const workbookReader = new ExcelJS.stream.xlsx.WorkbookReader(filePath, {});
            await workbookReader.read();
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    validXlsx: validXlsx
};
