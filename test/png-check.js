describe('PNG File test', function () {
    const PngValidation = require('../lib/image-validation');

    it('should return as valid PNG', (done) => {
        const filePath = __dirname + '/files/png-valid.png';
        PngValidation.validImage(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid PNG', (done) => {
        const filePath = __dirname + '/files/png-only-header.png';
        PngValidation.validImage(filePath).then(() => {
            done(new Error('Valid PNG.'));
        }).catch((e) => {
            done();
        })
    });
});
