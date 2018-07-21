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
  // Read file (Argument 1: the location of the file you want to write to ,Argument 2: the callback function)
  fs.readFile(__dirname + "/data/posts.json", function(error, file) {
    var parsedFile = JSON.parse(file);
    // console.log(file.toString());

    // The method we need to write to your hard drive is fs.writeFile (Argument 1: the location of the file you want to write to
    // Argument 2: the data you want to write
    // Argument 3: the callback function
    var yourData = req.fields.blogpost;
    var date = Date.now();

    var blogpostsLists = parsedFile;

    blogpostsLists[date] = yourData;

    console.log(blogpostsLists);

    fs.writeFile(
      __dirname + "/data/posts.json",
      JSON.stringify(blogpostsLists),
      function(error) {
        if (error) {
          console.log("Error!", error);
        }
        return;
      }
    );
  });
});

app.get("/blogLists", function(req, res) {
  res.sendFile(__dirname + "/data/posts.json");
});

// App listen takes 2 parameters: a port and a callback argument
app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
