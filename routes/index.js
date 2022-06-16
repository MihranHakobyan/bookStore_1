const express=require('express')
const bookRoute=require('./bookRoute')

const router=express.Router()


router.use('/book',bookRoute)


module.exports=router