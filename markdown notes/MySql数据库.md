





# MySql数据库

### link：https://www.bilibili.com/video/BV1Vy4y1z7EX?p=2&vd_source=1bc0f9be8a3b085d77f16eba9dd3cf11

# 数据库概述：

## 概述

![image-20230315102058291](/Users/aqiang/Library/Application Support/typora-user-images/image-20230315102058291.png)



# 安装MySql数据库管理系统

## Mac版安装教程；https://blog.csdn.net/guorenhao/article/details/124508441

## 进入MySql界面

### 启动终端，输入mysql -uroot -p , 输入密码630222wjq



# MySql常用语句

## 查看有哪些数据库：show databases; （注意结尾有分号），默认带有4个数据库

```html
+--------------------+
| Database      |
+--------------------+
| information_schema |
| mysql       |
| performance_schema |
| sys        |
+--------------------+
```

## 选择数据库：use 数据库名

```
mysql> use sys
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
```

## 创建数据库： create database 自定义的数据库名，加分号

```html
mysql> create database bjpowernode;
Query OK, 1 row affected (0.01 sec)
```

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| bjpowernode        |  // 新的数据库已创建
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)

```

## 其他常见MySQL命令

```
查看MySQL版本

mysql> select version();
+-----------+
| version() |
+-----------+
| 8.0.32    |
+-----------+
1 row in set (0.00 sec)
```

```
查看当前选择的数据库

mysql> select database();
+-------------+
| database()  |
+-------------+
| bjpowernode |
+-------------+
1 row in set (0.01 sec)
```

```
终止一行命令 \c ,注意，写命令语句时，不见分号，不执行

mysql> show
    ->
    ->
    -> \c
mysql>
```

```
退出MySQL数据库， exit

mysql> exit
Bye
```

# 数据库基本单元， 表的理解

## 概述

![](/Users/aqiang/Library/Application Support/typora-user-images/image-20230315115235159.png)

## 查看数据库中有哪些表： show tables ; 显示的是表名

```
mysql> use mysql;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+------------------------------------------------------+
| Tables_in_mysql                                      |
+------------------------------------------------------+
| columns_priv                                         |
| component                                            |
| db                                                   |
| default_roles                                        |
| engine_cost                                          |
| func                                                 |
| general_log                                          |
| global_grants                                        |
| gtid_executed                                        |
| help_category                                        |
| help_keyword                                         |
| help_relation                                        |
| help_topic                                           |
| innodb_index_stats                                   |
| innodb_table_stats                                   |
| ndb_binlog_index                                     |
| password_history                                     |
| plugin                                               |
| procs_priv                                           |
| proxies_priv                                         |
| replication_asynchronous_connection_failover         |
| replication_asynchronous_connection_failover_managed |
| replication_group_configuration_version              |
| replication_group_member_actions                     |
| role_edges                                           |
| server_cost                                          |
| servers                                              |
| slave_master_info                                    |
| slave_relay_log_info                                 |
| slave_worker_info                                    |
| slow_log                                             |
| tables_priv                                          |
| time_zone                                            |
| time_zone_leap_second                                |
| time_zone_name                                       |
| time_zone_transition                                 |
| time_zone_transition_type                            |
| user                                                 |
+------------------------------------------------------+
38 rows in set (0.00 sec)

```

# Sql语句

## 分类

### **数据查询语言DQL**

#### **Data query language**

#### 数据**查询**语言DQL基本结构是由SELECT子句，FROM子句，WHERE子句组成的查询块：

#### SELECT <字段名表>，FROM <表或视图名>，WHERE <查询条件>

### **数据操纵语言DML**

#### **Data Manipulation Language**

#### 用于操作数据的， 主要有三种形式：

1. #### 插入：INSERT    增

2. #### 删除：DELETE    删

3. #### 更新：UPDATE   改

4. #### 选择：SELECT   查选       

###  **数据定义语言DDL**

#### **Data Definition Language**

#### 用于操作表的结构的的，如

1. #### CREATE : 创建

2. #### DRAOP：删除

3. #### ALTER：更改

### **数据控制语言DCL**

#### Data Control Language

#### 比如

1. #### grant 授权

2. #### revoke 撤销

# 导入自己的数据到数据库

## 导入流程

### 以文件bjpowernode.sql为例

![image-20230315175137437](/Users/aqiang/Library/Application Support/typora-user-images/image-20230315175137437.png)

## 查看表中的数据

```
select * from 表名
```

```
mysql> select * from dept;
+--------+------------+----------+
| DEPTNO | DNAME      | LOC      |
+--------+------------+----------+
|     10 | ACCOUNTING | NEW YORK |
|     20 | RESEARCH   | DALLAS   |
|     30 | SALES      | CHICAGO  |
|     40 | OPERATIONS | BOSTON   |
+--------+------------+----------+
4 rows in set (0.00 sec)
```

```
mysql> select * from emp;
+-------+--------+-----------+------+------------+---------+---------+--------+
| EMPNO | ENAME  | JOB       | MGR  | HIREDATE   | SAL     | COMM    | DEPTNO |
+-------+--------+-----------+------+------------+---------+---------+--------+
|  7369 | SMITH  | CLERK     | 7902 | 1980-12-17 |  800.00 |    NULL |     20 |
|  7499 | ALLEN  | SALESMAN  | 7698 | 1981-02-20 | 1600.00 |  300.00 |     30 |
|  7521 | WARD   | SALESMAN  | 7698 | 1981-02-22 | 1250.00 |  500.00 |     30 |
|  7566 | JONES  | MANAGER   | 7839 | 1981-04-02 | 2975.00 |    NULL |     20 |
|  7654 | MARTIN | SALESMAN  | 7698 | 1981-09-28 | 1250.00 | 1400.00 |     30 |
|  7698 | BLAKE  | MANAGER   | 7839 | 1981-05-01 | 2850.00 |    NULL |     30 |
|  7782 | CLARK  | MANAGER   | 7839 | 1981-06-09 | 2450.00 |    NULL |     10 |
|  7788 | SCOTT  | ANALYST   | 7566 | 1987-04-19 | 3000.00 |    NULL |     20 |
|  7839 | KING   | PRESIDENT | NULL | 1981-11-17 | 5000.00 |    NULL |     10 |
|  7844 | TURNER | SALESMAN  | 7698 | 1981-09-08 | 1500.00 |    0.00 |     30 |
|  7876 | ADAMS  | CLERK     | 7788 | 1987-05-23 | 1100.00 |    NULL |     20 |
|  7900 | JAMES  | CLERK     | 7698 | 1981-12-03 |  950.00 |    NULL |     30 |
|  7902 | FORD   | ANALYST   | 7566 | 1981-12-03 | 3000.00 |    NULL |     20 |
|  7934 | MILLER | CLERK     | 7782 | 1982-01-23 | 1300.00 |    NULL |     10 |
+-------+--------+-----------+------+------------+---------+---------+--------+
14 rows in set (0.00 sec)
```

```
mysql> select * from salgrade;
+-------+-------+-------+
| GRADE | LOSAL | HISAL |
+-------+-------+-------+
|     1 |   700 |  1200 |
|     2 |  1201 |  1400 |
|     3 |  1401 |  2000 |
|     4 |  2001 |  3000 |
|     5 |  3001 |  9999 |
+-------+-------+-------+
5 rows in set (0.00 sec)
```

## 不看表中的数据，只看表单结构

### 使用 desc 表名

```
mysql> desc dept;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| DEPTNO | int         | NO   | PRI | NULL    |       |
| DNAME  | varchar(14) | YES  |     | NULL    |       |
| LOC    | varchar(13) | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```

```
mysql> desc emp;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| EMPNO    | int         | NO   | PRI | NULL    |       |
| ENAME    | varchar(10) | YES  |     | NULL    |       |
| JOB      | varchar(9)  | YES  |     | NULL    |       |
| MGR      | int         | YES  |     | NULL    |       |
| HIREDATE | date        | YES  |     | NULL    |       |
| SAL      | double(7,2) | YES  |     | NULL    |       |
| COMM     | double(7,2) | YES  |     | NULL    |       |
| DEPTNO   | int         | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
8 rows in set (0.00 sec)
```

```
mysql> desc salgrade;
+-------+------+------+-----+---------+-------+
| Field | Type | Null | Key | Default | Extra |
+-------+------+------+-----+---------+-------+
| GRADE | int  | YES  |     | NULL    |       |
| LOSAL | int  | YES  |     | NULL    |       |
| HISAL | int  | YES  |     | NULL    |       |
+-------+------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```

# DQL语句

## 查询

### 简单查询

#### 查询一个字段： select 字段名 from 表名

```
查询部门名称

mysql> select dname from dept;
+------------+
| dname      |
+------------+
| ACCOUNTING |
| RESEARCH   |
| SALES      |
| OPERATIONS |
+------------+
4 rows in set (0.00 sec)
```

#### 查询多个字段：是由逗号隔开

```
查询部门编号和名称

mysql> select deptno,dname from dept;
+--------+------------+
| deptno | dname      |
+--------+------------+
|     10 | ACCOUNTING |
|     20 | RESEARCH   |
|     30 | SALES      |
|     40 | OPERATIONS |
+--------+------------+
```



#### 查询所有字段： 使用* 号

```
mysql> select * from salgrade;
+-------+-------+-------+
| GRADE | LOSAL | HISAL |
+-------+-------+-------+
|     1 |   700 |  1200 |
|     2 |  1201 |  1400 |
|     3 |  1401 |  2000 |
|     4 |  2001 |  3000 |
|     5 |  3001 |  9999 |
+-------+-------+-------+
5 rows in set (0.00 sec)
```

![image-20230315183649347](/Users/aqiang/Library/Application Support/typora-user-images/image-20230315183649347.png)

#### 给查询的列起别名, 使用 as 关键字，注意：只是将显示的列名更改了，原表的列名不变

```
mysql> select dname as departmentname from dept;
+----------------+
| departmentname |
+----------------+
| ACCOUNTING     |
| RESEARCH       |
| SALES          |
| OPERATIONS     |
+----------------+
4 rows in set (0.00 sec)
```

![image-20230315184532843](/Users/aqiang/Library/Application Support/typora-user-images/image-20230315184532843.png)

#### 列参与计算

```
计算员工的年薪

