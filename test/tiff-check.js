describe('TIFF File test', function () {
    const TiffValidation = require('../lib/image-validation');

    it('should return as valid TIFF', (done) => {
        const filePath = __dirname + '/files/tiff-valid.tiff';
        TiffValidation.validImage(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid TIFF', (done) => {
        const filePath = __dirname + '/files/tiff-only-header.tiff';
        TiffValidation.validImage(filePath).then(() => {
            done(new Error('Valid TIFF.'));
        }).catch((e) => {
            done();
        })
    });
});
