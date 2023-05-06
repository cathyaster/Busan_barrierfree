create table freeboard (
   num int not null auto_increment,
   name char(20) not null,
   pass char(20) not null,    
   subject char(200) not null,
   content text,
   regist_day char(20),
   primary key(num)
);