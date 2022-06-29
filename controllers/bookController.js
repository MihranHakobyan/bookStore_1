const BookService = require('../services/bookService');
const Books = require('../models/books');

class BookController {
    static async createBook(req, res) {
        try {
            const {title, author, price, category} = req.body;
            await BookService.createBook(title, author, price, category);
            res.status(201).send(`Book seqsesfuly created`);
        }catch (err){
            res.status(500).send(err.message)
        }
    }

    static async getBookBYPrice(req, res) {
        try {
            const books = await BookService.getBookBYPrice(req.params.price);
            res.status(200).send(books)
        }catch (err){
            res.status(500).send(err.message)
        }
    }

    static async getBookBYCategory(req, res) {
        try {
            const books = await BookService.getBookBYCategory(req.params.name);
            res.status(200).send(books);
        }catch (err){
            res.status(500).send(err.message)
        }
    }

    static async getBookBYAuthor(req, res) {
        try {
            const books = await BookService.getBookBYAuthor(req.params.name);
            console.log(req.params.name);
            res.status(200).send(books);
        }catch (err){
            res.status(500).send(err.message)
        }
    }
    static async removeBook(req,res){
        try{
            await BookService.removeBook(req.params.id)
            res.status(200).send(`user by id ${req.params.id} deleted`)
        }catch (err){
            res.status(500).send(err.message)
        }
    }
    static  async updateBook(req,res){
        try{
            const {title, author, price, category}=req.body;
            await BookService.updateBook(req.body.id,title, author, price, category)
            res.status(200).send('Book updated');
        }catch (err){
            res.status(500).send(err.message)
        }
    }
}

module.exports = BookController;