const superagent = require("superagent");

/**
 * @description Used to handle a paste that you created.
 * @exports UploadedPaste
 * @class Uploaded paste handler.
 */
module.exports = class UploadedPaste {
    /**
     * @description Constructs the uploaded paste handler.
     * @param {object} upload_data The json object you get after creating the paste.
     * @hideconstructor
     */
    constructor(upload_data){
        /**@private */
        this.body = upload_data;
    }
    
    /**
     * @function getUrl
     * @description Get the URL to the paste.
     * @returns {String} The URL to the paste.
     * @memberof UploadedPaste
     * @instance
     */
    getUrl = () => this.body.url;

    /**
     * @function getDelUrl
     * @description Get the delete URL of the paste.
     * @returns {String} The delete URL of the paste.
     * @memberof UploadedPaste
     * @instance
     */
    getDelUrl = () => this.body.del_url;

    /**
     * @description Delete the paste.
     * @function deletePaste
     * @returns {Promise<undefined|Error>} Deletes the paste. Returns undefined on success.
     * @memberof UploadedPaste
     * @instance
     */
    deletePaste = () => new Promise((resolve, reject) => {
        superagent.get(this.getDelUrl())
        .end((err, res) => {
            if(err) return reject(err);
            resolve();
        })
    })
    
}