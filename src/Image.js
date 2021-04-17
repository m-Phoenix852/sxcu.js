const superagent = require('superagent');
const fs = require('fs');

const Collection = require('./Collection');
const ImageOgProperties = require('./Image/OgProperties');
const UploadedImage = require('./Image/UploadedImage');
const ImageUploadError = require('./Image/Errors/ImageUploadError');
const ImageErrors = require('./Image/ImageErrors');

/**
 * @exports Image
 * @class Image class, used to upload image to sxcu.net
 */
module.exports = class Image {
  /**
   * @description Construct the base of the image. The upload URL and the upload token.
   * @param {String} url The upload url of the image, defaults to https:/sxcu.net/upload/.
   * @param {String} token The upload token of the domain, only needed if the domain is private.
   */
  constructor(url = 'https://sxcu.net/upload/', token) {
    /**@private */
    this.url = url;
    /**@private */
    this.token = token;

    /**@private */
    this.collection = new Collection();
    /**@private */
    this.og_properties = new ImageOgProperties();
  }

  /**
   * @function setCollection
   * @param {Collection} collection The colllection you want to upload the image to.
   * @returns {Image} This instance of the class.
   * @memberof Image
   * @instance
   */
  setCollection = (collection) => {
    /**@private */
    this.collection = collection;

    return this;
  };

  /**
   * @description Sets the OpenGraph properties of the file.
   * @function setOgProperties
   * @param {ImageOgProperties} og_props The OpenGraph properties you want to add to the upload.
   * @returns {Image} This instance of the class.
   * @memberof Image
   * @instance
   */
  setOgProperties = (og_props) => {
    /**@private */
    this.og_properties = og_props;

    return this;
  };

  /**
   * @function setNoEmbed
   * @description Running this method will return a direct URL to the uploaded image, instead of a dedicated page.
   * @returns {Image} This instance of the class.
   * @memberof Image
   * @instance
   */
  setNoEmbed = () => {
    /**@private */
    this.noembed = 1;

    return this;
  };

  /**
   * @description Attach the file you want to upload.
   * @function attachFile
   * @param {String} file The path of the file you want to upload.
   * @returns {Image} This instance of the class.
   * @memberof Image
   * @instance
   */
  attachFile = (file) => {
    if (!fs.existsSync(file)) throw Error('No such file: ' + file);
    /**@private */
    this.file = file;

    return this;
  };

  /**
   * @description Upload the image with all the configurations done.
   * @function upload
   * @returns {Promise<UploadedImage|ImageUploadError>} Its a promise, will return a instance of UploadedImage class on success.
   * @memberof Image
   * @instance
   */
  upload = () =>
    new Promise(async (resolve, reject) => {
      let formdata = {
        token: this.token,
        collection: this.collection.getId(),
        collection_token: this.collection.getToken(),
        noembed: this.noembed,
        og_properties: this.og_properties,
      };

      let req = superagent.post(this.url);
      req.set('User-Agent', 'SXCU.js');

      Object.keys(formdata).forEach((key) => {
        let value = formdata[key];

        if (value === undefined || value === null) return delete formdata[key];

        if (typeof value === 'object') value = JSON.stringify(value);

        req.field(key, value);
      });

      req.attach('image', this.file);

      req.end((err, res) => {
        if (err) {
          if (ImageErrors['Error' + err.statusCode])
            return reject(new ImageErrors['Error' + err.statusCode]());
          return reject(err);
        }

        const uploadedImage = new UploadedImage(res.body);

        resolve(uploadedImage);
      });
    });
};
