describe('GIF File test', function () {
    const PngValidation = require('../lib/image-validation');

    it('should return as valid GIF', (done) => {
        const filePath = __dirname + '/files/gif-valid.gif';
        PngValidation.validImage(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid GIF', (done) => {
        const filePath = __dirname + '/files/gif-only-header.gif';
        PngValidation.validImage(filePath).then(() => {
            done(new Error('Valid GIF.'));
        }).catch((e) => {
            done();
        })
    });
});
