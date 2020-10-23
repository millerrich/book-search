const router = require('express').Router();
const routes = require('./books');

router.use('/api/books', routes);

module.exports = router;