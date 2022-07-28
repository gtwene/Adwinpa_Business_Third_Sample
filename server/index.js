const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

// We are using our packages here
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(cors());

//You can use this to check if your server is working
app.get("/", (req, res) => {
  res.send("Welcome to your server");
});

//Route that handles pick it up logic
app.post("/pick-it", (req, res) => {
  console.log("Full Name :", req.body.name);
  console.log("Contact Number :", req.body.contactno);
  console.log("Email Address :", req.body.email);
  console.log("Colored OR Black and white :", req.body.coloredBlackWhite);
  console.log("Colored :", req.body.color);
  console.log("Black and White :", req.body.blacknwhite);
  console.log("Uploaded file :", req.body.file);
  console.log("Number of copies :", req.body.copies);
  console.log("Time to pick it u :", req.body.pickuptime);
  console.log("Lamination :", req.body.lamination);
  console.log("Envelope :", req.body.envelope);
  console.log("Binding :", req.body.binding);
  console.log("Brief description of yoour work :", req.body.describe);
  console.log("Payment Method :", req.body.payment);
  console.log("Estimated Cost :", req.body.cost);
});

//Route that handles delivery logic
app.post("/deliver", (req, res) => {
  console.log(req.body.name);
  console.log(req.body.contactno);
  console.log(req.body.emailaddress);
  console.log(req.body.cbw);
});

//Start your server on a specified port
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
