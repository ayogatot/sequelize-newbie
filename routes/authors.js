const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");

const connection = new Sequelize("demo_database", "root", "ayogatot", {
  dialect: "mysql"
});

const Author = connection.define("author", {
  author_id: {
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

router.get("/", (req, res) => {
  Author.findAll({ raw: true }).then(users => {
    res.send({ data: users });
  });
});

module.exports = router;
