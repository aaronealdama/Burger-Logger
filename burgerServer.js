// Packages
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

// Serving static content
app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

const routes = require("./controllers/burgerController.js");

app.use(routes);

// PORT listening
app.listen(PORT, function() {
  console.log(`Server listening on PORT ${PORT}`);
});
