/**
 * @exports OgProperties
 * @class OpenGraph property manager class.
 */
module.exports = class OgProperties {
    constructor() {
        /**@private */
        this.props = {}        
    }

    /**
     * @param {String} color Hex code of the color.
     * @returns {OgProperties}
     * @memberof OgProperties
     * @instance
     * @function setColor
     * @description Set the color.
     */
    setColor = (color) => {
        this.props.color = color;

        return this;
    }
    
    /**
     * @memberof OgProperties
     * @instance
     * @function setTitle
     * @description Set the title.
     * @param {String} title The title what else.
     */
    setTitle = (title) => {
        this.props.title = title;

        return this;
    }

    /**
     * @memberof OgProperties
     * @instance
     * @function setDescription
     * @description Set the description.
     * @param {String} description Description.
     */
    setDescription = (description) => {
        this.props.description = description;

        return this;
    }

    /**
     * @memberof OgProperties
     * @instance
     * @function setDiscordHideUrl
     * @description Set if the URL to the image should be hidden in discord.
     * @param {Boolean} hide_url if true, discord will hide the file's URL and display only the image in chat, if false, the file's URL will also be shown. Defaults to false.
     */
    setDiscordHideUrl = (hide_url = false) => {
        this.props.discord_hide_url = hide_url;
        
        return this;
    }
}