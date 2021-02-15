const superagent = require('superagent');

const Domain = require('./Domain');

/**
 * @exports fetchDomains
 * @description Fetches the domain list and returns array of Domain instances.
 * @returns {Promise<Array<Domain>>} Array of Domains.
 * @function fetchDomains
 * @public
 * @global
 */
module.exports = () =>
  new Promise((resolve, reject) => {
    superagent.get('https://sxcu.net/api?action=domains').end((err, res) => {
      if (err) return reject(err);

      /**
       * @type {Array<Domain>}
       */
      const domains = new Array();

      res.body.forEach((meta) => domains.push(new Domain(meta)));

      return resolve(domains);
    });
  });
