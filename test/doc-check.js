describe('DOC File test', function () {
    const DocValidation = require('../lib/doc-validation');

    it('should return as valid DOC', (done) => {
        const filePath = __dirname + '/files/doc-valid.doc';
        DocValidation.validDoc(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid DOC', (done) => {
        const filePath = __dirname + '/files/doc-only-header.doc';
        DocValidation.validDoc(filePath).then(() => {
            done(new Error('Valid DOC.'));
        }).catch((e) => {
            done();
        })
    });
});
