// const mongoose = require("mongoose");
// mongoose.connect('localhost:27017/test')
// const Schema = mongoose.Schema;

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   description: String,
// });

// const Book = mongoose.model("Book", bookSchema);

// router.get('/', function(req, res, next) {
//   res.render('index');
// });

// router.get('/get-data', function(req, res, next) {
//   Book.find()
//   .then(function(doc) {
//     res.render('index', {items:doc});
//   });
// }); 

// router.post('/insert', function(req, res, next) {
//   var item = {
//     title: req.body.title,
//     author: req.body.author,
//     description: req.body.description
//   };


// var data = new Book(item);
// data.save(); 

// res.redirect('/');
// }); 


// module.exports = Book;
