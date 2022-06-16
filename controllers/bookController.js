const BookService = require('../services/bookService');
const Books = require('../models/books');

class BookController {
    static async createBook(req, res) {
        const {title, author, price, category} = req.body;
        await BookService.createBook(title, author, price, category);
        res.status(201).send(`Book seqsesfuly created`);
    }

    static async getBookBYPrice(req, res) {
        const books = await BookService.getBookBYPrice(req.params.price);
        res.status(200).send(books);
    }

    static async getBookBYCategory(req, res) {
        const books = await BookService.getBookBYCategory(req.params.name);
        res.status(200).send(books);
    }

    static async getBookBYAuthor(req, res) {
        const books = await BookService.getBookBYAuthor(req.params.name);
        console.log(req.params.name);
        res.status(200).send(books);
    }
    static async removeBook(req,res){
        await BookService.removeBook(req.params.id)
        res.status(200).send(`user by id ${req.params.id} deleted`)
    }
    static  async updateBook(req,res){
        const {title, author, price, category}=req.body;
        await BookService.updateBook(req.body.id,title, author, price, category)
        res.status(200).send('Book updated');

    }
}

module.exports = BookController;