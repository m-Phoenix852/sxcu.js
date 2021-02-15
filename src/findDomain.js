const SXCUjs = require('.');

const Domain = require('./Domain');

/**
 * @exports findDomain
 * @description Fetches the domains and finds information about a particular domain.
 * @returns {Promise<Domain|Error>} Finds the domain and returns class instance of it, returns null if the domain is not found.
 * @param {String} domain The domain you want to find.
 * @function findDomain
 * @public
 * @global
 */
module.exports = (domain) =>
  new Promise(async (resolve, reject) => {
    let domains = await SXCUjs.fetchDomains().catch(reject);

    let foundDomain = domains.find((d) => d.getDomain() === domain) || null;

    resolve(foundDomain);
  });