mysql> select ename,sal*12 from emp;
+--------+----------+
| ename  | sal*12   |    // 字段名可以参与数学运算
+--------+----------+
| SMITH  |  9600.00 |
| ALLEN  | 19200.00 |
| WARD   | 15000.00 |
| JONES  | 35700.00 |
| MARTIN | 15000.00 |
| BLAKE  | 34200.00 |
| CLARK  | 29400.00 |
| SCOTT  | 36000.00 |
| KING   | 60000.00 |
| TURNER | 18000.00 |
| ADAMS  | 13200.00 |
| JAMES  | 11400.00 |
| FORD   | 36000.00 |
| MILLER | 15600.00 |
+--------+----------+
14 rows in set (0.00 sec)
```

```
同时可以自定义字段名（列名）
mysql> select ename, sal*12 as salary from emp;
+--------+----------+
| ename  | salary   |  // sal*12 改名为salary
+--------+----------+
| SMITH  |  9600.00 |
| ALLEN  | 19200.00 |
| WARD   | 15000.00 |
| JONES  | 35700.00 |
| MARTIN | 15000.00 |
| BLAKE  | 34200.00 |
| CLARK  | 29400.00 |
| SCOTT  | 36000.00 |
| KING   | 60000.00 |
| TURNER | 18000.00 |
| ADAMS  | 13200.00 |
| JAMES  | 11400.00 |
| FORD   | 36000.00 |
| MILLER | 15600.00 |
+--------+----------+
14 rows in set (0.00 sec)

```

```
mysql> select ename, sal*12 as '年薪' from emp;
+--------+----------+
| ename  | 年薪     |  // 别名可以是中文， 用单引号括起来
+--------+----------+
| SMITH  |  9600.00 |
| ALLEN  | 19200.00 |
| WARD   | 15000.00 |
| JONES  | 35700.00 |
| MARTIN | 15000.00 |
| BLAKE  | 34200.00 |
| CLARK  | 29400.00 |
| SCOTT  | 36000.00 |
| KING   | 60000.00 |
| TURNER | 18000.00 |
| ADAMS  | 13200.00 |
| JAMES  | 11400.00 |
| FORD   | 36000.00 |
| MILLER | 15600.00 |
+--------+----------+
14 rows in set (0.00 sec)
```

### 条件查询

#### 概述

![image-20230315185649135](/Users/aqiang/Library/Application Support/typora-user-images/image-20230315185649135.png)

#### 举例

```
等于

mysql> select empno,ename
    -> from emp
    -> where sal=3000; //工资等于3000的员工编号和姓名
+-------+-------+
| empno | ename |
+-------+-------+
|  7788 | SCOTT |
|  7902 | FORD  |
+-------+-------+
2 rows in set (0.00 sec)
```

```
不等于
mysql> select empno,ename
    -> from emp
    -> where sal!=3000; // 或者使用 where sal< >3000;
+-------+--------+
| empno | ename  |
+-------+--------+
|  7369 | SMITH  |
|  7499 | ALLEN  |
|  7521 | WARD   |
|  7566 | JONES  |
|  7654 | MARTIN |
|  7698 | BLAKE  |
|  7782 | CLARK  |
|  7839 | KING   |
|  7844 | TURNER |
|  7876 | ADAMS  |
|  7900 | JAMES  |
|  7934 | MILLER |
+-------+--------+
12 rows in set (0.00 sec)
```

```
大于，小于，大于等于，小于等于

mysql> select empno,ename
    -> from emp
    -> where sal>=3000;
+-------+-------+
| empno | ename |
+-------+-------+
|  7788 | SCOTT |
|  7839 | KING  |
|  7902 | FORD  |
+-------+-------+
3 rows in set (0.00 sec)
```

```
两个数之间 （包括这两个数）

 near 'mysql> select ename, sal
    -> from emp
    -> where sal between 2450 and 3000' at line 1
mysql> +-------+---------+
    -> | ename | sal     |
    -> +-------+---------+
    -> | JONES | 2975.00 |
    -> | BLAKE | 2850.00 |
    -> | CLARK | 2450.00 |
    -> | SCOTT | 3000.00 |
    -> | FORD  | 3000.00 |
    -> +-------+---------+
    -> 5 rows in set (0.00 sec)
```

```
查询数据为空的字段 使用 is null，不能使用等于号

mysql> select ename,comm
    -> from emp
    -> where comm is null;
+--------+------+
| ename  | comm |
+--------+------+
| SMITH  | NULL |
| JONES  | NULL |
| BLAKE  | NULL |
| CLARK  | NULL |
| SCOTT  | NULL |
| KING   | NULL |
| ADAMS  | NULL |
| JAMES  | NULL |
| FORD   | NULL |
| MILLER | NULL |
+--------+------+
10 rows in set (0.00 sec)
```

```
查询数据不为空的字段 使用 is not null，不能使用等于号

mysql> select ename,comm
    -> from emp
    -> where comm is not null;
+--------+---------+
| ename  | comm    |
+--------+---------+
| ALLEN  |  300.00 |
| WARD   |  500.00 |
| MARTIN | 1400.00 |
| TURNER |    0.00 |
+--------+---------+
4 rows in set (0.00 sec)
```

```
and 的使用

mysql> select ename, job, sal
    -> from emp
    -> where job ='clerk' and sal>1000;
+--------+-------+---------+
| ename  | job   | sal     |
+--------+-------+---------+
| ADAMS  | CLERK | 1100.00 |
| MILLER | CLERK | 1300.00 |
+--------+-------+---------+
2 rows in set (0.00 sec)
```

```
or 的使用

mysql> select ename, job, sal
    -> from emp
    -> where job ='clerk' or sal>1000;
+--------+-----------+---------+
| ename  | job       | sal     |
+--------+-----------+---------+
| SMITH  | CLERK     |  800.00 |
| ALLEN  | SALESMAN  | 1600.00 |
| WARD   | SALESMAN  | 1250.00 |
| JONES  | MANAGER   | 2975.00 |
| MARTIN | SALESMAN  | 1250.00 |
| BLAKE  | MANAGER   | 2850.00 |
| CLARK  | MANAGER   | 2450.00 |
| SCOTT  | ANALYST   | 3000.00 |
| KING   | PRESIDENT | 5000.00 |
| TURNER | SALESMAN  | 1500.00 |
| ADAMS  | CLERK     | 1100.00 |
| JAMES  | CLERK     |  950.00 |
| FORD   | ANALYST   | 3000.00 |
| MILLER | CLERK     | 1300.00 |
+--------+-----------+---------+
14 rows in set (0.00 sec)
```

```
in 的使用 in （ ）， 括号里相当于一个集合，注意不是区间

mysql> select ename, job, sal
    -> from emp
    -> where job ='clerk' or job='manager';
+--------+---------+---------+
| ename  | job     | sal     |
+--------+---------+---------+
| SMITH  | CLERK   |  800.00 |
| JONES  | MANAGER | 2975.00 |
| BLAKE  | MANAGER | 2850.00 |
| CLARK  | MANAGER | 2450.00 |
| ADAMS  | CLERK   | 1100.00 |
| JAMES  | CLERK   |  950.00 |
| MILLER | CLERK   | 1300.00 |
+--------+---------+---------+
7 rows in set (0.00 sec)

对比 使用 in

mysql> select ename, job, sal
    -> from emp
    -> where job in('clerk','manager');
+--------+---------+---------+
| ename  | job     | sal     |
+--------+---------+---------+
| SMITH  | CLERK   |  800.00 |
| JONES  | MANAGER | 2975.00 |
| BLAKE  | MANAGER | 2850.00 |
| CLARK  | MANAGER | 2450.00 |
| ADAMS  | CLERK   | 1100.00 |
| JAMES  | CLERK   |  950.00 |
| MILLER | CLERK   | 1300.00 |
+--------+---------+---------+
7 rows in set (0.00 sec)


或者

mysql> select ename, job, sal
    -> from emp
    -> where sal in ('800', '1300', '3000');
+--------+---------+---------+
| ename  | job     | sal     |
+--------+---------+---------+
| SMITH  | CLERK   |  800.00 |
| SCOTT  | ANALYST | 3000.00 |
| FORD   | ANALYST | 3000.00 |
| MILLER | CLERK   | 1300.00 |
+--------+---------+---------+
4 rows in set (0.00 sec)
```

```
反之，not in 的使用

mysql> select ename, job, sal
    -> from emp
    -> where sal not in ('800', '1300', '3000');
+--------+-----------+---------+
| ename  | job       | sal     |
+--------+-----------+---------+
| ALLEN  | SALESMAN  | 1600.00 |
| WARD   | SALESMAN  | 1250.00 |
| JONES  | MANAGER   | 2975.00 |
| MARTIN | SALESMAN  | 1250.00 |
| BLAKE  | MANAGER   | 2850.00 |
| CLARK  | MANAGER   | 2450.00 |
| KING   | PRESIDENT | 5000.00 |
| TURNER | SALESMAN  | 1500.00 |
| ADAMS  | CLERK     | 1100.00 |
| JAMES  | CLERK     |  950.00 |
+--------+-----------+---------+
10 rows in set (0.00 sec)
```

```
like 的使用 模糊查询

% 匹配任意多个字符，

选出名字中含有字母T的员工

mysql> select ename,job
    -> from emp
    -> where ename like '%t%';
+--------+----------+
| ename  | job      |
+--------+----------+
| SMITH  | CLERK    |
| MARTIN | SALESMAN |
| SCOTT  | ANALYST  |
| TURNER | SALESMAN |
+--------+----------+
4 rows in set (0.00 sec)

 _ 匹配任意一个字符
 
 mysql> select ename,job
    -> from emp
    -> where ename like '___t_';
+-------+---------+
| ename | job     |
+-------+---------+
| SMITH | CLERK   |
| SCOTT | ANALYST |
+-------+---------+
2 rows in set (0.00 sec)

第2个字母是A的
mysql> select ename,job
    -> from emp
    -> where ename like '_a%';
+--------+----------+
| ename  | job      |
+--------+----------+
| WARD   | SALESMAN |
| MARTIN | SALESMAN |
| JAMES  | CLERK    |
+--------+----------+
3 rows in set (0.00 sec)

```

![image-20230315195403204](/Users/aqiang/Library/Application Support/typora-user-images/image-20230315195403204.png)

## 排序

### 概述： order by +字段， 默认是升序ask， 降序是desc

### 升序

```
mysql> select ename,hiredate
    -> from emp
    -> order by hiredate; // 默认是升序asc
