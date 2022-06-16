const express = require('express');
const router = express.Router();

const BookController = require('../controllers/bookController');

router.post('/', BookController.createBook);
router.delete('/:id',BookController.removeBook)
router.put('/',BookController.updateBook)
router.get('/price/:price', BookController.getBookBYPrice);
router.get('/category/:name', BookController.getBookBYCategory);
router.get('/author/:name', BookController.getBookBYAuthor);


module.exports = router;