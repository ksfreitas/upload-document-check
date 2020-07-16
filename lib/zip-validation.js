const extract = require('extract-zip');
const tmp = require('tmp');
const rimraf = require("rimraf");

async function validZip(filePath) {
    const tmpDir = tmp.dirSync();
    await extract(filePath, { dir: tmpDir.name })
    rimraf.sync(tmpDir.name);
}

module.exports = {
    validZip: validZip
};
