const superagent = require('superagent');

const CollectionMeta = require('./Collection/CollectionMeta');
const EditCollection = require('./Collection/EditCollection');
const NewCollection = require('./Collection/NewCollection');

/**
 * @exports Collection
 * @class Collection class, access image collections with this.
 */
module.exports = class Collection {
  /**
   * @param {String} id The id of the collection.
   * @param {String} token The very private collection token.
   */
  constructor(id, token) {
    /**@private */
    this.id = id;
    /**@private */
    this.token = token;
  }

  /**
   * @function getId
   * @description Get the ID of the collection.
   * @returns {String} ID of the collection.
   * @memberof Collection
   * @instance
   */
  getId = () => this.id;

  /**
   * @function getToken
   * @description Get the token of the collection (if any).
   * @returns {String|null} The token of the collection, if none returns null.
   * @memberof Collection
   * @instance
   */
  getToken = () => this.token || null;

  /**
   * @function fetchMeta
   * @description Fetches the meta data of the collection.
   * @returns {Promise<CollectionMeta|Error>} An instance of {@link CollectionMeta CollectionMeta} class.
   * @memberof Collection
   * @instance
   */
  fetchMeta = () =>
    new Promise((resolve, reject) => {
      superagent
        .get(`https://sxcu.net/c/${this.getId()}.json`)
        .end((err, res) => {
          if (err) return reject(err);

          let collectionMeta = new CollectionMeta(res.body);

          resolve(collectionMeta);
        });
    });

  /**
   * @description creates a new image collection.
   * @param {NewCollection} params of course the new collection parameters. See {@link NewCollection NewCollection}
   * @returns {Promise<Collection|Error>}
   * @static
   * @function createNewCollection
   * @memberof Collection
   */
  static createNewCollection = (params) =>
    new Promise(async (resolve, reject) => {
      superagent
        .post('https://sxcu.net/api/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(params.collection_params)
        .end((err, res) => {
          if (err) return reject(err);

          let collection = new Collection(
            res.body.collection_id,
            res.body.collection_token
          );

          resolve(collection);
        });
    });

  /**
   * @description Edits the collection.
   * @param {EditCollection} params The parameters for the collection edit. See {@link EditCollection EditCollection}.
   * @function editCollection
   * @memberof Collection
   * @instance
   */
  editCollection = (params) =>
    new Promise((resolve, reject) => {
      let body = params.collection_params;

      body.collection_id = this.getId();
      body.collection_token = this.getToken();

      superagent
        .post('https://sxcu.net/api/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(body)
        .end((err, res) => {
          if (err) return reject(err);

          let collection = new Collection(
            this.getId(),
            res.body.token || this.getToken()
          );

          this.token = collection.getToken(); // sets the new token if regenerated.

          resolve();
        });
    });
};
