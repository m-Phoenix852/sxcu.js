/**
 * @exports NewCollection
 * @class New collection parameter handler.
 * @description Used to create parameters when creating a new image collection. See {@link EditCollection EditCollection} to handle edit parameters.
 */
module.exports = class NewCollection {
    constructor() {
        /**@private */
        this.collection_params = {}
        this.collection_params.action = "create_collection";
    }

    /**
     * @function setTitle
     * @instance
     * @memberof NewCollection
     * @description Sets the title of the collection.
     * @param {String} title The title of the collection.
     */
    setTitle(title) {
        this.collection_params.title = title;
        return this;
    }

    /**
     * @instance
     * @memberof NewCollection
     * @function setPrivate
     * @param {Boolean} private Set this to true to set the collection private. Defaults to false.
     */
    setPrivate(_private = false) {
        this.collection_params['private'] = _private;
        return this;
    }

    /**
     * 
     * @param {Boolean} unlisted Set this to true to set the collection unlisted.
     */
    setUnlisted(unlisted = false) {
        this.collection_params.unlisted = unlisted;
        return this;
    }

    /**
     * @instance
     * @memberof NewCollection
     * @function setDescription
     * @param {String} description Description of the collection.
     */
    setDescription(description) {
        this.collection_params.description = description;
        return this;
    }
}