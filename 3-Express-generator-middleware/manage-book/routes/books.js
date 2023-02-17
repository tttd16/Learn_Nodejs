var express = require("express");
const Joi = require("joi");
var router = express.Router();

let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];
const bookSchema = Joi.object({
  title: Joi.string().min(3).required(),
  author: Joi.string().min(6).required(),
});

// GET
router.get("/get-all", (req, res) => {
  res.send(books);
});

// POST
router.post("/create", (req, res) => {
  const bookResult = bookSchema.validate(req.body);
  if (bookResult.error) {
    return res.status(400).send(bookResult.error.details[0].message);
  }
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(book);
  res.send(book);
});

// PUT
router.put("/:id", (req, res) => {
  const findBook = books.find((book) => book.id === parseInt(req.params.id));
  if (!findBook) {
    res.status(404).send("Khong tim thay quyen sach nay");
  }

  const bookResult = bookSchema.validate(req.body);
  if (bookResult.error) {
    return res.status(400).send(bookResult.error.details[0].message);
  }

  findBook.title = req.body.title;
  findBook.author = req.body.author;
  res.send(findBook);
});

// DELETE
router.delete("/book/:id", (req, res) => {
  const findBook = books.find((book) => book.id === parseInt(req.params.id));
  if (!findBook) {
    res.status(404).send("Khong co quyen sach nay");
  }
  const index = books.indexOf(findBook);
  books.splice(index, 1);
  res.send(findBook);
});

module.exports = router;
