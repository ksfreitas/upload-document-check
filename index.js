module.exports = {
    validDoc: (filePath) => {
        const DocValidation = require('./lib/doc-validation');
        DocValidation.validDoc(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
    },
    validDocx: (filePath) => {
        const DocxValidation = require('./lib/docx-validation');
        DocxValidation.validDocx(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
    },
    validImage: (filePath) => {
        const ImageValidation = require('./lib/image-validation');
        ImageValidation.validImage(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        })
    },
    validPdf: (filePath) => {
        const PdfValidation = require('./lib/pdf-validation');
        PdfValidation.validPdf(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        })
    },
    validPpt: (filePath) => {
        const PptValidation = require('./lib/ppt-validation');
        PptValidation.validPpt(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        })
    },
    validPptx: (filePath) => {
        const PptxValidation = require('./lib/pptx-validation');
        PptxValidation.validPptx(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        })
    },
    validRar: (filePath) => {
        const RarValidation = require('./lib/rar-validation');
        RarValidation.validRar(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        })
    },
    validTxt: (filePath) => {
        const TxtValidation = require('./lib/txt-validation');
        TxtValidation.validTxtPlain(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        })
    },
    validXls: (filePath) => {
        const XlsValidation = require('./lib/xls-validation');
        XlsValidation.validXlsx(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        })
    },
    validXlsx: (filePath) => {
        const XlsxValidation = require('./lib/xlsx-validation');
        XlsxValidation.validXlsx(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        })
    },
    validZip: (filePath) => {
        const ZipValidation = require('./lib/zip-validation');
        ZipValidation.validZip(filePath).then(() => {
            return true;
        }).catch(() => {
            return false;
        })
    }
};
