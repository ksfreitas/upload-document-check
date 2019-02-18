module.exports = {
    validDoc: (filePath) => {
        return new Promise((resolve) => {
            const DocValidation = require('./lib/doc-validation');
            DocValidation.validDoc(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            });
        });
    },
    validDocx: (filePath) => {
        return new Promise((resolve) => {
            const DocxValidation = require('./lib/docx-validation');
            DocxValidation.validDocx(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            });
        });
    },
    validImage: (filePath) => {
        return new Promise((resolve) => {
            const ImageValidation = require('./lib/image-validation');
            ImageValidation.validImage(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            })
        });
    },
    validPdf: (filePath) => {
        return new Promise((resolve) => {
            const PdfValidation = require('./lib/pdf-validation');
            PdfValidation.validPdf(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            })
        });
    },
    validPpt: (filePath) => {
        return new Promise((resolve) => {
            const PptValidation = require('./lib/ppt-validation');
            PptValidation.validPpt(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            })
        });
    },
    validPptx: (filePath) => {
        return new Promise((resolve) => {
            const PptxValidation = require('./lib/pptx-validation');
            PptxValidation.validPptx(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false)
            })
        });
    },
    validRar: (filePath) => {
        return new Promise((resolve) => {
            const RarValidation = require('./lib/rar-validation');
            RarValidation.validRar(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            })
        });
    },
    validTxt: (filePath) => {
        return new Promise((resolve) => {
            const TxtValidation = require('./lib/txt-validation');
            TxtValidation.validTxtPlain(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            })
        });
    },
    validXls: (filePath) => {
        return new Promise((resolve) => {
            const XlsValidation = require('./lib/xls-validation');
            XlsValidation.validXlsx(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            })
        });
    },
    validXlsx: (filePath) => {
        return new Promise((resolve) => {
            const XlsxValidation = require('./lib/xlsx-validation');
            XlsxValidation.validXlsx(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            })
        });
    },
    validZip: (filePath) => {
        return new Promise((resolve) => {
            const ZipValidation = require('./lib/zip-validation');
            ZipValidation.validZip(filePath).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            })
        });
    }
};
