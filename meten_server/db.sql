SET NAMES UTF8;
DROP DATABASE IF EXISTS meten;
CREATE DATABASE meten CHARSET=UTF8;
#进入数据库
USE meten;
#创建数据表
CREATE TABLE meten_details(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  banner varchar(128) DEFAULT NULL,
  img1 varchar(128) DEFAULT NULL,
  img2 varchar(128) DEFAULT NULL,
  img3 varchar(128) DEFAULT NULL,
  img4 varchar(128) DEFAULT NULL,
  title varchar(64) DEFAULT NULL,
  icon1 varchar(128) DEFAULT NULL,
  icon2 varchar(128) DEFAULT NULL,
  tit1 varchar(64) DEFAULT NULL,
  tit2 varchar(64) DEFAULT NULL,
  tit3 varchar(64) DEFAULT NULL,
  tit4 varchar(64) DEFAULT NULL,
  tit5 varchar(64) DEFAULT NULL,
  tit6 varchar(64) DEFAULT NULL
);
#插入数据
INSERT INTO meten_details VALUES(1,"img/details/detail1/zer-changeBanner.jpg","img/details/detail1/ban-basic01.jpg","img/details/detail1/ban-basic02.jpg","img/details/detail1/ban-basic03.jpg","img/details/detail1/ban-basic04.jpg","零基础英语","img/details/detail1/cou-icon01.png","img/details/detail1/cou-icon02.png","免费试听","免费水平测试","纠正口音外教","场景演练","即学即用","小组分工交流");