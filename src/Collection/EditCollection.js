const NewCollection = require("./NewCollection");

/**
 * @description Used to handle collection edits. See {@link NewCollection NewCollection} to handle new collection parameters.
 * @exports EditCollection
 * @class Collection edit parameter handler.
 * @extends NewCollection
 */
module.exports = class EditCollection extends NewCollection {
    constructor() {
        super();
        /**@private */
        this.collection_params.action = "edit_collection";
    }

    /**
     * @returns {EditCollection}
     * @function regenToken
     * @memberof EditCollection
     * @instance
     * @description Regenerates the token of the collection.
     */
    regenToken(){
        this.collection_params.regen_token = 1;
        return this;
    }

    /**
     * @memberof EditCollection
     * @instance
     * @function emptyCollection
     * @description Deletes all the images in the collection.
     * @returns {EditCollection}
     */
    emptyCollection() {
        this.collection_params.empty_collection = 1;
        return this;
    }
    
    /**
     * @returns {EditCollection}
     * @description Deletes the collection.
     * @memberof EditCollection
     * @instance
     * @function deleteCollection
     */
    deleteCollection() {
        this.collection_params.delete_collection = 1;
        return this;
    }
}