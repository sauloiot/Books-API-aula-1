const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database')
const booksRoutes = require('./src/routes/books');
const port = 3000

const app = express();



app.use(bodyParser.json());
app.use('/', booksRoutes);

database.connect()
.then(()=> app.listen(port, () => console.log(`App is Running on port: ${port}`)))
.catch(err =>{
    console.log(err);
    process.exit(1);

});





