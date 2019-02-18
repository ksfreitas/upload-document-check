describe('TXT Plain File test', function () {
    const TxtValidation = require('../lib/txt-validation');

    it('should return as valid Text Plain (CSV)', (done) => {
        const filePath = __dirname + '/files/csv-valid.csv';
        TxtValidation.validTxtPlain(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });

    it('should return as valid Text Plain (SQL)', (done) => {
        const filePath = __dirname + '/files/sql-valid.sql';
        TxtValidation.validTxtPlain(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });

    it('should return as valid Text Plain (TXT)', (done) => {
        const filePath = __dirname + '/files/txt-valid.txt';
        TxtValidation.validTxtPlain(filePath).then(() => {
            done();
        }).catch((e) => {
            done(e);
        })
    });

    it('should return as invalid Text Plain (HTML)', (done) => {
        const filePath = __dirname + '/files/html-valid.html';
        TxtValidation.validTxtPlain(filePath).then(() => {
            done(new Error('Not a text/plain.'));
        }).catch((e) => {
            done();
        })
    });
});
