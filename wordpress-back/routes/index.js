var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
	res.set('Access-Control-Allow-Origin','*');
  	res.json({msg:'测试'});
});

router.post('/test',function(req, res, next) {
	res.set('Access-Control-Allow-Origin','*');
	let {id,usernam,pwd} = req.body;
  	res.json({msg:'测试',id,usernam,pwd});
});
module.exports = router;
