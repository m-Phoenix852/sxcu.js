const ImageUploadError = require("./ImageUploadError");

module.exports = class Error407 extends ImageUploadError {
    constructor(){
        super("Subdomain is private, a valid upload token is required");
    }
}