const UserMsg = require('../models/userMsgModel');
const moment = require('moment');
const nodemailer = require('nodemailer');


module.exports = {
  sendMsg (req, res, next) {
    var fullname = req.body.fullname;
    var email = req.body.email;
    var message = req.body.message;
    var contact = req.body.contact;
    var sentAt =  moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    var userMessage = {
      fullname: fullname,
      email: email,
      message: message,
      contact: contact,
      sentAt: sentAt
    };

    var userSend = new UserMsg(userMessage);
    userSend.save()
    .then(function (data) {
      console.log(data)
      res.send({
        success: 'Message sent successfully'
      })
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bellohargbola13@gmail.com',
          pass: '@Bellohargbola13'
        }
      });
      var mailOptions = {
        to: 'bellohargbola13@gmail.com',
        from: 'bellohargbola13@gmail.com',
        subject: 'Contact Response',
        html: '<h1 style="text-transform: capitalize;">Contact Response From ' + data.fullname + '</h1><p><b>Name</b>: ' + data.fullname + '</p><p><b>Email</b>: ' + data.email + '</p><p><b>Contact</b>: ' + data.contact + '</p><p style="white-spacing: pre"><b>Message</b>: ' + data.message + '</p>'
      };
      transporter.sendMail(mailOptions, function(err, info) {
        if(err)
        console.log(err);
        else
        console.log(info);
      });
    }) 
    .catch(function (error) {
      console.log(error.message)
      res.status(400).send({
        error: error
      })
    });  
  }
}