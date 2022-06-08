// Basic Imports
const express = require("express");
const router = express.Router();

// Models Import
const Book = require("../../models/Books");
const Student = require("../../models/Students");

// Validator
const bookValidator = require("../../validation/bookValidator");

/*
METHOD: POST
URL: /api/books/new
DESCRIPTION: Route to Add new books
ACCESS: PRIVATE
*/
router.post("/new", async (req, res) => {
  /* 
        Data Required
        - title
        - author
        - genre 
    */

  const { errors, isValid } = bookValidator(req.body);
  if (!isValid) {
    // Bad Request
    return res.status(400).json(errors);
  }

  // Create a new book

  const newBook = await Book.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    issuedBy: null,
  });

  if (!newBook) {
    // Internal Server Error
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }

  // Return the new book
  return res.status(200).json(newBook);
});

/*
METHOD: GET
URL: /api/books/:id
DESCRIPTION: Route to get a book by id
ACCESS: PUBLIC
*/

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Find the book by id
  const book = await Book.findByPk(parseInt(id));
  if (!book) {
    // Resource not found
    res.status(404).json({
      error: "Book not found",
    });
  }
  res.status(200).json(book);
});

module.exports = router;
