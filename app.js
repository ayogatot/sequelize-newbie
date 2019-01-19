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