+--------+------------+
| ename  | hiredate   |
+--------+------------+
| SMITH  | 1980-12-17 |
| ALLEN  | 1981-02-20 |
| WARD   | 1981-02-22 |
| JONES  | 1981-04-02 |
| BLAKE  | 1981-05-01 |
| CLARK  | 1981-06-09 |
| TURNER | 1981-09-08 |
| MARTIN | 1981-09-28 |
| KING   | 1981-11-17 |
| JAMES  | 1981-12-03 |
| FORD   | 1981-12-03 |
| MILLER | 1982-01-23 |
| SCOTT  | 1987-04-19 |
| ADAMS  | 1987-05-23 |
+--------+------------+
14 rows in set (0.00 sec)
```

### 降序

```
mysql> select ename,hiredate
    -> from emp
    -> order by hiredate desc; //加desc实现降序
+--------+------------+
| ename  | hiredate   |
+--------+------------+
| ADAMS  | 1987-05-23 |
| SCOTT  | 1987-04-19 |
| MILLER | 1982-01-23 |
| JAMES  | 1981-12-03 |
| FORD   | 1981-12-03 |
| KING   | 1981-11-17 |
| MARTIN | 1981-09-28 |
| TURNER | 1981-09-08 |
| CLARK  | 1981-06-09 |
| BLAKE  | 1981-05-01 |
| JONES  | 1981-04-02 |
| WARD   | 1981-02-22 |
| ALLEN  | 1981-02-20 |
| SMITH  | 1980-12-17 |
+--------+------------+
14 rows in set (0.01 sec)

```

### 对字段排序：字段之间加逗号

```
工资按降序排，如果工资相同，则按名字的升序排序

mysql> select ename, sal
    -> from emp
    -> order by
    -> sal desc,ename asc;
+--------+---------+
| ename  | sal     |
+--------+---------+
| KING   | 5000.00 |
| FORD   | 3000.00 |
| SCOTT  | 3000.00 |
| JONES  | 2975.00 |
| BLAKE  | 2850.00 |
| CLARK  | 2450.00 |
| ALLEN  | 1600.00 |
| TURNER | 1500.00 |
| MILLER | 1300.00 |
| MARTIN | 1250.00 |
| WARD   | 1250.00 |
| ADAMS  | 1100.00 |
| JAMES  |  950.00 |
| SMITH  |  800.00 |
+--------+---------+
14 rows in set (0.00 sec)
```

### 综合案例

```
mysql> select ename, sal
    -> from emp
    -> where sal between 2000 and 3000
    -> order by sal desc;
+-------+---------+
| ename | sal     |
+-------+---------+
| SCOTT | 3000.00 |
| FORD  | 3000.00 |
| JONES | 2975.00 |
| BLAKE | 2850.00 |
| CLARK | 2450.00 |
+-------+---------+
5 rows in set (0.00 sec)
```

## 单行处理函数

### 概述

![image-20230316182204833](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316182204833.png)

### 举例

#### lowe()/ upper()

```
mysql> select lower(ename)
    -> as employeename
    -> from emp;
+--------------+
| employeename |
+--------------+
| smith        |
| allen        |
| ward         |
| jones        |
| martin       |
| blake        |
| clark        |
| scott        |
| king         |
| turner       |
| adams        |
| james        |
| ford         |
| miller       |
+--------------+
14 rows in set (0.00 sec)
```

#### Substr( ) 截取字符串，不能从0开始，后面接需要截取的长度

```
mysql> select substr(ename,1,1)
    -> from emp;
+-------------------+
| substr(ename,1,1) |
+-------------------+
| S                 |
| A                 |
| W                 |
| J                 |
| M                 |
| B                 |
| C                 |
| S                 |
| K                 |
| T                 |
| A                 |
| J                 |
| F                 |
| M                 |
+-------------------+
14 rows in set (0.00 sec)
```

#### Contact() 拼接字符串

```
mysql> select concat(ename,'-',sal) as item
    -> from emp;
+----------------+
| item           |
+----------------+
| SMITH-800.00   |
| ALLEN-1600.00  |
| WARD-1250.00   |
| JONES-2975.00  |
| MARTIN-1250.00 |
| BLAKE-2850.00  |
| CLARK-2450.00  |
| SCOTT-3000.00  |
| KING-5000.00   |
| TURNER-1500.00 |
| ADAMS-1100.00  |
| JAMES-950.00   |
| FORD-3000.00   |
| MILLER-1300.00 |
+----------------+
14 rows in set (0.00 sec)
```

#### length（）

```
mysql> select length(ename)
    -> from emp;
+---------------+
| length(ename) |
+---------------+
|             5 |
|             5 |
|             4 |
|             5 |
|             6 |
|             5 |
|             5 |
|             5 |
|             4 |
|             6 |
|             5 |
|             5 |
|             4 |
|             6 |
+---------------+
14 rows in set (0.00 sec)
```

#### trim（）去空格

```
mysql> select ename
    -> from emp
    -> where ename=trim('    king    ');
+-------+
| ename |
+-------+
| KING  |
+-------+
1 row in set (0.00 sec)
```

#### around（数字，保留小数点位数）四舍五入

```
保留0位，取整
mysql> select round(1234.5678,0)
    -> from emp;
+--------------------+
| round(1234.5678,0) |
+--------------------+
|               1235 |
|               1235 |
|               1235 |
|               1235 |
|               1235 |
|               1235 |
|               1235 |
|               1235 |
|               1235 |
|               1235 |
|               1235 |
|               1235 |
|               1235 |
|               1235 |
+--------------------+
14 rows in set (0.00 sec)

保留2位

mysql> select round(1234.5678,2)
    -> from emp;
+--------------------+
| round(1234.5678,2) |
+--------------------+
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
|            1234.57 |
+--------------------+
14 rows in set (0.00 sec)

保留到10位

mysql> select round(1234.5678,-1)
    -> from emp;
+---------------------+
| round(1234.5678,-1) |
+---------------------+
|                1230 |
|                1230 |
|                1230 |
|                1230 |
|                1230 |
|                1230 |
|                1230 |
|                1230 |
|                1230 |
|                1230 |
|                1230 |
|                1230 |
|                1230 |
|                1230 |
+---------------------+
14 rows in set (0.00 sec)

保留到百位

mysql> select round(1234.5678,-2)
    -> from emp;
+---------------------+
| round(1234.5678,-2) |
+---------------------+
|                1200 |
|                1200 |
|                1200 |
|                1200 |
|                1200 |
|                1200 |
|                1200 |
|                1200 |
|                1200 |
|                1200 |
|                1200 |
|                1200 |
|                1200 |
|                1200 |
+---------------------+
14 rows in set (0.00 sec)
```

#### Rand() 生成随机数

```
生成随机数
mysql> select rand()
    -> from emp;
+----------------------+
| rand()               |
+----------------------+
|    0.208928879545004 |
|  0.04141717221719881 |
|    0.580299253184627 |
|   0.7772447800051838 |
|  0.14532617120568284 |
|   0.3948965467465078 |
|   0.5385042508491354 |
|   0.5078316447397989 |
|    0.923645501885233 |
|   0.0947326059404133 |
|   0.7027265547800126 |
|  0.22943498681246768 |
| 0.038995300455945826 |
|   0.5066715725759711 |
+----------------------+
14 rows in set (0.00 sec)

生成100以内的随机数

mysql> select round(rand()*100)
    -> from emp;
+-------------------+
| round(rand()*100) |
+-------------------+
|                42 |
|                56 |
|                56 |
|                12 |
|                89 |
|                13 |
|                96 |
|                41 |
|                17 |
|                64 |
|                66 |
|                39 |
|                96 |
|                63 |
+-------------------+
14 rows in set (0.00 sec)
```

#### If null 空处理函数： 如果数据为NULL， 把NULL当做一个设定的值

```
mysql> select ename,
    -> (sal + ifnull(comm,0))*12
    -> as yearsalary
    -> from emp;
+--------+------------+
| ename  | yearsalary |
+--------+------------+
| SMITH  |    9600.00 |
| ALLEN  |   22800.00 |
| WARD   |   21000.00 |
| JONES  |   35700.00 |
| MARTIN |   31800.00 |
| BLAKE  |   34200.00 |
| CLARK  |   29400.00 |
| SCOTT  |   36000.00 |
| KING   |   60000.00 |
| TURNER |   18000.00 |
| ADAMS  |   13200.00 |
| JAMES  |   11400.00 |
| FORD   |   36000.00 |
| MILLER |   15600.00 |
+--------+------------+
14 rows in set (0.00 sec)
```

#### Case ... when ... then ... when ... then ... else ... end

```
mysql> select ename, job,sal as oldsale,
    -> (case job when 'manager' then sal*1.5 when 'salesman' then sal*3 else sal end)
    -> as newsal
    -> from emp;
+--------+-----------+---------+---------+
| ename  | job       | oldsale | newsal  |
+--------+-----------+---------+---------+
| SMITH  | CLERK     |  800.00 |  800.00 |
| ALLEN  | SALESMAN  | 1600.00 | 4800.00 |
| WARD   | SALESMAN  | 1250.00 | 3750.00 |
| JONES  | MANAGER   | 2975.00 | 4462.50 |
| MARTIN | SALESMAN  | 1250.00 | 3750.00 |
| BLAKE  | MANAGER   | 2850.00 | 4275.00 |
| CLARK  | MANAGER   | 2450.00 | 3675.00 |
| SCOTT  | ANALYST   | 3000.00 | 3000.00 |
| KING   | PRESIDENT | 5000.00 | 5000.00 |
| TURNER | SALESMAN  | 1500.00 | 4500.00 |
| ADAMS  | CLERK     | 1100.00 | 1100.00 |
| JAMES  | CLERK     |  950.00 |  950.00 |
| FORD   | ANALYST   | 3000.00 | 3000.00 |
| MILLER | CLERK     | 1300.00 | 1300.00 |
+--------+-----------+---------+---------+
14 rows in set (0.00 sec)
```

## 分组函数(多行处理函数)

### 概述

![image-20230316193505676](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316193505676.png)

### 练习

#### count

```
mysql> select count(ename)
    -> from emp;
+--------------+
| count(ename) |
+--------------+
|           14 |
+--------------+
1 row in set (0.00 sec)
```

#### sum

```
mysql> select sum(sal)
    -> from emp;
+----------+
| sum(sal) |
+----------+
| 29025.00 |
+----------+
1 row in set (0.00 sec)
```

#### avg

```
mysql> select avg(sal)
    -> from emp;
+-------------+
| avg(sal)    |
+-------------+
| 2073.214286 |
+-------------+
1 row in set (0.00 sec)
```

#### max

```
mysql> select max(sal)
    -> from emp;
