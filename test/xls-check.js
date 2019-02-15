describe('XLS File test', function () {
    const XlsValidation = require('../lib/xls-validation');

    it('should return as valid XLS', (done) => {
        const filePath = __dirname + '/files/xls-valid.xls';
        XlsValidation.validXlsx(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });
    it('should return as invalid XLS', (done) => {
        const filePath = __dirname + '/files/xls-only-header.xls';
        XlsValidation.validXlsx(filePath).then(() => {
            done(new Error('Valid XLS.'));
        }).catch((e) => {
            done();
        })
    });
});
