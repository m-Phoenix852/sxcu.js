const ImageUploadError = require("./ImageUploadError");

module.exports = class Error410 extends ImageUploadError {
    constructor() {
        super("Collection is private but no collection token provided");
    }
}