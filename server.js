var express = require("express");
var app = express();

// Handle Function -> method is used to define a handler function in Express.
// It takes two parameters: the endpoint at which to trigger an action and the
// handler function that tells it exactly what to do.

app.get("/", function(req, res) {
  res.send("Yay Node Girls!");
});

//Create multiple endpoints and send different responses
app.get("/chocolate", function(req, res) {
  res.send("Mm chocolate :O");
});

app.get("/node", function(req, res) {
  res.send("Hujuu");
});

app.get("/girls", function(req, res) {
  res.send("girls");
});

// App listen takes 2 parameters: a port and a callback argument
app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
