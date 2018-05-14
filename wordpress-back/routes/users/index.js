var express = require('express');
var router = express.Router();
let {select} = require('../../mysql/index.js');

// 用户登录验证
// localhost:8080/users/login
router.post('/login',(req,res,next) => {
	res.set("Access-Control-Allow-Origin",'*');
	let{user_name,user_password} = req.body;
	//用户名正则，4到16位（字母，数字，下划线，减号）
	var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
	//输出 true
	//console.log(uPattern.test("iFat3"));
	//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
	var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
	//输出 true
	//console.log("=="+pPattern.test("iFat3#"));
	if(!uPattern.test(user_name) || !pPattern.test(user_password)){
		res.json({'msg':'用户名或密码格式不正确',status:'err'})
	}else{
		select('select user_name,user_password from users where user_name=?',[user_name]).then((info) => {
			if(info.rows.length === 0){
				res.json({'msg':'该用户不存在','status':'no'})
			}else if(info.rows[0].user_password===user_password){
				res.join({'msg':'登录成功','status':'ok'});
			}else{
				res.json({'msg':'密码错误','status':'err'});
			}
		},(info) => {
			res.json(info);
		})
	}
})


module.exports = router;