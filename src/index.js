/**
 * @copyright Phoenix852 2021
 * @license MIT
 * @author Phoenix852
 */
module.exports = {
  // Domain
  fetchDomains: require('./fetchDomains'),
  findDomain: require('./findDomain'),
  Domain: require('./Domain'),

  // Image/File
  Image: require('./Image'),
  ImageOgProperties: require('./Image/OgProperties'),
  UploadedImage: require('./Image/UploadedImage'),
  ImageMeta: require('./Image/ImageMeta'),

  // Collection
  Collection: require('./Collection.js'),
  NewCollection: require('./Collection/NewCollection'),
  EditCollection: require('./Collection/EditCollection'),
  CollectionMeta: require('./Collection/CollectionMeta'),

  // Link
  shortenLink: require('./shortenLink'),
  ShortenedLink: require('./Link/ShortenedLink'),

  // Text
  createPaste: require('./createPaste'),
  UploadedPaste: require('./Paste/UploadedPaste'),
};
