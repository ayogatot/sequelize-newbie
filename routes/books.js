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

router
  .route("/")
  .get((req, res) => {
    Books.findAll({ raw: false }).then(books => {
      res.send({ data: books });
    });
  })

  .post((req, res) => {
    const newBooks = {
      title: req.body.title,
      author: req.body.author,
      author_id: req.body.author_id
    };

    Books.create(newBooks).then(data => {
      res.send({ data });
    });
  });
  
module.exports = router;
