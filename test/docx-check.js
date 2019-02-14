describe('DOCX File test', function () {
    const PngValidation = require('../lib/docx-validation');

    it('should return as valid DOCX', (done) => {
        const filePath = __dirname + '/files/docx-valid.docx';
        PngValidation.validDocx(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid DOCX', (done) => {
        const filePath = __dirname + '/files/docx-only-header.docx';
        PngValidation.validDocx(filePath).then(() => {
            done(new Error('Valid DOCX.'));
        }).catch((e) => {
            done();
        })
    });
});
