const superagent = require("superagent");

/**
 * @exports ShortenedLink
 * @class Shortened link handler.
 * @description Used to handle a link you shortened.
 */
module.exports = class ShortenedLink {
    /**
     * @description Constructs the handler for shortened link.
     * @param {object} link_data The json object you get after shortening the link.
     * @hideconstructor
     */
    constructor(link_data) {
        /**@private */
        this.url = link_data.url;
        /**@private */
        this.del_url = link_data.del_url;
    }

    /**
     * @returns {String} The shortened link.
     * @function getUrl
     * @description Get the shortened URL.
     * @memberof ShortenedLink
     * @instance
     */
    getUrl = () => this.url;

    /**
     * @memberof ShortenedLink
     * @instance
     * @function getDelUrl
     * @description Get the delete URL to this shortened link.
     * @returns {String} The delete url of the shortified link.
     */
    getDelUrl = () => this.del_url;

    /**
     * @memberof ShortenedLink
     * @instance
     * @function delete
     * @description Delete the shortened link.
     * @returns {Promise<undefined|Error>} Promise, deletes the shortened link. Returns undefined on success.
     */
    delete = () => new Promise((resolve, reject) => {
        superagent.get(this.getDelUrl())
        .end((err, res) => {
            if(err) return reject(err);

            resolve();
        })
    })
}