+----------+
| max(sal) |
+----------+
|  5000.00 |
+----------+
1 row in set (0.00 sec)
```

#### Min

```
mysql> select min(sal)
    -> from emp;
+----------+
| min(sal) |
+----------+
|   800.00 |
+----------+
1 row in set (0.00 sec)
```

### 使用时注意事项

#### 注意事项1

![image-20230316194226871](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316194226871.png)

```
mysql> select count(comm)
    -> from emp;
+-------------+
| count(comm) |
+-------------+
|           4 | // 实际上有14个，其中10个位NULL， count函数自动忽略null
+-------------+
1 row in set (0.00 sec)
```

```
mysql> select sum(comm)
    -> from emp;
+-----------+
| sum(comm) |
+-----------+
|   2200.00 |
+-----------+
1 row in set (0.00 sec)
```

#### 注意事项2

![image-20230316194844627](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316194844627.png)

![image-20230316195011664](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316195011664.png)

#### 注意事项3

![image-20230316195209540](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316195209540.png)

#### 注意事项4

![image-20230316195315308](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316195315308.png)

## 分组查询

### 概述

![image-20230316195521242](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316195521242.png)

### 练习

#### 所有关键字的完整组合，看一下他们的执行顺序

![image-20230316195810901](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316195810901.png)

![image-20230316202114743](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316202114743.png)

```
mysql> select job, sum(sal)
    -> from emp
    -> group by job;
+-----------+----------+
| job       | sum(sal) |
+-----------+----------+
| CLERK     |  4150.00 |
| SALESMAN  |  5600.00 |
| MANAGER   |  8275.00 |
| ANALYST   |  6000.00 |
| PRESIDENT |  5000.00 |
+-----------+----------+
5 rows in set (0.01 sec)
```

![image-20230316203212407](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316203212407.png)

```
找出每个部门的最高薪资

mysql> select deptno, max(sal)
    -> from emp
    -> group by deptno;
+--------+----------+
| deptno | max(sal) |
+--------+----------+
|     20 |  3000.00 |
|     30 |  2850.00 |
|     10 |  5000.00 |
+--------+----------+
3 rows in set (0.00 sec)
```

#### 多个字段联合分组

```
找出每个部门，不同工作岗位的最高薪资

mysql> select deptno,job,max(sal)
    -> from emp
    -> group by deptno,job;
+--------+-----------+----------+
| deptno | job       | max(sal) |
+--------+-----------+----------+
|     20 | CLERK     |  1100.00 |
|     30 | SALESMAN  |  1600.00 |
|     20 | MANAGER   |  2975.00 |
|     30 | MANAGER   |  2850.00 |
|     10 | MANAGER   |  2450.00 |
|     20 | ANALYST   |  3000.00 |
|     10 | PRESIDENT |  5000.00 |
|     30 | CLERK     |   950.00 |
|     10 | CLERK     |  1300.00 |
+--------+-----------+----------+
9 rows in set (0.00 sec)
```

#### 使用having 过滤数据

![image-20230316204620261](/Users/aqiang/Library/Application Support/typora-user-images/image-20230316204620261.png)

![image-20230317163729155](/Users/aqiang/Library/Application Support/typora-user-images/image-20230317163729155.png)

![image-20230317163839178](/Users/aqiang/Library/Application Support/typora-user-images/image-20230317163839178.png)

![image-20230317164137717](/Users/aqiang/Library/Application Support/typora-user-images/image-20230317164137717.png)

### 总结

![image-20230317164337878](/Users/aqiang/Library/Application Support/typora-user-images/image-20230317164337878.png)

![image-20230317164546445](/Users/aqiang/Library/Application Support/typora-user-images/image-20230317164546445.png)

```
找出每个工作岗位（除manager之外）的平均薪资，要求显示平均工资大于1500的，并按照平均工资降序排列

mysql> select job, avg(sal) as average_sal
    -> from emp
    -> where job <> 'manager'
    -> group by job
    -> having avg(sal)>1500
    -> order by avg(sal) desc;
+-----------+-------------+
| job       | average_sal |
+-----------+-------------+
| PRESIDENT | 5000.000000 |
| ANALYST   | 3000.000000 |
+-----------+-------------+
2 rows in set (0.01 sec)
```

### 查询结果去重，distinct

#### 语法

```
mysql> select distinct job
    -> from emp;
+-----------+
| job       |
+-----------+
| CLERK     |
| SALESMAN  |
| MANAGER   |
| ANALYST   |
| PRESIDENT |
+-----------+
5 rows in set (0.01 sec)
```

#### 注意： distinct必须放在所以字段之前，多个字段是，去重多字段组合的结果

```
mysql> select distinct job, deptno
    -> from emp;
+-----------+--------+
| job       | deptno |
+-----------+--------+
| CLERK     |     20 |
| SALESMAN  |     30 |
| MANAGER   |     20 |
| MANAGER   |     30 |
| MANAGER   |     10 |
| ANALYST   |     20 |
| PRESIDENT |     10 |
| CLERK     |     30 |
| CLERK     |     10 |
+-----------+--------+
9 rows in set (0.00 sec)
```

#### 应用：统计一下工作岗位的数量

```
mysql> select count(distinct job)
    -> from emp;
+---------------------+
| count(distinct job) |
+---------------------+
|                   5 |
+---------------------+
1 row in set (0.00 sec)
```



## 连接查询

### 概述

![image-20230317173234658](/Users/aqiang/Library/Application Support/typora-user-images/image-20230317173234658.png)

![image-20230317173328635](/Users/aqiang/Library/Application Support/typora-user-images/image-20230317173328635.png)

### 两张表联合查询

```
1, 两种表没有做任何限制的联合查询时，两张表中的数据都会一一连接，最终的记录是2张表各项数目的乘积，
   这种现象称为笛卡尔积现象
   
   mysql> select ename,dname
    -> from emp,dept;
+--------+------------+
| ename  | dname      |
+--------+------------+
| SMITH  | OPERATIONS |
| SMITH  | SALES      |
| SMITH  | RESEARCH   |
| SMITH  | ACCOUNTING |
| ALLEN  | OPERATIONS |
| ALLEN  | SALES      |
| ALLEN  | RESEARCH   |
| ALLEN  | ACCOUNTING |
| WARD   | OPERATIONS |
| WARD   | SALES      |
| WARD   | RESEARCH   |
| WARD   | ACCOUNTING |
| JONES  | OPERATIONS |
| JONES  | SALES      |
| JONES  | RESEARCH   |
| JONES  | ACCOUNTING |
| MARTIN | OPERATIONS |
| MARTIN | SALES      |
| MARTIN | RESEARCH   |
| MARTIN | ACCOUNTING |
| BLAKE  | OPERATIONS |
| BLAKE  | SALES      |
| BLAKE  | RESEARCH   |
| BLAKE  | ACCOUNTING |
| CLARK  | OPERATIONS |
| CLARK  | SALES      |
| CLARK  | RESEARCH   |
| CLARK  | ACCOUNTING |
| SCOTT  | OPERATIONS |
| SCOTT  | SALES      |
| SCOTT  | RESEARCH   |
| SCOTT  | ACCOUNTING |
| KING   | OPERATIONS |
| KING   | SALES      |
| KING   | RESEARCH   |
| KING   | ACCOUNTING |
| TURNER | OPERATIONS |
| TURNER | SALES      |
| TURNER | RESEARCH   |
| TURNER | ACCOUNTING |
| ADAMS  | OPERATIONS |
| ADAMS  | SALES      |
| ADAMS  | RESEARCH   |
| ADAMS  | ACCOUNTING |
| JAMES  | OPERATIONS |
| JAMES  | SALES      |
| JAMES  | RESEARCH   |
| JAMES  | ACCOUNTING |
| FORD   | OPERATIONS |
| FORD   | SALES      |
| FORD   | RESEARCH   |
| FORD   | ACCOUNTING |
| MILLER | OPERATIONS |
| MILLER | SALES      |
| MILLER | RESEARCH   |
| MILLER | ACCOUNTING |
+--------+------------+
56 rows in set (0.00 sec)
```

```
2. 连接2张表示，添加限制条件，可以避免笛卡尔积现象

mysql> select ename,dname
    -> from emp,dept
    -> where emp.deptno=dept.deptno;
+--------+------------+
| ename  | dname      |
+--------+------------+
| SMITH  | RESEARCH   |
| ALLEN  | SALES      |
| WARD   | SALES      |
| JONES  | RESEARCH   |
| MARTIN | SALES      |
| BLAKE  | SALES      |
| CLARK  | ACCOUNTING |
| SCOTT  | RESEARCH   |
| KING   | ACCOUNTING |
| TURNER | SALES      |
| ADAMS  | RESEARCH   |
| JAMES  | SALES      |
| FORD   | RESEARCH   |
| MILLER | ACCOUNTING |
+--------+------------+
14 rows in set (0.00 sec)

查询记录显示的是14条，但实际查询过程还是匹配了56次，只不过进行了4选一的操作
```

```
3. 提高查询效率，可以给表其别名，值查找对应表里的字段
mysql> select e.ename, d.dname
    -> from emp e, dept d
    -> where e.deptno=d.deptno;   // sql92的语法
+--------+------------+
| ename  | dname      |
+--------+------------+
| SMITH  | RESEARCH   |
| ALLEN  | SALES      |
| WARD   | SALES      |
| JONES  | RESEARCH   |
| MARTIN | SALES      |
| BLAKE  | SALES      |
| CLARK  | ACCOUNTING |
| SCOTT  | RESEARCH   |
| KING   | ACCOUNTING |
| TURNER | SALES      |
| ADAMS  | RESEARCH   |
| JAMES  | SALES      |
| FORD   | RESEARCH   |
| MILLER | ACCOUNTING |
+--------+------------+
14 rows in set (0.01 sec)
```

### 内连接之等值连接

#### 概述

![image-20230318101842612](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318101842612.png)

![image-20230318101958638](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318101958638.png)

#### 案例：使用SQL99语法

```
mysql> select e.ename, d.dname
    -> from emp e
    -> inner join dept d
    -> on e.deptno=d.deptno;
