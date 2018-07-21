var express = require("express");
// Express Formidable library
var formidable = require("express-formidable");
var app = express();

// Built-in middleware function that comes with Express. Serve all the static express
// in our public folder.
app.use(express.static("public"));
app.use(formidable());

// Define a route to deal with a POST request
app.post("/create-post", function(req, res) {
  console.log(req.fields);
});

// App listen takes 2 parameters: a port and a callback argument
app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
