const express = require('express');
const router = express.Router();
const MsgControllerPolicy = require('../policies/MsgControllerPolicy');
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
router.post('/api/usersendcontact', MsgControllerPolicy.userSendContact,UserMsgController.sendMsg);

module.exports = router;