+--------+------------+
| ename  | dname      |
+--------+------------+
| SMITH  | RESEARCH   |
| ALLEN  | SALES      |
| WARD   | SALES      |
| JONES  | RESEARCH   |
| MARTIN | SALES      |
| BLAKE  | SALES      |
| CLARK  | ACCOUNTING |
| SCOTT  | RESEARCH   |
| KING   | ACCOUNTING |
| TURNER | SALES      |
| ADAMS  | RESEARCH   |
| JAMES  | SALES      |
| FORD   | RESEARCH   |
| MILLER | ACCOUNTING |
+--------+------------+
14 rows in set (0.00 sec)
```



### 内链接之非等值连接

#### 概述：限制条件不是一个等值关系

#### 案例：查找员工的薪资等级，要求显示姓名，薪资，薪资等级

```
mysql> select * from emp;
+-------+--------+-----------+------+------------+---------+---------+--------+
| EMPNO | ENAME  | JOB       | MGR  | HIREDATE   | SAL     | COMM    | DEPTNO |
+-------+--------+-----------+------+------------+---------+---------+--------+
|  7369 | SMITH  | CLERK     | 7902 | 1980-12-17 |  800.00 |    NULL |     20 |
|  7499 | ALLEN  | SALESMAN  | 7698 | 1981-02-20 | 1600.00 |  300.00 |     30 |
|  7521 | WARD   | SALESMAN  | 7698 | 1981-02-22 | 1250.00 |  500.00 |     30 |
|  7566 | JONES  | MANAGER   | 7839 | 1981-04-02 | 2975.00 |    NULL |     20 |
|  7654 | MARTIN | SALESMAN  | 7698 | 1981-09-28 | 1250.00 | 1400.00 |     30 |
|  7698 | BLAKE  | MANAGER   | 7839 | 1981-05-01 | 2850.00 |    NULL |     30 |
|  7782 | CLARK  | MANAGER   | 7839 | 1981-06-09 | 2450.00 |    NULL |     10 |
|  7788 | SCOTT  | ANALYST   | 7566 | 1987-04-19 | 3000.00 |    NULL |     20 |
|  7839 | KING   | PRESIDENT | NULL | 1981-11-17 | 5000.00 |    NULL |     10 |
|  7844 | TURNER | SALESMAN  | 7698 | 1981-09-08 | 1500.00 |    0.00 |     30 |
|  7876 | ADAMS  | CLERK     | 7788 | 1987-05-23 | 1100.00 |    NULL |     20 |
|  7900 | JAMES  | CLERK     | 7698 | 1981-12-03 |  950.00 |    NULL |     30 |
|  7902 | FORD   | ANALYST   | 7566 | 1981-12-03 | 3000.00 |    NULL |     20 |
|  7934 | MILLER | CLERK     | 7782 | 1982-01-23 | 1300.00 |    NULL |     10 |
+-------+--------+-----------+------+------------+---------+---------+--------+
14 rows in set (0.00 sec)


mysql> select* from salgrade;
+-------+-------+-------+
| GRADE | LOSAL | HISAL |
+-------+-------+-------+
|     1 |   700 |  1200 |
|     2 |  1201 |  1400 |
|     3 |  1401 |  2000 |
|     4 |  2001 |  3000 |
|     5 |  3001 |  9999 |
+-------+-------+-------+
5 rows in set (0.00 sec)


mysql> select e.ename, e.sal, s.grade
    -> from emp e
    -> inner join salgrade s
    -> on e.sal
    -> between s.losal and s.hisal; // 非等值条件
+--------+---------+-------+
| ename  | sal     | grade |
+--------+---------+-------+
| SMITH  |  800.00 |     1 |
| ALLEN  | 1600.00 |     3 |
| WARD   | 1250.00 |     2 |
| JONES  | 2975.00 |     4 |
| MARTIN | 1250.00 |     2 |
| BLAKE  | 2850.00 |     4 |
| CLARK  | 2450.00 |     4 |
| SCOTT  | 3000.00 |     4 |
| KING   | 5000.00 |     5 |
| TURNER | 1500.00 |     3 |
| ADAMS  | 1100.00 |     1 |
| JAMES  |  950.00 |     1 |
| FORD   | 3000.00 |     4 |
| MILLER | 1300.00 |     2 |
+--------+---------+-------+
14 rows in set (0.01 sec)
```

### 内连接之自连接

#### 概述：将一张表看成两张表，分别取2个别名

#### 案例：查询员工的上级领导，要求显示员工名和领导名

```
mysql> select * from emp;
+-------+--------+-----------+------+------------+---------+---------+--------+
| EMPNO | ENAME  | JOB       | MGR  | HIREDATE   | SAL     | COMM    | DEPTNO |
+-------+--------+-----------+------+------------+---------+---------+--------+
|  7369 | SMITH  | CLERK     | 7902 | 1980-12-17 |  800.00 |    NULL |     20 |
|  7499 | ALLEN  | SALESMAN  | 7698 | 1981-02-20 | 1600.00 |  300.00 |     30 |
|  7521 | WARD   | SALESMAN  | 7698 | 1981-02-22 | 1250.00 |  500.00 |     30 |
|  7566 | JONES  | MANAGER   | 7839 | 1981-04-02 | 2975.00 |    NULL |     20 |
|  7654 | MARTIN | SALESMAN  | 7698 | 1981-09-28 | 1250.00 | 1400.00 |     30 |
|  7698 | BLAKE  | MANAGER   | 7839 | 1981-05-01 | 2850.00 |    NULL |     30 |
|  7782 | CLARK  | MANAGER   | 7839 | 1981-06-09 | 2450.00 |    NULL |     10 |
|  7788 | SCOTT  | ANALYST   | 7566 | 1987-04-19 | 3000.00 |    NULL |     20 |
|  7839 | KING   | PRESIDENT | NULL | 1981-11-17 | 5000.00 |    NULL |     10 |
|  7844 | TURNER | SALESMAN  | 7698 | 1981-09-08 | 1500.00 |    0.00 |     30 |
|  7876 | ADAMS  | CLERK     | 7788 | 1987-05-23 | 1100.00 |    NULL |     20 |
|  7900 | JAMES  | CLERK     | 7698 | 1981-12-03 |  950.00 |    NULL |     30 |
|  7902 | FORD   | ANALYST   | 7566 | 1981-12-03 | 3000.00 |    NULL |     20 |
|  7934 | MILLER | CLERK     | 7782 | 1982-01-23 | 1300.00 |    NULL |     10 |
+-------+--------+-----------+------+------------+---------+---------+--------+
14 rows in set (0.00 sec)

mysql> select e.ename, m.ename
    -> from emp e
    -> join emp m
    -> on e.mgr=m.empno; // 员工的领导编号等于领导的员工编号
+--------+-------+
| ename  | ename |
+--------+-------+
| SMITH  | FORD  |
| ALLEN  | BLAKE |
| WARD   | BLAKE |
| JONES  | KING  |
| MARTIN | BLAKE |
| BLAKE  | KING  |
| CLARK  | KING  |
| SCOTT  | JONES |
| TURNER | BLAKE |
| ADAMS  | SCOTT |
| JAMES  | BLAKE |
| FORD   | JONES |
| MILLER | CLARK |
+--------+-------+
13 rows in set (0.00 sec)
```

### 外连接

#### 概述

![image-20230318105141656](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318105141656.png)

#### 练习: 查询每个员工的上级领导，要求显示所以员工和领导的名字

```
mysql> select empno, ename,mgr from emp;
+-------+--------+------+
| empno | ename  | mgr  |
+-------+--------+------+
|  7369 | SMITH  | 7902 |
|  7499 | ALLEN  | 7698 |
|  7521 | WARD   | 7698 |
|  7566 | JONES  | 7839 |
|  7654 | MARTIN | 7698 |
|  7698 | BLAKE  | 7839 |
|  7782 | CLARK  | 7839 |
|  7788 | SCOTT  | 7566 |
|  7839 | KING   | NULL |
|  7844 | TURNER | 7698 |
|  7876 | ADAMS  | 7788 |
|  7900 | JAMES  | 7698 |
|  7902 | FORD   | 7566 |
|  7934 | MILLER | 7782 |
+-------+--------+------+
14 rows in set (0.00 sec)

mysql> select
    -> e.ename,m.ename
    -> from
    -> emp e
    -> left join // 左连接，把左边的表emp e 看做主表，查询主表里的所有项
    -> emp m
    -> on
    -> e.mgr=m.empno;
+--------+-------+
| ename  | ename |
+--------+-------+
| SMITH  | FORD  |
| ALLEN  | BLAKE |
| WARD   | BLAKE |
| JONES  | KING  |
| MARTIN | BLAKE |
| BLAKE  | KING  |
| CLARK  | KING  |
| SCOTT  | JONES |
| KING   | NULL  |
| TURNER | BLAKE |
| ADAMS  | SCOTT |
| JAMES  | BLAKE |
| FORD   | JONES |
| MILLER | CLARK |
+--------+-------+
14 rows in set (0.00 sec)
```

### 三张表连接

#### 概述

![image-20230318110800618](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318110800618.png)

#### 练习：找出每个员工的部门名称以及工资等级，要求显示员工名，部门名，薪资，薪资等级

```
员工表
mysql> select * from emp;
+-------+--------+-----------+------+------------+---------+---------+--------+
| EMPNO | ENAME  | JOB       | MGR  | HIREDATE   | SAL     | COMM    | DEPTNO |
+-------+--------+-----------+------+------------+---------+---------+--------+
|  7369 | SMITH  | CLERK     | 7902 | 1980-12-17 |  800.00 |    NULL |     20 |
|  7499 | ALLEN  | SALESMAN  | 7698 | 1981-02-20 | 1600.00 |  300.00 |     30 |
|  7521 | WARD   | SALESMAN  | 7698 | 1981-02-22 | 1250.00 |  500.00 |     30 |
|  7566 | JONES  | MANAGER   | 7839 | 1981-04-02 | 2975.00 |    NULL |     20 |
|  7654 | MARTIN | SALESMAN  | 7698 | 1981-09-28 | 1250.00 | 1400.00 |     30 |
|  7698 | BLAKE  | MANAGER   | 7839 | 1981-05-01 | 2850.00 |    NULL |     30 |
|  7782 | CLARK  | MANAGER   | 7839 | 1981-06-09 | 2450.00 |    NULL |     10 |
|  7788 | SCOTT  | ANALYST   | 7566 | 1987-04-19 | 3000.00 |    NULL |     20 |
|  7839 | KING   | PRESIDENT | NULL | 1981-11-17 | 5000.00 |    NULL |     10 |
|  7844 | TURNER | SALESMAN  | 7698 | 1981-09-08 | 1500.00 |    0.00 |     30 |
|  7876 | ADAMS  | CLERK     | 7788 | 1987-05-23 | 1100.00 |    NULL |     20 |
|  7900 | JAMES  | CLERK     | 7698 | 1981-12-03 |  950.00 |    NULL |     30 |
|  7902 | FORD   | ANALYST   | 7566 | 1981-12-03 | 3000.00 |    NULL |     20 |
|  7934 | MILLER | CLERK     | 7782 | 1982-01-23 | 1300.00 |    NULL |     10 |
+-------+--------+-----------+------+------------+---------+---------+--------+
14 rows in set (0.00 sec)

