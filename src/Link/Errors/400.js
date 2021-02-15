const CreateLinkError = require("./CreateLinkError");

module.exports = class Error400 extends CreateLinkError {
    constructor() {
        super("No link provided");
    }
}