describe('ZIP File test', function () {
    const ZipValidation = require('../lib/zip-validation');

    it(
        'should return as valid ZIP', (done) => {
            const filePath = __dirname + '/files/zip-valid.zip';
            ZipValidation.validZip(filePath).then(() => {
                done();
            }).catch((e) => {
                done(e);
            })
        });
    it('should return as invalid ZIP', (done) => {
        const filePath = __dirname + '/files/zip-only-header.zip';
        ZipValidation.validZip(filePath).then(() => {
            done(new Error('Valid ZIP.'));
        }).catch((e) => {
            done();
        })
    });
});
