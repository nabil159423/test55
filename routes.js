express = require('express');
router = express.Router();
let controllers1= require('./controllers/controllers1');
let controllers2= require('./controllers/controllers2');
let controllers3 = require('./controllers/controllers3');

router.get('/',(req,res)=>res.redirect('/page1'));
router.get('/page1',controllers1.function1);
router.get('/page2',controllers1.function3);
// router.get('/page2',controllers1.function2);
router.post('/page1/next',controllers1.function2);







module.exports= router;
