const express = require('express');
const github = require('../github');
const auth = require('../github/auth');
const router = express.Router();


const findRepositoriesByName = (searchParam, resRef) => {
    auth(github);

    github.search.repos({q: searchParam})
        .then(res => resRef.send(res));
};

const searchParam = 'search';
router.get('/:' + searchParam, (req, res) =>
    findRepositoriesByName(req.params[searchParam], res));

module.exports = router;