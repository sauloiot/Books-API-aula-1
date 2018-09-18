const mongoose = require('mongoose');

const mongoUrl = 'mongodb://<seuLoginAqui>:<suaSenhaAqui>@ds025772.mlab.com:25772/books-app123'

const connect = () => mongoose.connect(mongoUrl)

module.exports = { connect };




    
    