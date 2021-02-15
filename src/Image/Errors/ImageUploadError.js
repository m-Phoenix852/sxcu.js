/**
 * @description Check out {@link https://sxcu.net/api/docs/endpoint/img_upload Image upload API endpoint}
 * @exports ImageUploadError
 * @class Thrown if the image doesn't upload for some HTTP error.
 * @extends Error
 */
module.exports = class ImageUploadError extends Error {
  /**
   * @hideconstructor
   */
  constructor(message) {
    super(message);
    this.name = 'ImageUploadError';
  }
};
