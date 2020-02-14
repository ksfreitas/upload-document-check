const tmp = require('tmp');
const {unrar, list} = require('unrar-promise');
const rimraf = require("rimraf");

async function validRar(filePath) {
    const tmpDir = tmp.dirSync();
    try {
        await unrar(filePath, tmpDir.name);
    } catch (e) {
        // console.error(e);
        throw e;
    } finally {
        rimraf.sync(tmpDir.name);
    }
}

module.exports = {
    validRar: validRar
};
