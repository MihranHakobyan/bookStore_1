require('dotenv').config();
const config={
    PORT:process.env.PORT,
    DB_HOSTNAME:process.env.DB_HOSTNAME,
    DB_NAME:process.env.DB_NAME,
    DB_USERNAME:process.env.DB_USERNAME,
    DB_PASSWORD:process.env.DB_PASSWORD,
    DB_PORT:process.env.DB_PORT,
}

Object.freeze(config)
module.exports=config