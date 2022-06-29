const Books = require('../models/books');
const {Op} = require('sequelize');

class BookService {
    static async createBook(title, author, price, category) {
        await Books.create({title, author, price, category});
    }

    static async getBookBYPrice(bookPrice) {
        return Books.findAll({
            where: {
                price: {
                    [Op.lte]: bookPrice
                }
            }
        });
    }

    static async getBookBYCategory(bookCategory){
        return Books.findAll({ where: { category:bookCategory}})
    }
    static async getBookBYAuthor(bookAuthor){
        return Books.findAll({ where: { author:bookAuthor}})
    }
    static async removeBook(bookId){
        await Books.destroy({where:{id:bookId}})
    }
    static  async updateBook(bookId,title, author, price, category){
        await Books.update({title,author,price,category}, {where:{id:bookId}});

    }

}

    module.exports = BookService;