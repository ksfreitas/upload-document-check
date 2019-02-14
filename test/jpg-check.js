describe('JPG File test', function () {
    const PngValidation = require('../lib/image-validation');

    it('should return as valid JPG', (done) => {
        const filePath = __dirname + '/files/jpg-valid.jpg';
        PngValidation.validImage(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid JPG', (done) => {
        const filePath = __dirname + '/files/jpg-only-header.jpg';
        PngValidation.validImage(filePath).then(() => {
            done(new Error('Valid JPG.'));
        }).catch((e) => {
            done();
        })
    });
});
