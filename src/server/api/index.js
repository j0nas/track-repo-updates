const express = require('express');
const github = require('../github');
const router = express.Router();

const data = (searchParam, resRef) =>
    github.search.repos({q: searchParam})
        .then(res => resRef.send(res));

const searchParam = 'search';
router.get('/:' + searchParam, (req, res) =>
    data(req.params[searchParam], res));

module.exports = router;