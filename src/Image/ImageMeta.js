const superagent = require("superagent");

const Collection = require("../Collection");
const OgProperties = require("./OgProperties");

/**
 * @exports ImageMeta
 * @class Image meta data handler.
 */
module.exports = class ImageMeta {
    /**
     * @hideconstructor
     * @param {Object} meta_data The fetched meta data json.
     */
    constructor(meta_data) {
        /**@private */
        this.meta_data = meta_data;
    }

    /**
     * @function getId
     * @description Get the ID of the image.
     * @memberof ImageMeta
     * @instance
     * @returns {String} Image ID.
     */
    getId = () => this.meta_data.img_id;

    /**
     * @memberof ImageMeta
     * @instance
     * @function getUrl
     * @description Get the direct URL of the image.
     * @return {String} Direct URL to the image.
     */
    getUrl = () => this.meta_data.url;

    /**
     * @memberof ImageMeta
     * @instance
     * @function getViews
     * @description Get the number of views of the image.
     * @returns {Number} View count of the image.
     */
    getViews = () => this.meta_data.views;

    /**
     * @memberof ImageMeta
     * @instance
     * @function getCollection
     * @description Get the collection in which the image is in (if any).
     * @return {Collection|null} Returns the collection of which the image is posted to, if none returns null.
     */
    getCollection = () => {
        if(this.meta_data.collection === null) return null;

        return new Collection(this.meta_data.collection, undefined);
    }

    /**
     * @memberof ImageMeta
     * @instance
     * @function getSize
     * @description Get the size of the uploaded file in bytes.
     * @return {Number} Size of file in bytes.
     */
    getSize = () => this.meta_data.size;

    /**
     * @memberof ImageMeta
     * @instance
     * @description Get the raw upload timestamp (UNIX based).
     * @function getRawUploadTime
     * @returns {Number} Raw UNIX timestamp of the upload date.
     */
    getRawUploadTime = () => this.meta_data.upload_time;

    /**
     * @memberof ImageMeta
     * @instance
     * @function getUploadTime
     * @description Get the time when the image was uploaded.
     * @return {Date} The time when the image was uploaded.
     */
    getUploadTime = () => new Date(this.getRawUploadTime());

    /**
     * @memberof ImageMeta
     * @instance
     * @function isViewable
     * @description Check if the image is viewable or was taking down for some reason.
     * @return {Boolean} if the image is viewable or not.
     */
    isViewable = () => Boolean(this.meta_data.viewable);

    /**
     * @memberof ImageMeta
     * @instance
     * @description Get the OpenGraph properties of the image.
     * @function getOgProperties
     * @returns {OgProperties|null} Returns the OpenGraph properties of the image, null if the image doesn't has any OpenGraph property.
     */
    getOgProperties = () => {
        if(typeof this.meta_data.og_properties === 'undefined' || this.meta_data.og_properties === null) return null;

        let ogprops = new OgProperties()
        .setColor(this.meta_data.og_properties.color)
        .setDescription(this.meta_data.og_properties.description)
        .setTitle(this.meta_data.og_properties.title)
        .setDiscordHideUrl(this.meta_data.og_properties.discord_hide_url);

        return ogprops;
    }
}