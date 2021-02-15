const ImageUploadError = require("./ImageUploadError");

module.exports = class Error404 extends ImageUploadError {
    constructor() {
        super("Upload error 101x: An error occurred while handling the uploaded file.");
    }
}