const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
let PORT = process.env.PORT || 5501;


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }, 
  tls: {
    rejectUnauthorized: false,
  }
})

var mailOptions = {
  from: '',
  to: '',
  subject: 'O seu código de verificação',
  text: 'O seu código é '
};

transporter.sendMail(mailOptions, function(error, sucessful){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent succefully');
  }
});