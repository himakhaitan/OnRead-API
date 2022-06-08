// Basic Imports
const express = require("express");
const router = express.Router();

// Models Import
const Book = require("../models/Books");
const Student = require("../models/Students");

/*
METHOD: POST
URL: /books/new
DESCRIPTION: Route to Add new books
ACCESS: PRIVATE
*/
router.post("/new", (req, res) => {
    
})

module.exports = router;
