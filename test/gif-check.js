describe('GIF File test', function () {
    const GifValidation = require('../lib/image-validation');

    it('should return as valid GIF', (done) => {
        const filePath = __dirname + '/files/gif-valid.gif';
        GifValidation.validImage(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid GIF', (done) => {
        const filePath = __dirname + '/files/gif-only-header.gif';
        GifValidation.validImage(filePath).then(() => {
            done(new Error('Valid GIF.'));
        }).catch((e) => {
            done();
        })
    });
});
