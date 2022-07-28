const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const noodemailer = require("nodemailer");
const { response } = require("express");
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

// Route that handles pick it up logic
app.post("/pick-it", async (req, res) => {
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
  console.log("Estimated Cost :", req.body.estimatedcost);

  var name = req.body.name;
  var contactno = req.body.contactno;
  var email = req.body.email;
  var coloredBlackWhite = req.body.coloredBlackWhite;
  var color = req.body.color;
  var blacknwhite = req.body.blacknwhite;
  var file = req.body.file;
  var copies = req.body.copies;
  var pickuptime = req.body.pickuptime;
  var lamination = req.body.lamination;
  var envelope = req.body.envelope;
  var binding = req.body.binding;
  var description = req.body.description;
  var payment = req.body.payment;
  var estimatedcost = req.body.estimatedcost;

  var from = "godfreykwametwene@gmail.com";
  var to = "godfreykwametwene@gmail.com";
  var subject = `${name} has placed an Order`;
  var message = `Name : ${name}
                 Contact : ${contactno}
                 Email : ${email}
                 Colored Or Black and White :  ${coloredBlackWhite}
                 Colored : ${color}
                 Black and White : ${blacknwhite}
                 Uploaded File : ${file}
                 Number Of Copies : ${copies}
                 Pick Up Time : ${pickuptime}
                 Lamination : ${lamination}
                 Envelope : ${envelope}
                 Binding : ${binding}
                 Payment Method : ${payment} <br /> 
                 Brief Description : ${description}
                 Estimated Cost : ${estimatedcost}
                 `;

  var transporter = noodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "godfreykwametwene@gmail.com",
      pass: "jzvjofcymlboqbcr",
    },
  });

  var mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent :" + info.response);
    }
    response.redirect("/");
  });
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