部门表
mysql> select * from dept;
+--------+------------+----------+
| DEPTNO | DNAME      | LOC      |
+--------+------------+----------+
|     10 | ACCOUNTING | NEW YORK |
|     20 | RESEARCH   | DALLAS   |
|     30 | SALES      | CHICAGO  |
|     40 | OPERATIONS | BOSTON   |
+--------+------------+----------+
4 rows in set (0.00 sec)

薪资等级表
mysql> select * from salgrade;
+-------+-------+-------+
| GRADE | LOSAL | HISAL |
+-------+-------+-------+
|     1 |   700 |  1200 |
|     2 |  1201 |  1400 |
|     3 |  1401 |  2000 |
|     4 |  2001 |  3000 |
|     5 |  3001 |  9999 |
+-------+-------+-------+
5 rows in set (0.00 sec)

三表连接查询
mysql> select e.ename as '员工名',d.dname as ' 部门名',e.sal as '薪资', s.grade as '薪资等级'
    -> from emp e
    -> join dept d
    -> on e.deptno=d.deptno //等值连接
    -> join salgrade s
    -> on e.sal between s.losal and hisal; //非等值连接
+-----------+------------+---------+--------------+
| 员工名     | 部门名      | 薪资     | 薪资等级      |
+-----------+------------+---------+--------------+
| SMITH     | RESEARCH   |  800.00 |            1 |
| ALLEN     | SALES      | 1600.00 |            3 |
| WARD      | SALES      | 1250.00 |            2 |
| JONES     | RESEARCH   | 2975.00 |            4 |
| MARTIN    | SALES      | 1250.00 |            2 |
| BLAKE     | SALES      | 2850.00 |            4 |
| CLARK     | ACCOUNTING | 2450.00 |            4 |
| SCOTT     | RESEARCH   | 3000.00 |            4 |
| KING      | ACCOUNTING | 5000.00 |            5 |
| TURNER    | SALES      | 1500.00 |            3 |
| ADAMS     | RESEARCH   | 1100.00 |            1 |
| JAMES     | SALES      |  950.00 |            1 |
| FORD      | RESEARCH   | 3000.00 |            4 |
| MILLER    | ACCOUNTING | 1300.00 |            2 |
+-----------+------------+---------+--------------+
14 rows in set, 1 warning (0.00 sec)
```

#### 升级练习：找出每个员工的部门名称以及工资等级，和上级领导，要求显示员工名，部门名，领导名，薪资，薪资等级

```
四表连接查询

mysql> select e.ename as '员工名',d.dname as ' 部门名',m.ename as '领导名', e.sal as '薪资', s.grade as '薪资等级'
    -> from emp e //主表
    -> join dept d 
    -> on e.deptno=d.deptno //等值连接
    -> join salgrade s
    -> on e.sal between s.losal and hisal //非等值连接
    -> left join emp m // 左连接+自连接
    -> on e.mgr=m.empno; 
+-----------+------------+-----------+---------+--------------+
| 员工名     | 部门名      | 领导名     | 薪资     | 薪资等级      |
+-----------+------------+-----------+---------+--------------+
| SMITH     | RESEARCH   | FORD      |  800.00 |            1 |
| ALLEN     | SALES      | BLAKE     | 1600.00 |            3 |
| WARD      | SALES      | BLAKE     | 1250.00 |            2 |
| JONES     | RESEARCH   | KING      | 2975.00 |            4 |
| MARTIN    | SALES      | BLAKE     | 1250.00 |            2 |
| BLAKE     | SALES      | KING      | 2850.00 |            4 |
| CLARK     | ACCOUNTING | KING      | 2450.00 |            4 |
| SCOTT     | RESEARCH   | JONES     | 3000.00 |            4 |
| KING      | ACCOUNTING | NULL      | 5000.00 |            5 |
| TURNER    | SALES      | BLAKE     | 1500.00 |            3 |
| ADAMS     | RESEARCH   | SCOTT     | 1100.00 |            1 |
| JAMES     | SALES      | BLAKE     |  950.00 |            1 |
| FORD      | RESEARCH   | JONES     | 3000.00 |            4 |
| MILLER    | ACCOUNTING | CLARK     | 1300.00 |            2 |
+-----------+------------+-----------+---------+--------------+
14 rows in set, 1 warning (0.00 sec)
```

## 子查询

### 概述

![image-20230318113721451](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318113721451.png)

### where子句中的子查询

#### 案例

![image-20230318114146108](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318114146108.png)

![image-20230318114253642](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318114253642.png)

#### 练习

```
mysql> select min(sal) from emp;
+----------+
| min(sal) |
+----------+
|   800.00 |
+----------+
1 row in set (0.00 sec)

mysql> select ename,sal
    -> from emp
    -> where // where 后面不能直接跟分组函数，因为分完组之后才能判断
    -> sal>(select min(sal) from emp); // 使用括号里select子句，先进行分组
+--------+---------+
| ename  | sal     |
+--------+---------+
| ALLEN  | 1600.00 |
| WARD   | 1250.00 |
| JONES  | 2975.00 |
| MARTIN | 1250.00 |
| BLAKE  | 2850.00 |
| CLARK  | 2450.00 |
| SCOTT  | 3000.00 |
| KING   | 5000.00 |
| TURNER | 1500.00 |
| ADAMS  | 1100.00 |
| JAMES  |  950.00 |
| FORD   | 3000.00 |
| MILLER | 1300.00 |
+--------+---------+
13 rows in set (0.00 sec)
```

### From子句中的子查询

#### 概述

![image-20230318115054931](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318115054931.png)

#### 练习

![image-20230318115317252](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318115317252.png)

```
不同岗位的平均薪资 作为临时的一张表t,

mysql> select job, avg(sal) as avgsal
    -> from emp
    -> group by job;
+-----------+-------------+
| job       | avgsal      |
+-----------+-------------+
| CLERK     | 1037.500000 |
| SALESMAN  | 1400.000000 |
| MANAGER   | 2758.333333 |
| ANALYST   | 3000.000000 |
| PRESIDENT | 5000.000000 |
+-----------+-------------+
5 rows in set (0.00 sec)

t表再和薪资等级表进行连接查询

mysql> select t.*, s.grade
    -> from (select job, avg(sal) as avgsal from emp group by job) t
    -> join salgrade s
    -> on t.avgsal between s.losal and hisal;
+-----------+-------------+-------+
| job       | avgsal      | grade |
+-----------+-------------+-------+
| CLERK     | 1037.500000 |     1 |
| SALESMAN  | 1400.000000 |     2 |
| MANAGER   | 2758.333333 |     4 |
| ANALYST   | 3000.000000 |     4 |
| PRESIDENT | 5000.000000 |     5 |
+-----------+-------------+-------+
5 rows in set (0.01 sec)
```



### select子句中的子查询（了解即可）

![image-20230318121202279](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318121202279.png)

## 合并union， 合并查询结果集

### 概述

![image-20230318121725128](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318121725128.png)

![image-20230318121815200](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318121815200.png)

![image-20230318122507804](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318122507804.png)

![image-20230318122600397](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318122600397.png)

## limit：取出查询结果的一部分

### 概述

![image-20230318123056911](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318123056911.png)

![image-20230318123215231](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318123215231.png)

### 练习

```
取出前5名的工资排名

mysql> select ename, sal
    -> from emp
    -> order by sal desc
    -> limit 5;
+-------+---------+
| ename | sal     |
+-------+---------+
| KING  | 5000.00 |
| SCOTT | 3000.00 |
| FORD  | 3000.00 |
| JONES | 2975.00 |
| BLAKE | 2850.00 |
+-------+---------+
5 rows in set (0.00 sec)

取出前3-5名的工资排名
mysql> select ename,sal
    -> from emp
    -> order by sal desc
    -> limit 2,3; // 2是其实下标，3是长度
+-------+---------+
| ename | sal     |
+-------+---------+
| FORD  | 3000.00 |
| JONES | 2975.00 |
| BLAKE | 2850.00 |
+-------+---------+
3 rows in set (0.01 sec)
```

### 分页

![image-20230318124230767](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318124230767.png)

## DQL语句大总结

![image-20230318124424441](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318124424441.png)

# 表

## 表中数据的增删改

### 创建表

#### 概述

![image-20230318133053369](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318133053369.png)

#### mysql中的数据类型

![image-20230318133519692](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318133519692.png)

```
varchar(最长255)
    可变长度的字符串
    比较智能，节省空间。
    会根据实际的数据长度动态分配空间。

    优点：节省空间
    缺点：需要动态分配空间，速度慢。

char(最长255)
    定长字符串
    不管实际的数据长度是多少。
    分配固定长度的空间去存储数据。
    使用不恰当的时候，可能会导致空间的浪费。

    优点：不需要动态分配空间，速度快。
    缺点：使用不当可能会导致空间的浪费。

varchar和char我们应该怎么选择？
    性别字段你选什么？因为性别是固定长度的字符串，所以选择char。
    姓名字段你选什么？每一个人的名字长度不同，所以选择varchar。

int(最长11)
    数字中的整数型。等同于java的int。

bigint
    数字中的长整型。等同于java中的long。

float	
    单精度浮点型数据

double
    双精度浮点型数据

date
    短日期类型

datetime
    长日期类型

clob
    字符大对象
    最多可以存储4G的字符串。
    比如：存储一篇文章，存储一个说明。
    超过255个字符的都要采用CLOB字符大对象来存储。
    Character Large OBject:CLOB

blob
    二进制大对象
    Binary Large OBject
    专门用来存储图片、声音、视频等流媒体数据。
    往BLOB类型的字段上插入数据的时候，例如插入一个图片、视频等，
    你需要使用IO流才行。
```

#### 模拟练习

```
t_movie 电影表（专门存储电影信息的）

编号	       名字		    故事情节		  上映日期		    时长		     海报			类型
no(bigint)	name(varchar)  history(clob)	playtime(date)	time(double)  image(blob)  type(char)
------------------------------------------------------------------------------------------------
10000		哪吒		    ...........		  2019-10-11	   2.5			....		  '1'
10001		林正英之娘娘   ...........		2019-11-11		1.5			  ....		    '2'

```

#### 创建表 create (DDL语句)

```
创建一个学生表

