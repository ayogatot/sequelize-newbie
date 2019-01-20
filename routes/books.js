const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");

const connection = new Sequelize("demo_database", "root", "ayogatot", {
  dialect: "mysql"
});

const Books = connection.define("book", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

router.get("/", (req, res) => {
  Books.findAll({ raw: false }).then(books => {
    res.send({ data: books });
  });
});

module.exports = router;
