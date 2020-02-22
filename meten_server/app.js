// 引入模块
const express=require("express");
const mysql=require("mysql");
const session=require("express-session");
const cors=require("cors");  //跨域

// 创建连接池
var pool =mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"meten",
  port:3306,
  connectionLimit:15
})

// 创建web服务器
var server=express();
  //配置跨域模块
  //允许脚手架
  //每次请求验证
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true,
}))

//静态资源路径
server.use(express.static("public"));
//配置session对象，等需要登录时用

//为服务器绑定监听端口
server.listen(4000);
console.log("服务器启动...")

//多个详情页跳转
  //获取其他数据
server.get("/course_basic_other",(req,res)=>{
  var lid=req.query.lid;
  var sql="SELECT banner,title,icon1,icon2,tit1,tit2,tit3,tit4,tit5,tit6 FROM meten_details WHERE lid=?";
  pool.query(sql,[lid],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.send({code:-1,msg:"查询失败",data:[]})
    }else{
      res.send({code:1,msg:"查询成功",data:result[0]})
    }
  })
})
  //获取轮播图片
server.get("/course_basic_img",(req,res)=>{
  var lid=req.query.lid;
  var sql="SELECT img1,img2,img3,img4 FROM meten_details WHERE lid=?";
  pool.query(sql,[lid],(err,result)=>{
    if(err) throw err;
    console.log(result[0]);
    if(result.length==0){
      res.send({code:-1,msg:"查询失败",data:[]})
    }else{
      res.send({code:1,msg:"查询成功",data:result[0]})
    }
  })
})