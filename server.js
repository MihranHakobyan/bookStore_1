const express = require('express');
const configs = require('./config/dbConfigs');
const sequelize=require('./db/conection')
const routes=require('./routes/index')
const bodyParser = require('body-parser');
const PORT = configs.PORT;

const app = express();


app.use(bodyParser.json());
app.use('/api/v1/',routes)

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`server runing at localhost:${PORT}`);
        });
        await sequelize.authenticate();
        console.log(`databes seqsesfuly contacted`);
    } catch (err) {
        console.log(err.message);
    }
}

start();