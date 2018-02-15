const express = require('express');
const router = express.Router();
const AuthControllerPolicy = require('../policies/AuthControllerPolicy');
const UserMsgController = require('../controllers/UserMsgController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kahm BackEnd' });
  console.log(`Lets get started`);
});

router.get('/api', (req, res, next)=>{
  res.send({
    msg: 'hello kahm'
  });
})

//user contact message
router.post('/api/usersendcontact', AuthControllerPolicy.userSendContact,UserMsgController.sendMsg);

module.exports = router;
