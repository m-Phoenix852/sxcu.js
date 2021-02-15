/**
 * @exports Domain
 * @class Domain class, access domains with this.
 */
module.exports = class Domain {
  /**
   * @hideconstructor
   * @param {Object} meta_data The raw JSON meta data of the domain.
   */
  constructor(meta_data) {
    /**@private */
    this.meta_data = meta_data;
  }

  /**
   * @returns {String} The domain name what else.
   * @function getDomain
   * @description Get the domain name.
   * @memberof Domain
   * @instance
   */
  getDomain = () => this.meta_data.domain;

  /**
   * @function getUploadCount
   * @description Get the number of files uploaded to this domain.
   * @returns {Number} Number of uploaded images to this domain.
   * @memberof Domain
   * @instance
   */
  getUploadCount = () => this.meta_data.upload_count;

  /**
   * @function isPublic
   * @description Check if the domain is public or not.
   * @returns {Boolean} If the domain is public or not.
   * @memberof Domain
   * @instance
   */
  isPublic = () => this.meta_data.public;

  /**
   * @returns {Number} Views of all the images in the domain.
   * @function getImageViews
   * @description Sum of views of all the files uploaded to this domain.
   * @memberof Domain
   * @instance
   */
  getImageViews = () => this.meta_data.img_views;
};
