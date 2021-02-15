const ImageUploadError = require('./ImageUploadError');

module.exports = class Error403 extends ImageUploadError {
  constructor() {
    super('Invalid upload token');
  }
};
