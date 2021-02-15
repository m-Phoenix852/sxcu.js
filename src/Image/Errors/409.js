const ImageUploadError = require("./ImageUploadError");

module.exports = class Error404 extends ImageUploadError {
    constructor() {
        super("No file sent");
    }
}