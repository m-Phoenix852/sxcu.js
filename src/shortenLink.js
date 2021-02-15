const superagent = require("superagent");

const ShortenedLink = require("./Link/ShortenedLink");

/**
  * @description Shorten the link.
  * @returns {Promise<ShortenedLink|Error>} Its a promise, will return an instance of the class ShortenedLink on success.
  * @param {String} url The url you want to shorten.
  * @param {String} shortener_url The shortener url, its not necessarry, defaults to https://questionable.link/shorten
  * @function shortenLink
  * @global
 */
module.exports = (url, shortener_url = "https://questionable.link/shorten") => new Promise((resolve, reject) => {
    superagent.post(shortener_url)
    .set("Content-Type", "multipart/form-data")
    .field("link", url)
    .end((err, res) => {
        if(err) return reject(err);
        
        let shortenedLink = new ShortenedLink(res.body);

        resolve(shortenedLink);                        
    })
})