const GitHubApi = require("github");
const bluebird = require('bluebird');

const github = new GitHubApi({
    debug: true,
    protocol: "https",
    host: "api.github.com",
    headers: {
        "user-agent": "track-repo-updates"
    },
    Promise: bluebird,
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
});

module.exports = github;