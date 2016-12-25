const github = require('github');
const credentials = require("./credentials");

module.exports = api =>
    api.authenticate({
        type: "basic",
        username: credentials.username,
        password: credentials.password
    });
