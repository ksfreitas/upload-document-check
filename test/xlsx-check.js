describe('XLSX File test', function () {
    const XlsxValidation = require('../lib/xlsx-validation');

    it(
        'should return as valid XLSX', (done) => {
            const filePath = __dirname + '/files/xlsx-valid.xlsx';
            XlsxValidation.validXlsx(filePath).then(() => {
                done();
            }).catch((e) => {
                done(e);
            })
        });
    it('should return as invalid XLSX', (done) => {
        const filePath = __dirname + '/files/xlsx-only-header.xlsx';
        XlsxValidation.validXlsx(filePath).then(() => {
            done(new Error('Valid XLSX.'));
        }).catch((e) => {
            done();
        })
    });
});
