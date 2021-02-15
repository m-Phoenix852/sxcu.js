module.exports = class CreateLinkError extends Error {
    constructor(message) {
        super(message);
        this.name = "CreateLinkError";
    }
}