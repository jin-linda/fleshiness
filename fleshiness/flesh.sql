SET NAMES UTF8;
DROP DATABASE IF EXISTS flesh;
CREATE DATABASE flesh CHARSET=UTF8;
USE flesh;

CREATE TABLE flesh_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
INSERT INTO flesh_user VALUES
(1, 'ziyan', '123456abc'),
(2, 'xier', '456789abc');

CREATE TABLE flesh_art(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  atitle VARCHAR(64),
  apic VARCHAR(32),
  atext VARCHAR(1024),
  atime VARCHAR(32)
  );

INSERT INTO flesh_art VALUES
(1,'2016上海多肉展随拍：展会多肉特写集合','images/7.PNG','2016上海多肉展已经落下帷幕，展会时间为2016年11月11日至13日,文字图片版介绍可以参阅《图游2016上海多肉展》，期间相信大家也已经看过不少展会的多肉图片，不过拖延症 .......','2016/10/1'),
(2,'为什么我的多肉叶插只出根不发芽？','images/art_1.jpg','很多朋友都喜欢用叶插的方式来繁殖多肉植物，但是叶插过程中总会出现一些不尽人意的状况，其中只出根不发芽、只发芽不出根的情况最让人头疼。因为等待另一半的过程真的是很煎熬，其实出现这些状况得原因有可能只','2016/10/1'),
(3,'我用一阳台的多肉正能量，扫去全部的烦恼和忧郁~','images/art_2.jpg','生活坏到一定程度就会好起来，因为它无法更坏。努力过后，才知道许多事情，坚持坚持，就过来了。每个人的内心深处都有一个属于自己的花园,一个可以在忙碌之余放空心灵的净','2016/10/1'),
(4,'不要放弃任何一棵多肉，它会用最美的状态回馈你！','images/art_4.jpg','种肉肉最初是被儿子拉下坑的，爱上多肉植物却是缘于感叹肉肉生命力的旺盛！以前种的植物，不小心掉叶子了，断枝枝了，只能拿出去扔了！可肉肉的叶片、枝枝随手一插也就活了','2016/10/1'),
(5,'北方佳人，越冷越娇艳的多肉们！','images/art_3.jpg','草莓冰：说来今天也是赶巧了，自从天气变冷之后我就很少去天台了，实在是太冷了-_-难得我今天裹了大棉袄决定上去瞅瞅，居然从天空中飘下来了几片雪花，实在是太美啦(￣▽','2016/10/1'),
(6,'对于多肉，时间是一把猪饲料，让肉肉变得震撼与美！','images/art_7.jpg','时间，是一把猪饲料。这一把猪饲料，对于多肉，是震撼与美，对于人，不是变老就是肥，哈哈……　今天翻看空间，找到了一些老照片，发帖来个对比，纪念一下','2016/10/1'),
(7,'劳尔or罗琦？把爱的养成经典，让它本色怒放！','images/art_5.jpg','基本上每天都有人问我：帮忙看一下这个是罗琦还是劳尔，说实话我自己看不出来！直到现在，我最早买的那棵劳尔在悄悄的变化……　其实劳尔是我最早认识的一种','2016/10/1'),
(8,'一花一世界，一肉一天堂','images/art_6.jpg','寂静的日子里，阳光打在窗台上，留下长长的剪影，肉影斑驳，于无声处，诉说着柔软的情话。于是，简单平凡的生活，也因这色彩斑斓的小生命，变成了一首温柔的小诗。','2016/10/1');

CREATE TABLE flesh_art_text(
  atid INT PRIMARY KEY AUTO_INCREMENT,
  atitle VARCHAR(64)
  );

INSERT INTO flesh_art_text VALUES
(NULL,'无毒能杀菌杀杰克的神药，你要不要？'),
(NULL,'多肉联萌食用指南'),
(NULL,'多肉植物夏天为什么会变绿'),
(NULL,'夏天，小心多肉植物晒伤'),
(NULL,'多肉植物的家庭栽培(超赞超全面)'),
(NULL,'有一种植物叫多肉，有一种美丽叫老桩'),
(NULL,'1500砍头白熊放阳台，土豪世界你不懂'),
(NULL,'养多肉的好处，你知道几个？'),
(NULL,'有一种植物叫多肉，有一种美丽叫老桩'),
(NULL,'养多肉的好处，你知道几个？');