mysql> create table t_student(
    -> no int,
    -> name varchar(32),
    -> sex char(1),
    -> age int(3),
    -> email varchar(255)
    -> );
Query OK, 0 rows affected, 1 warning (0.02 sec)

mysql> desc t_student;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| no    | int          | YES  |     | NULL    |       |
| name  | varchar(32)  | YES  |     | NULL    |       |
| sex   | char(1)      | YES  |     | NULL    |       |
| age   | int          | YES  |     | NULL    |       |
| email | varchar(255) | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

```

### 删除表  drop（DDL语句）

```
mysql> drop table if exists t_student;
Query OK, 0 rows affected (0.01 sec)

mysql> desc t_student;
ERROR 1146 (42S02): Table 'bjpowernode.t_student' doesn't exist
```

### 增数据，insert（DML)语句

#### 格式

![image-20230318140848709](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318140848709.png)

#### 练习

```
mysql> insert into
    -> t_student(no,name,sex,age,email)
    -> values(1,'zhangsan','m',18,'zhangsan@123.com');
Query OK, 1 row affected (0.00 sec)

mysql> select * from t_student;
+------+----------+------+------+------------------+
| no   | name     | sex  | age  | email            |
+------+----------+------+------+------------------+
|    1 | zhangsan | m    |   18 | zhangsan@123.com |
+------+----------+------+------+------------------+
1 row in set (0.00 sec)

mysql> insert into
    -> t_student(name,sex,age,no,email) //字段的顺序可以随意排列
    -> values('lisi','f',20,2,'lisi@234.com');// 字段与值的顺序一一对应
Query OK, 1 row affected (0.00 sec)

mysql> select * from t_student;
+------+----------+------+------+------------------+
| no   | name     | sex  | age  | email            |
+------+----------+------+------+------------------+
|    1 | zhangsan | m    |   18 | zhangsan@123.com |
|    2 | lisi     | f    |   20 | lisi@234.com     |
+------+----------+------+------+------------------+
2 rows in set (0.00 sec)
```

#### default关键字

```
使用default关键字设置字段的初始默认值

mysql> create table t_student_d(
    -> no int,
    -> name varchar(32),
    -> sex char default 'n',
    -> age int default '18',
    -> email varchar(255)
    -> );
Query OK, 0 rows affected (0.01 sec)

mysql> desc t_student_d;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| no    | int          | YES  |     | NULL    |       |
| name  | varchar(32)  | YES  |     | NULL    |       |
| sex   | char(1)      | YES  |     | n       |       |
| age   | int          | YES  |     | 18      |       |
| email | varchar(255) | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> insert into
    -> t_student_d(no,name,sex,age,email)
    -> values(3,'wangwu','f',35,'wangwu@gm.com');
Query OK, 1 row affected (0.00 sec)

mysql> select * from t_student_d;
+------+--------+------+------+---------------+
| no   | name   | sex  | age  | email         |
+------+--------+------+------+---------------+
|    3 | wangwu | f    |   35 | wangwu@gm.com |
+------+--------+------+------+---------------+
1 row in set (0.00 sec)
```

#### insert插入日期

![image-20230318144421796](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318144421796.png)

![image-20230318144627061](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318144627061.png)

```
mysql> insert into
    -> t_user(id, name,dob)
    -> values(1,'jack', str_to_date('01-11-1990','%d-%m-%Y')); // '%d-%m-%Y' 中的Y必须是大写
Query OK, 1 row affected (0.00 sec)

mysql> select * from t_user;
+------+------+------------+
| id   | name | dob        |
+------+------+------------+
|    1 | jack | 1990-11-01 |
+------+------+------------+
1 row in set (0.00 sec)

mysql> insert into
    -> t_user(id,name,dob)
    -> values(
    -> 2,'kate',str_to_date('1999/12/22','%Y/%m/%d')
    -> );
Query OK, 1 row affected (0.00 sec)

mysql> select * from t_user;
+------+------+------------+
| id   | name | dob        |
+------+------+------------+
|    1 | jack | 1990-11-01 
|    2 | kate | 1999-12-22 |   默认的格式是'%Y-%m-%d' 
+------+------+------------+
2 rows in set (0.00 sec)
```

#### 设置日期显示的格式，使用date_format函数

![image-20230318151244947](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318151244947.png)

```
mysql> select id,name,date_format(dob,'%d/%m/%Y')
    -> from t_user;
+------+------+-----------------------------+
| id   | name | date_format(dob,'%d/%m/%Y') |
+------+------+-----------------------------+
|    1 | jack | 01/11/1990                  |
|    2 | kate | 22/12/1999                  |
+------+------+-----------------------------+
2 rows in set (0.00 sec)
```

#### Date 和datetime的区别

![image-20230318151948830](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318151948830.png)

```
mysql> create table t_user(
    -> id int,
    -> name varchar(32),
    -> birth date,
    -> create_time datetime
    -> );
Query OK, 0 rows affected (0.01 sec)

mysql> desc t_user;
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| id          | int         | YES  |     | NULL    |       |
| name        | varchar(32) | YES  |     | NULL    |       |
| birth       | date        | YES  |     | NULL    |       |
| create_time | datetime    | YES  |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)


mysql> insert into 
		t_user(id,name,birth,create_time) 
		values(1,'zhangsan','1990-10-01','2020-03-18 15:49:50');
Query OK, 1 row affected (0.01 sec)

mysql> select * from t_user;
+------+----------+------------+---------------------+
| id   | name     | birth      | create_time         |
+------+----------+------------+---------------------+
|    1 | zhangsan | 1990-10-01 | 2020-03-18 15:49:50 |
+------+----------+------------+---------------------+
1 row in set (0.00 sec)
```

#### 获取当前时间now（）函数

```
mysql> insert into t_user(id,name,birth,create_time) values(2,'lisi','1991-10-01',now());
Query OK, 1 row affected (0.00 sec)

mysql> select * from t_user;
+------+----------+------------+---------------------+
| id   | name     | birth      | create_time         |
+------+----------+------------+---------------------+
|    1 | zhangsan | 1990-10-01 | 2020-03-18 15:49:50 |
|    2 | lisi     | 1991-10-01 | 2023-03-18 15:25:34 |
+------+----------+------------+---------------------+
2 rows in set (0.00 sec)
```

#### 插入多条语句： value之间使用逗号

![image-20230318162101451](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318162101451.png)

```
mysql> desc t_user;
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| id          | int         | YES  |     | NULL    |       |
| name        | varchar(32) | YES  |     | NULL    |       |
| birth       | date        | YES  |     | NULL    |       |
| create_time | datetime    | YES  |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> insert into
    -> t_user(id,name,birth,create_time)
    -> values
    -> (1,'jack','1999-09-09',now()),
    -> (2,'kate','1988-08-08',now()),
    -> (3,'mike','1977-07-07',now());
