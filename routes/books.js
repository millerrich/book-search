const router = require('express').Router();
const controller = require('../controllers/booksController');

router.route('/')
    .get(controller.findAll)
    .post(controller.create);

router.route('/:id')
    .get(controller.findById)
    .delete(controller.remove);

module.exports = router;