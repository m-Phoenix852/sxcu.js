const ImageMeta = require("../Image/ImageMeta");

/**
 * @exports CollectionMeta
 * @class Collection meta data handler.
 * @description Used to handle meta data of a image collection.
 */
module.exports = class CollectionMeta {
    /**
     * @hideconstructor
     * @param {Object} meta_data The raw JSON meta data of the collection.
     */
    constructor (meta_data) {
        /**@private */
        this.meta_data = meta_data;
    }

    /**
     * @function getId
     * @memberof CollectionMeta
     * @instance
     * @description Get the ID of the collection.
     * @returns {String} The ID of the collection.
     */
    getId = () => this.meta_data.id;
    
    /**
     * @memberof CollectionMeta
     * @instance
     * @description Get the title of the collection.
     * @function getTitle
     * @returns {String} The title of the collection.
     */
    getTitle = () => this.meta_data.title;

    /**
     * @memberof CollectionMeta
     * @instance
     * @function getDescription
     * @description Get the description of the collection.
     * @returns {String} The description of the collection.
     */
    getDescription = () => this.meta_data.desc;

    /**
     * @memberof CollectionMeta
     * @instance
     * @function getViews
     * @description The total numbers of views this collection got.
     * @returns {Number} The number of views of the collection.
     */
    getViews = () => this.meta_data.views;

    /**
     * @memberof CollectionMeta
     * @instance
     * @description Sum of all the views of all the images in this collection.
     * @function getimageViews
     * @returns {Number} The collective sum of the amount of views all of the images in this collection got.
     */
    getImageViews = () => this.meta_data.img_views;

    /**
     * @memberof CollectionMeta
     * @instance
     * @description Get the UNIX based timestamp of when the collection was created.
     * @function getRawCreationTime
     * @returns {Number} UNIX Timestamp of when the collection was created.
     */
    getRawCreationTime = () => this.meta_data.creation_time;

    /**
     * @memberof CollectionMeta
     * @instance
     * @function getCreationTime
     * @description Get the Date instance of when the collection was created.
     * @returns {Date} Date instance of when the collection was created.
     */
    getCreationTime = () => new Date(this.getRawCreationTime());

    /**
     * @memberof CollectionMeta
     * @instance
     * @function isPublic
     * @description Check if the collection is public or not.
     * @returns {Boolean} If the collection is public or not.
     */
    isPublic = () => this.meta_data.public;

    /**
     * @memberof CollectionMeta
     * @instance
     * @function isUnlisted
     * @description Check if the collection is unlisted or not.
     * @returns {Boolean} If the collection is unlisted or not.
     */
    isUnlisted = () => this.meta_data.unlisted;

    /**
     * @memberof CollectionMeta
     * @instance
     * @function getImages
     * @description Get all the images of this collection.
     * @returns {Array<ImageMeta>} Array of all the images.
     */
    getImages = () => this.meta_data.images.map(json => new ImageMeta(json));
}