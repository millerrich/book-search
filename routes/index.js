const router = require('express').Router();
const routes = require('./books');

router.use('/api/books', routes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;