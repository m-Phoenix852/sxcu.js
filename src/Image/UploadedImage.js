const superagent = require("superagent");

const ImageMeta = require("./ImageMeta");

/**
 * @exports UploadedImage
 * @class Uploaded image handler.
 */
module.exports = class UploadedImage {
    /**
     * @description Constructs the uploaded image handler.
     * @param {object} upload_data The json object you get after uploading the image.
     * @hideconstructor
     */
    constructor(upload_data) {
        if(!upload_data) throw Error("Upload data must be a valid json object!");
        
        /**
         * @private
         */
        this.body = upload_data;
    }
    
    /**
     * @returns {String} Url of the uploaded image.
     * @function getUrl
     * @memberof UploadedImage
     * @instance
     * @description Get the URL of the image.
     */
    getUrl = () => this.body.url;
    
    /**
     * @returns {String} Delete URL of the uploaded image.
     * @memberof UploadedImage
     * @instance
     * @function getDelUrl
     * @description Get the delete URL of the image.
     */
    getDelUrl = () => this.body.del_url;
    
    /**
     * @returns {String} The thumbnail URL of the image.
     * @memberof UploadedImage
     * @instance
     * @function getThumb
     * @description Get the thumbnail URL of the image.
     */
    getThumb = () => this.body.thumb;

    /**
     * @description Running this method will delete the image.
     * @memberof UploadedImage
     * @instance
     * @function deleteImage
     */
    deleteImage = () => new Promise((resolve, reject) => {
        superagent.get(this.getDelUrl())
        .end((err, res) => {
            if(err) return reject(err);
            resolve();
        })
    })

    /**
     * @description Fetches the meta data of a image.
     * @return {Promise<ImageMeta|Error>} Promise, returns the meta data of the uploaded image.
     * @memberof UploadedImage
     * @instance
     * @function fetchMeta
     */
    fetchMeta = () => new Promise(async (resolve, reject) => {
        superagent.get(this.getUrl() + ".json")
        .end((err, res) => {
            if(err) return reject(err);

            let meta = new ImageMeta(res.body);

            resolve(meta);
        })
    })
}