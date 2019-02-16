describe('PPT File test', function () {
    const PptValidation = require('../lib/ppt-validation');

    it(
        'should return as valid PPT', (done) => {
            const filePath = __dirname + '/files/ppt-valid.ppt';
            PptValidation.validPpt(filePath).then(() => {
                done();
            }).catch((e) => {
                done(e);
            })
        });
    it('should return as invalid PPT', (done) => {
        const filePath = __dirname + '/files/ppt-only-header.ppt';
        PptValidation.validPpt(filePath).then(() => {
            done(new Error('Valid PPT.'));
        }).catch((e) => {
            done();
        })
    });
});
