const github = require('github');
const credentials = require("./credentials.json");

module.exports = (api) =>
    api.authenticate({
        type: "basic",
        username: credentials.username,
        password: credentials.password
    });
