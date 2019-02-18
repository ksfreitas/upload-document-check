describe('RAR File test', function () {
    const RarValidation = require('../lib/rar-validation');

    it(
        'should return as valid RAR', (done) => {
            const filePath = __dirname + '/files/rar-valid.rar';
            RarValidation.validRar(filePath).then(() => {
                done();
            }).catch((e) => {
                done(e);
            })
        });
    it('should return as invalid RAR', (done) => {
        const filePath = __dirname + '/files/rar-only-header.rar';
        RarValidation.validRar(filePath).then(() => {
            done(new Error('Valid RAR.'));
        }).catch((e) => {
            done();
        })
    });
});
