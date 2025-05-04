const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');


router.route('/getAll').get(bookController.getAllBooks)
router.route('/save').post(bookController.createBook);
router.route('/getOne/:id').get(bookController.getBookById)
router.route('/update/:id').put(bookController.updateBookById)
router.route('/delete/:id').delete(bookController.deleteBookById);

module.exports = router;