Query OK, 3 rows affected (0.00 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from t_user;
+------+------+------------+---------------------+
| id   | name | birth      | create_time         |
+------+------+------------+---------------------+
|    1 | jack | 1999-09-09 | 2023-03-18 16:19:39 |
|    2 | kate | 1988-08-08 | 2023-03-18 16:19:39 |
|    3 | mike | 1977-07-07 | 2023-03-18 16:19:39 |
+------+------+------------+---------------------+
3 rows in set (0.00 sec)
```

### 改数据，update（DML语句)

#### 概述

![image-20230318153054891](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318153054891.png)

#### 练习

```
mysql> select * from t_user;
+------+-------+------------+---------------------+
| id   | name  | birth      | create_time         |
+------+-------+------------+---------------------+
|    2 | mike  | 1878-10-19 | 2023-03-18 15:37:10 |
|    3 | peter | 1984-02-22 | 2023-03-18 15:43:21 |
+------+-------+------------+---------------------+
2 rows in set (0.00 sec)

mysql> update t_user
    -> set
    -> name='lucy',birth='1900-08-09',create_time=now()
    -> where id=3;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from t_user;
+------+------+------------+---------------------+
| id   | name | birth      | create_time         |
+------+------+------------+---------------------+
|    2 | mike | 1878-10-19 | 2023-03-18 15:37:10 |
|    3 | lucy | 1900-08-09 | 2023-03-18 15:45:14 |
+------+------+------------+---------------------+
2 rows in set (0.00 sec)
```

### 删数据，delete（DML语句）

#### 概述

![image-20230318155018054](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318155018054.png)

#### 练习

```
mysql> delete
    -> from t_user
    -> where id=2;
Query OK, 2 rows affected (0.00 sec)

mysql> select * from t_user;
+------+------+------------+---------------------+
| id   | name | birth      | create_time         |
+------+------+------------+---------------------+
|    3 | lucy | 1900-08-09 | 2023-03-18 15:45:14 |
+------+------+------------+---------------------+
1 row in set (0.00 sec)

删除所有，不加限制条件
mysql> delete
    -> from
    -> t_user;
Query OK, 1 row affected (0.00 sec)

mysql> select * from t_user;
Empty set (0.00 sec)
```

### 快速建表 (复制) 了解内容

#### 概述

![image-20230318162405509](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318162405509.png)

#### 练习

```
mysql> create table t_emp as select * from emp;
Query OK, 14 rows affected, 2 warnings (0.01 sec)
Records: 14  Duplicates: 0  Warnings: 2

mysql> select * from t_emp;
+-------+--------+-----------+------+------------+---------+---------+--------+
| EMPNO | ENAME  | JOB       | MGR  | HIREDATE   | SAL     | COMM    | DEPTNO |
+-------+--------+-----------+------+------------+---------+---------+--------+
|  7369 | SMITH  | CLERK     | 7902 | 1980-12-17 |  800.00 |    NULL |     20 |
|  7499 | ALLEN  | SALESMAN  | 7698 | 1981-02-20 | 1600.00 |  300.00 |     30 |
|  7521 | WARD   | SALESMAN  | 7698 | 1981-02-22 | 1250.00 |  500.00 |     30 |
|  7566 | JONES  | MANAGER   | 7839 | 1981-04-02 | 2975.00 |    NULL |     20 |
|  7654 | MARTIN | SALESMAN  | 7698 | 1981-09-28 | 1250.00 | 1400.00 |     30 |
|  7698 | BLAKE  | MANAGER   | 7839 | 1981-05-01 | 2850.00 |    NULL |     30 |
|  7782 | CLARK  | MANAGER   | 7839 | 1981-06-09 | 2450.00 |    NULL |     10 |
|  7788 | SCOTT  | ANALYST   | 7566 | 1987-04-19 | 3000.00 |    NULL |     20 |
|  7839 | KING   | PRESIDENT | NULL | 1981-11-17 | 5000.00 |    NULL |     10 |
|  7844 | TURNER | SALESMAN  | 7698 | 1981-09-08 | 1500.00 |    0.00 |     30 |
|  7876 | ADAMS  | CLERK     | 7788 | 1987-05-23 | 1100.00 |    NULL |     20 |
|  7900 | JAMES  | CLERK     | 7698 | 1981-12-03 |  950.00 |    NULL |     30 |
|  7902 | FORD   | ANALYST   | 7566 | 1981-12-03 | 3000.00 |    NULL |     20 |
|  7934 | MILLER | CLERK     | 7782 | 1982-01-23 | 1300.00 |    NULL |     10 |
+-------+--------+-----------+------+------------+---------+---------+--------+
14 rows in set (0.00 sec)

也可以按条件复制数据

mysql> create table emp2 as
    -> select empno,ename
    -> from emp
    -> where job='manager';
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from emp2;
+-------+-------+
| empno | ename |
+-------+-------+
|  7566 | JONES |
|  7698 | BLAKE |
|  7782 | CLARK |
+-------+-------+
3 rows in set (0.00 sec)
```

### 快速删除表中的数据

![image-20230318163909668](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318163909668.png)

## 增删改表的结构（了解）

![image-20230318170933869](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318170933869.png)

## 创建表加入约束（非常重要）

### 概述

![image-20230318171357625](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318171357625.png)

### 分类

![image-20230318171428574](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318171428574.png)

### 非空约束：not null

#### 概述

![image-20230318172041502](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318172041502.png)

#### 练习

```
导入SQL脚本文件
mysql> source /Users/aqiang/Desktop/My_Github/Upload/mySql/doc/vip.sql
Query OK, 0 rows affected (0.01 sec)

Query OK, 0 rows affected (0.00 sec)

Query OK, 1 row affected (0.00 sec)

Query OK, 1 row affected (0.00 sec)

查看表
mysql> desc t_vip;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| id    | int          | YES  |     | NULL    |       |
| name  | varchar(255) | NO   |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

给表插入空的字段
mysql> insert into
    -> t_vip(id)
    -> values(3);
ERROR 1364 (HY000): Field 'name' doesn't have a default value
mysql>

```

### 唯一性约束: unique

#### 概述

![image-20230318173552078](/Users/aqiang/Library/Application Support/typora-user-images/image-20230318173552078.png)

#### 练习

```
mysql> source /Users/aqiang/Desktop/My_Github/Upload/mySql/doc/vip2.sql
Query OK, 0 rows affected (0.01 sec)

Query OK, 0 rows affected (0.00 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.00 sec)

Query OK, 1 row affected (0.00 sec)

+------+----------+------------------+
| id   | name     | email            |
+------+----------+------------------+
|    1 | zhangsan | zhangsan@123.com |
|    2 | lisi     | lisi@123.com     |
|    3 | wangwu   | wangwu@123.com   |
+------+----------+------------------+
3 rows in set (0.00 sec)

mysql> insert into t_vip(id,name,email) values(4,'wangwu','wangwu@sina.com'); // 字段值'wangwu'重复了
ERROR 1062 (23000): Duplicate entry 'wangwu' for key 't_vip.name'

// 但是可以为空
mysql> insert into
    -> t_vip(id)
    -> values(4);
Query OK, 1 row affected (0.00 sec)

mysql> insert into
    -> t_vip(id)
    -> values(5);
Query OK, 1 row affected (0.00 sec)

mysql> select * from t_vip;
+------+----------+------------------+
| id   | name     | email            |
+------+----------+------------------+
|    1 | zhangsan | zhangsan@123.com |
|    2 | lisi     | lisi@123.com     |
|    3 | wangwu   | wangwu@123.com   |
|    4 | NULL     | NULL             |
|    5 | NULL     | NULL             |
+------+----------+------------------+
5 rows in set (0.00 sec)

```



#### 两个字段联合唯一

![image-20230319095349933](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319095349933.png)

```

mysql> drop table if exists t_vip;
Query OK, 0 rows affected (0.00 sec)

mysql> create table t_vip(
    -> id int,
    -> name varchar(255),
    -> email varchar(255),
    -> unique(name,email)
    -> );
Query OK, 0 rows affected (0.01 sec)

mysql> desc t_vip;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| id    | int          | YES  |     | NULL    |       |
| name  | varchar(255) | YES  | MUL | NULL    |       |
| email | varchar(255) | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
3 rows in set (0.01 sec)

mysql> insert into t_vip(id,name,email)
    -> values(1,'zhangsan','zhangsan@qq.com'),
    -> (2,'zhangsan','zhangsan@sina.com'),
    -> (3,'zsan','zhangsan@sina.com');
Query OK, 3 rows affected (0.00 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from t_vip;
+------+----------+-------------------+
| id   | name     | email             |
+------+----------+-------------------+
|    1 | zhangsan | zhangsan@qq.com   |
|    2 | zhangsan | zhangsan@sina.com |
|    3 | zsan     | zhangsan@sina.com |
+------+----------+-------------------+
3 rows in set (0.00 sec)
```

#### 非空和unique的联合(了解一下)

![image-20230319101543739](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319101543739.png)

### 主键约束（primary key，简称PK）非常重要五颗星*****

#### 概述

![image-20230319102312519](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319102312519.png)

#### 添加主键约束

![image-20230319102452844](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319102452844.png)

![image-20230319102740202](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319102740202.png)

#### 主键数量

![image-20230319103000715](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319103000715.png)

#### 主键值类型

![image-20230319103101203](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319103101203.png)

#### 自然主键和业务主键

![image-20230319103454130](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319103454130.png)

### 外键约束（foreign key，简称FK）非常重要五颗星*****

#### 概述

![image-20230319111057103](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319111057103.png)

#### 添加外键约束

![image-20230319111137346](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319111137346.png)

![image-20230319111210222](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319111210222.png)

#### 注意事项

![image-20230319111333610](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319111333610.png)

#### 练习, 创建学生表和班级表

```
删表时，先删子表
Database changed
mysql> drop table if exists t_student;
Query OK, 0 rows affected (0.01 sec)

mysql> drop table if exists t_class;
Query OK, 0 rows affected, 1 warning (0.01 sec)

创建表示，先建主表
mysql> create table t_class(
    -> no int primary key auto_increment, //自动生成主键值，从1开始，递增加一
    -> name varchar(255)
    -> );
Query OK, 0 rows affected (0.01 sec)

mysql> create table t_student(
    -> classno int,
    -> no int primary key auto_increment,  //自动生成主键值，从1开始，递增加一
    -> name varchar(255),
    -> foreign key(classno) references t_class(no) // 子表添加外键，与主表主键关联
    -> );
Query OK, 0 rows affected (0.01 sec)

mysql> desc t_class;
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| no    | int          | NO   | PRI | NULL    | auto_increment |
| name  | varchar(255) | YES  |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
2 rows in set (0.00 sec)

mysql> desc t_student;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| classno | int          | YES  | MUL | NULL    |                |
| no      | int          | NO   | PRI | NULL    | auto_increment |
| name    | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)

插入数据时，先插入主表的数据
mysql> insert into t_class(name)
    -> values('第一中学'),('第二中学');
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from t_class;
+----+--------------+
| no | name         |
+----+--------------+
|  1 | 第一中学     |
|  2 | 第二中学     |
+----+--------------+
2 rows in set (0.00 sec)

mysql> insert into t_student(name,classno)
    -> values('zhangsan',1),('lisi',1),('wangwu',2),('zhaoliu',2);
Query OK, 4 rows affected (0.00 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> select * from t_student;
+---------+----+----------+
| classno | no | name     |
+---------+----+----------+
|       1 |  1 | zhangsan |
|       1 |  2 | lisi     |
|       2 |  3 | wangwu   |
|       2 |  4 | zhaoliu  |
+---------+----+----------+
4 rows in set (0.00 sec)
```

# 存储引擎（了解）

## 概述

![image-20230319115608359](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319115608359.png)

![image-20230319115112751](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319115112751.png)

## 常用引擎的介绍

![image-20230319115351664](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319115351664.png)

![image-20230319115409587](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319115409587.png)

![image-20230319115430130](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319115430130.png)

# 事务

## 概述

![image-20230319120721076](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319120721076.png)

![image-20230319120849349](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319120849349.png)

![image-20230319121139196](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319121139196.png)

## 事务的实现

![image-20230319121504278](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319121504278.png)

![image-20230319122116125](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319122116125.png)

![image-20230319122328645](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319122328645.png)

![image-20230319122537952](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319122537952.png)

## 事务的4个特性

![image-20230319122929674](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319122929674.png)

## 事务的隔离性

### 概述

![image-20230319123146460](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319123146460.png)

### 级别

![image-20230319123232662](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319123232662.png)

### 级别的验证

![image-20230319125544105](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319125544105.png)

![image-20230319125611998](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319125611998.png)

![image-20230319125630725](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319125630725.png)

![image-20230319125716036](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319125716036.png)

![image-20230319125737903](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319125737903.png)

# 索引

## 概述

![image-20230319130728340](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319130728340.png)

## 原理

![image-20230319131507729](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319131507729.png)

![image-20230319131835960](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319131835960.png)

## 创建和删除

![image-20230319131930564](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319131930564.png)

## 索引的失效（了解）

![image-20230319132517037](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319132517037.png)

![image-20230319132905235](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319132905235.png)

![image-20230319133107419](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319133107419.png)

![image-20230319133218199](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319133218199.png)

![image-20230319133340717](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319133340717.png)

## 分类 （了解）

![image-20230319133543848](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319133543848.png)

# 视图

## 概述 

![image-20230319133907746](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319133907746.png)

## 作用

![image-20230319134349781](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319134349781.png)

![image-20230319134434526](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319134434526.png)

![image-20230319134511492](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319134511492.png)

# DBA常用命令

## 数据导入

![image-20230319135208401](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319135208401.png)

## 数据导出

![image-20230319135145761](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319135145761.png)

# 数据库设计三范式

## 概述

![image-20230319135423584](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319135423584.png)

## 第一范式

![image-20230319135535772](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319135535772.png)

## 第二范式

![image-20230319135640945](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319135640945.png)

![image-20230319135723521](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319135723521.png)

## 第三范式

![image-20230319140350440](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319140350440.png)

## 总结

![image-20230319141032687](/Users/aqiang/Library/Application Support/typora-user-images/image-20230319141032687.png)

