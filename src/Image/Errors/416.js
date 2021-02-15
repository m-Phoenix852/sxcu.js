const ImageUploadError = require("./ImageUploadError");

module.exports = class Error416 extends ImageUploadError {
    constructor(){
        super("Invalid collection token");
    }
}