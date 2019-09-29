const express = require('express');
const router = express.Router();
const Decoder = require('../helpers/decoder');
const errorMessage = 'Invalid secret message';

/* GET message listing. */
router.get('/decode', function(req, res, next) {
  let message = req.query.message;

  if(typeof message == 'undefined') return res.json({'message':errorMessage});

  let decoder = new Decoder();
  let secretMessage = message.trim().split(" ");
  
  decodedMessage = decoder.decode(secretMessage);
  
  if( decoder.findErrors(decodedMessage) ) {
    decodedMessage = errorMessage;
  } 
  else{
    decodedMessage = decodedMessage.join('');
  }
  return res.json({'message':decodedMessage})
});

module.exports = router;
