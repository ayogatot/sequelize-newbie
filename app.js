const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/authors", require("./routes/authors"));
app.use("/books", require("./routes/books"))

app.listen(8000, () => console.log("Open Localhost:8000"));
