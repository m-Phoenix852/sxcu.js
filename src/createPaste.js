const superagent = require('superagent');
const UploadedPaste = require('./Paste/UploadedPaste');

/**
 * @description Creates a new paste via cancer-co.de domain.
 * @param {String} text The text you want to paste.
 * @returns {Promise<UploadedPaste|Error>} The {@link UploadedPaste UploadedPaste} instance of your paste.
 * @function createPaste
 * @global
 */
module.exports = (text) =>
  new Promise((resolve, reject) => {
    superagent
      .post('https://cancer-co.de/upload')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ text })
      .end((err, res) => {
        if (err) return reject(err);

        let paste = new UploadedPaste(res.body);

        resolve(paste);
      });
  });
