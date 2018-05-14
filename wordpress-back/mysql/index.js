// 数据库接口
const mysql = require('mysql');
function createConnection(){
	let connection = mysql.createConnection({//一个描述mysql的对象
		host:'localhost',
		port:3306,
		user:'root',
		password:'root',
		database:'blog'
	});
	return connection;
}


// 测试连接
// connection.connect((err) => {
// 	if(err) throw err;
// 	console.log('连接成功');
// })

// let name = 'admin';
// let pwd = 'root';
// let sql = 'select * from users where user_name=? && user_password=?';
// connection.query(sql,[name,pwd],(err,rows) => {
// 	if(err) throw err;
// 	console.log(rows);
// })
// connection.end();//执行时会确保所有排队的任务执行完毕,connection对象就不能再使用了


const methods = {
	select(sql,query=[]){
		let connection = createConnection();
		// 异步
		return new Promise((reslove,reject) => {
			connection.query(sql,query,(err,rows) => {
				if(err){
					reject({msg:'查询错误',err,status:'err'});
				}else{
					reslove({msg:'查询成功',rows,status:'ok'});
				}
				connection.end();
			});
		});
		
	},
	insert(sql,query=[]){
		let connection = createConnection();
		return new Promise((reslove,reject) => {
			connection.query(sql,query,(err) => {
				if(err){
					reject({msg:'插入失败',err,status:'err'});
				}else{
					reslove({msg:'插入成功',status:'ok'});
				}
				connection.end();
			});
		});
	}
}


module.exports = methods;