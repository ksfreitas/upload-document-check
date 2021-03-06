describe('DOCX File test', function () {
    const DocxValidation = require('../lib/docx-validation');

    it('should return as valid DOCX', (done) => {
        const filePath = __dirname + '/files/docx-valid.docx';
        DocxValidation.validDocx(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid DOCX', (done) => {
        const filePath = __dirname + '/files/docx-only-header.docx';
        DocxValidation.validDocx(filePath).then(() => {
            done(new Error('Valid DOCX.'));
        }).catch((e) => {
            done();
        })
    });
});
