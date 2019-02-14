describe('TIFF File test', function () {
    const PngValidation = require('../lib/image-validation');

    it('should return as valid TIFF', (done) => {
        const filePath = __dirname + '/files/tiff-valid.tiff';
        PngValidation.validImage(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid TIFF', (done) => {
        const filePath = __dirname + '/files/tiff-only-header.tiff';
        PngValidation.validImage(filePath).then(() => {
            done(new Error('Valid TIFF.'));
        }).catch((e) => {
            done();
        })
    });
});
