const ImageUploadError = require("./ImageUploadError");

module.exports = class Error404 extends ImageUploadError {
    constructor() {
        super("File was not uploaded due to an server error");
    }
}