CREATE TABLE flesh_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pkind INT(2),
  pname VARCHAR(32),
  price FLOAT(10,2),
  pdecs VARCHAR(1024),
  pic VARCHAR(32),
  picSm VARCHAR(32)
);
INSERT INTO flesh_product VALUES
(1,1,'华丽风车',5,'产品来自万象花卉园，支持加盟','images/shop/a.jpg','images/shop/a_sm.jpg'),
(2,1,'千秋田之松',2,'产品来自万象花卉园，支持加盟','images/shop/b.jpg','images/shop/b_sm.jpg'),
(3,1,'粉黛园',3,'产品来自万象花卉园，支持加盟','images/shop/c.jpg','images/shop/c_sm.jpg'),
(4,1,'秋丽',5.5,'产品来自万象花卉园，支持加盟','images/shop/d.jpg','images/shop/d_sm.jpg'),
(5,1,'粉黛园',7,'产品来自万象花卉园，支持加盟','images/shop/e.jpg','images/shop/e_sm.jpg'),
(6,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/f.jpg','images/shop/f_sm.jpg'),
(7,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/g.jpg','images/shop/g_sm.jpg'),
(8,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/h.jpg','images/shop/h_sm.jpg'),
(9,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/i.jpg','images/shop/i_sm.jpg'),
(10,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/j.jpg','images/shop/j_sm.jpg'),
(11,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/k.jpg','images/shop/k_sm.jpg'),
(12,1,'粉黛园',3,'产品来自万象花卉园，支持加盟','images/shop/c.jpg','images/shop/c_sm.jpg'),
(13,1,'秋丽',5.5,'产品来自万象花卉园，支持加盟','images/shop/d.jpg','images/shop/d_sm.jpg'),
(14,1,'粉黛园',7,'产品来自万象花卉园，支持加盟','images/shop/e.jpg','images/shop/e_sm.jpg'),
(15,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/f.jpg','images/shop/f_sm.jpg'),
(16,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/g.jpg','images/shop/g_sm.jpg'),
(17,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/h.jpg','images/shop/h_sm.jpg'),
(18,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/i.jpg','images/shop/i_sm.jpg'),
(19,1,'秋丽',5.5,'产品来自万象花卉园，支持加盟','images/shop/d.jpg','images/shop/d_sm.jpg'),
(20,1,'粉黛园',7,'产品来自万象花卉园，支持加盟','images/shop/e.jpg','images/shop/e_sm.jpg'),
(21,1,'大和锦',6,'产品来自万象花卉园，支持加盟','images/shop/f.jpg','images/shop/f_sm.jpg'),
(22,2,'多肉植物圆陶粒',6,'产品来自万象花卉园，支持加盟','images/shop/2_a.jpg','images/shop/2_a_sm.jpg'),
(23,2,'多肉植物陶粒铺面土',10,'产品来自万象花卉园，支持加盟','images/shop/3_a.jpg','images/shop/3_a_sm.jpg'),
(24,2,'多肉植物鹿沼土(铺面土)',2,'产品来自万象花卉园，支持加盟','images/shop/4_a.jpg','images/shop/4_a_sm.jpg'),
(25,2,'多肉植物铺面土',4,'产品来自万象花卉园，支持加盟','images/5_a.jpg','images/shop/5_a_sm.jpg'),
(26,3,'多肉礼盒',200,'送女友礼物 多肉植物礼盒  爱意 经典版大号 成品种好发货','images/shop/product_all_1.jpg','images/shop/product_all_1.jpg'),
(27,3,'多肉礼盒',100,'送女友礼物 多肉植物礼盒  爱意 经典版大号 成品种好发货','images/shop/product_all_1.jpg','images/shop/product_all_2.jpg'),
(28,3,'多肉礼盒',560,'送女友礼物 多肉植物礼盒  爱意 经典版大号 成品种好发货','images/shop/product_all_1.jpg','images/shop/product_all_3.jpg'),
(29,3,'多肉礼盒',440,'送女友礼物 多肉植物礼盒  爱意 经典版大号 成品种好发货','images/shop/product_all_1.jpg','images/shop/product_all_4.jpg'),
(30,3,'多肉礼盒',330,'送女友礼物 多肉植物礼盒  爱意 经典版大号 成品种好发货','images/shop/product_all_1.jpg','images/shop/product_all_5.jpg'),
(31,3,'多肉礼盒',250,'送女友礼物 多肉植物礼盒  爱意 经典版大号 成品种好发货','images/shop/product_all_1.jpg','images/shop/product_all_6.jpg'),
(32,3,'多肉礼盒',220,'送女友礼物 多肉植物礼盒  爱意 经典版大号 成品种好发货','images/shop/product_all_1.jpg','images/shop/product_all_7.jpg'),
(33,3,'多肉礼盒',280,'送女友礼物 多肉植物礼盒  爱意 经典版大号 成品种好发货','images/shop/product_all_1.jpg','images/shop/product_all_7.jpg'),
(34,3,'多肉礼盒',750,'送女友礼物 多肉植物礼盒  爱意 经典版大号 成品种好发货','images/shop/product_all_1.jpg','images/shop/product_all_7.jpg');


CREATE TABLE flesh_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  userId INT
);
INSERT INTO flesh_cart VALUES( 10,  1 );

CREATE TABLE flesh_cart_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  cartId INT ,
  productId INT ,
  count INT
);
INSERT INTO flesh_cart_detail VALUES
(1, 10, 10, 3),
(2, 10, 18, 2);