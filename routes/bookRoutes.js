const express = require("express");
const router = express.Router();
const Book = require("../models/Books");

// CREATE
router.post("/createBook", (req, res) => {
  console.log("Book Created");
  console.log(req.body);
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    num_of_pages: req.body.num_of_pages,
    genre: req.body.genre,
  });
  newBook
    .save()
    .then((result) => {
      console.log(result);
      return res.json({ result: result });
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error: error });
    });
});

// READ
// gets all the users --->
router.get("/allBooks", async (req, res) => {
  const books = await Book.find();

  try {
    console.log("Got all Books");
    return res.json(books);
  } catch (error) {
    return res.json({ message: "Book could not be retrieved" });
  }
});

// gets one user specified by ID --->
router.get("/singleBook/:id", (req, res) => {
  const Book = Book.findById(req.params.id);
  user.then((Book) => {
    console.log("Got Book");
    return res.json(Book);
  });
});

// UPDATE
router.put("/updateBook/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    console.log("Book Updated");
    return res.json(data);
  });
});

// DELETE
router.delete("/deleteBook/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => {
      return res
        .status(200)
        .json({ message: `Book ${req.body.title} Deleted` });
    })
    .catch((error) => {
      return res.json({ message: `Book could not be deleted ${error}` });
    });
});

module.exports = router;
