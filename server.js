var express = require("express");
var app = express();

// Built-in middleware function that comes with Express. Serve all the static express
// in our public folder.
app.use(express.static("public"));

// App listen takes 2 parameters: a port and a callback argument
app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
