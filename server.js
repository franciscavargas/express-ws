var express = require("express");
// Express Formidable library
var formidable = require("express-formidable");
var app = express();
// Anytime a blog post comes through to the server, we want to save the data on
// your computer's hard drive. To do this, we need to use a built-in Node
// module: fs, which stands for 'file-system'.
var fs = require("fs");

// Built-in middleware function that comes with Express. Serve all the static express
// in our public folder.
app.use(express.static("public"));
app.use(formidable());

// Define a route to deal with a POST request
app.post("/create-post", function(req, res) {
  console.log(req.fields);
});

// The method we need to write to your hard drive is fs.writeFile
fs.writeFile("location-of-your-file-goes-here", yourData, function(error) {
  // do something
});

// App listen takes 2 parameters: a port and a callback argument
app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
