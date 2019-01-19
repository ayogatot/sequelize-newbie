const Sequelize = require("sequelize");

const connection = new Sequelize("demo_database", "root", "password", {
  dialect: "mysql"
});

const Author = connection.define("author", {
  author_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Book = connection.define("book", {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  author: Sequelize.STRING,
  author_id: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const newBook = {
  author_id: 1101,
  title: "The Book Who Lived with the Dead",
  author: "Kate Ellis"
};

const newAuthor = {
  author_id: 1101,
  name: "Kate Ellis"
};

connection
  .sync({ force: true })
  .then(() => {
    return Book.create(newBook);
  })
  .then(() => {
    return Author.create(newAuthor);
  })
  .catch(error => {
    return console.log(error);
  });
