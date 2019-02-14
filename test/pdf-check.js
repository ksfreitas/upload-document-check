describe('PDF File test', function () {
    const PdfValidation = require('../lib/pdf-validation');

    it('should return as valid PDF', (done) => {
        const filePath = __dirname + '/files/pdf-valid.pdf';
        PdfValidation.validPdf(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid PDF', (done) => {
        const filePath = __dirname + '/files/pdf-only-header.pdf';
        PdfValidation.validPdf(filePath).then(() => {
            done(new Error('Valid PDF.'));
        }).catch((e) => {
            done();
        })
    });
});
