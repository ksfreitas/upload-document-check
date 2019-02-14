describe('DOC File test', function () {
    const PngValidation = require('../lib/doc-validation');

    it('should return as valid DOC', (done) => {
        const filePath = __dirname + '/files/doc-valid.doc';
        PngValidation.validDoc(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid DOC', (done) => {
        const filePath = __dirname + '/files/doc-only-header.doc';
        PngValidation.validDoc(filePath).then(() => {
            done(new Error('Valid DOC.'));
        }).catch((e) => {
            done();
        })
    });
});
