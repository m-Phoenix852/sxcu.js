const ImageUploadError = require("./ImageUploadError");

module.exports = class Error404 extends ImageUploadError {
    constructor() {
        super("File is over the size limit");
    }
}