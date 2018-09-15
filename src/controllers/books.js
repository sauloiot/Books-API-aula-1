class BooksController {
    constructor(Book) {
        this.Book = Book;
    }

    get(req, res) {
       return this.Book.find({})
            .then(books => res.send(books))
            .catch(err => res.status(400).send(err.message))
    }

    getById(req, res) {
        const id = req.params.id;

        return this.Book.find({ _id: id })
            .then(books => res.send(books))
            .catch(err => res.status(400).send(err.message))
    }

    create(req, res){
        const book = req.body;
        const newBook = this.Book(book);

       return newBook.save()
        .then(() => res.status(201).send(newBook))
        .catch(err => res.status(422).send(err.message))
    }

    update(req, res) {
        const id = req.params.id
        const book = req.body;

        return this.Book.findOneAndUpdate({ _id: id }, book)
            .then(() => res.send(200))
            .catch(err => res.status(422).send(err.message))

    }

    remove(req, res){
        const id = req.params.id;

        return this.Book.remove({_id: id})
        .then(() => res.sendStatus(204))
        .catch(err => res.status(400).send(err.message))
    }
}

module.exports = BooksController;