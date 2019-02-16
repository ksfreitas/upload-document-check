describe('PPTX File test', function () {
    const PptxValidation = require('../lib/pptx-validation');

    it(
        'should return as valid PPTX', (done) => {
            const filePath = __dirname + '/files/pptx-valid.pptx';
            PptxValidation.validPptx(filePath).then(() => {
                done();
            }).catch((e) => {
                done(e);
            })
        });
    it('should return as invalid PPTX', (done) => {
        const filePath = __dirname + '/files/pptx-only-header.pptx';
        PptxValidation.validPptx(filePath).then(() => {
            done(new Error('Valid PPTX.'));
        }).catch((e) => {
            done();
        })
    });
});
