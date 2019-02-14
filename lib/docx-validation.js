const mammoth = require("mammoth");

function validDocx(filePath) {
    return mammoth.convertToHtml({path: filePath})
}

module.exports = {
    validDocx: validDocx
};
