# 对象

## 对象概述

![image-20230202220005841](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202220005841.png)

![image-20230202220131758](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202220131758.png)

## 创建对象的3种方式

### 利用字面量常见对象

#### 语法结构

![image-20230202220709134](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202220709134.png)

![image-20230202220740870](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202220740870.png)

```html
<script>
     // 语法：var obj = {} ////创建了一个空的对象

        // 创建一个电脑对象,方法一，字面量创建{}
        var computer = {
            color: 'red',
            weight: 20,
            type: 'dell',
            watchMovie: function() {
                console.log('free');
            },
        };
        // 注意：
        // a, 对象里的属性和方法， 采用键值对的形式保存。
        // 键（ 属性名 / 方法名）： 值（ 属性值 / 匿名函数）
        // b, 多个属性或方法之间用逗号隔开
        // c, 方法冒号后面跟的是一个匿名函数
</script>
```

#### 调用方法

![image-20230202220824381](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202220824381.png)

```html
<script>
     // 4.2 调用对象的方法。

        // 方法a,属性一：对象名.属性名
        console.log(computer.type);
        // =====================================================

        // 方法b,属性二：对象名[属性名]
        console.log(computer['weight']);
        // =====================================================

        // 调用对象的方法:  对象名.方法名（），方法名后要加（）
        computer.watchMovie()
</script>
```

#### 变量和属性，函数和方法的区别

![image-20230202221642572](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202221642572.png)

```html	
<script>
     // 4.3 变量与属性关系：
        // 相同点： 都是又来存储数据的
        // 不同点：
        // 变量是单独申明并赋值， 使用的时候直接写变量名；
        // 属性是在对象里的， 不需要申明， 使用的时候必须是对象名.属性
        // =====================================================
        // =====================================================

        // 4.4 函数与方法的关系：
        // 相同点： 都是实现某种功能， 做某件事
        // 不同点：
        // 函数是单独申明， 并且调用的。 函数名（）
        // 方法是在对象里面的。 不需要申明。 调用的时候时对象名.方法名（）
        // =====================================================
        // =====================================================
</script>
```



### 利用new object 创建对象

![image-20230203145000198](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203145000198.png)

```html
<script>
     // 5. 利用new Object()创建对象，类似于用new Array()创建数组的方法
        // 语法：var obj = new Objecta()////创建了一个空的对象；

        // =====================================================
        // //.创建一个按钮对象
        var buttom = new Object();
        buttom.width = 14 + 'px';
        buttom.height = 24 + 'px';
        buttom.bgc = 'red';
        buttom.click = function() {
                console.log('hi');
            }
        // 调用属性、
        console.log(buttom.width);
        console.log(buttom['bgc']);
        // // 调用方法
        buttom.click()
        // =====================================================
        // 注意： 
        // a,利用等号=赋值的方法，添加新建空的对象的属性和方法(有别于第一种创建方法)
        // b,多个属性和方法直接用分号(有别于第一种创建方法)
</script>
```

### 利用构造函数创建对象

#### 原因：以上2种方法一次只能创建一个对象， 要创建多个对象时， 需要用构造函数

#### 原理：利用函数的方法,重复使用多个对象里相同的代码， 函数里面封装的是对象。

![image-20230203150019774](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203150019774.png)

#### 语法结构：

```html
<script>
    function 构造函数名（） {
            this.属性名 = 属性值；
            this.方法名 = founction(){};////匿名函数
        }
        new 构造函数名() ////调用函数
</script>
```

#### 案例练习

```html
<script>
 // 示例练习： 利用构造函数创建四大天王的对象（相同的属性有，姓名，年龄，性别，相同的方法有唱歌等）
        function Star(uname, usex, uage, usong) ////构造函数名，首字母要大写，括号里的是形参
        {
            this.name = uname;
            this.sex = usex;
            this.age = uage;
            this.sing = function() {
                console.log(usong);
            }
        }
        //构造函数不需要return,就可以返回结果
        //调用对象时，前面加new。括号里的是实参
        var ldh = new Star('刘德华', '男', '18', '忘情水');
        console.log(ldh.name);
        console.log(ldh.sing());
        var zxy = new Star('zxy', '男', '19', 'nhd');
        console.log(zxy.name);
        console.log(zxy.sing());
</script>
```

#### 构造函数和对象的联系

![image-20230203151903076](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203151903076.png)

```html
<script>
      // 1.构造函数
        function Star(uname, usex, uage, usong) {
            this.name = uname;
            this.sex = usex;
            this.age = uage;
            this.sing = function() {
                console.log(usong);
            }
        }
        // 2. 对象
        ldh = {
                name: 刘德华,
                age: 40,
                sex: 男,
                唱歌: 冰雨
            }
        // a,对象是一个具体的事物， 
        // b,而构造函数是泛指的一大类，比如四大天王，相当于java中的类；
        // c,我们利用构造函数创建对象的过程叫做对象的实例化
        var ldh = new Star('刘德华', 40, '男', '冰雨') 
</script>
```

#### new关键字执行过程

```html
<script>
   // 8.new关键字执行过程；
        // 代码执行遇到new时:
        // a,首先在内存中创建一个新的空对象；
        // b,在让this指向这个新对象；
        // c,然后开始执行构造函数里的代码，并给这个新对象添加属性和方法
        // d,最后返回这个新对象（所以构造函数里面不需要return,new具有返回这个功能） 
</script>
```

## 遍历对象的属性

### 语法

```html
<script>
     // 9. 遍历对象： 使用for in语句
        // 定义：for in 语句用于对数组或对象的属性进行循环操作。
        // 语法：for (var变量名 in 对象名)；
        // 举例：
        var obj = {
            name: 'pink老师',
            age: 18,
            sex: '男',
            fn: function() {}
        };
        for (var k in obj) {
            console.log(k); //// 变量k,得到的是所以属性名和方法名
            console.log(obj[k]); //// obj[k],得到的是所以的属性值和匿名函数
        };
</script>
```

## 对象小结

![image-20230203153454840](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203153454840.png)

# js内置对象

## 内置对象概述

![image-20230203162736067](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203162736067.png)

## 查阅文档

![image-20230203163123031](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203163123031.png)

![image-20230203170234064](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203170234064.png)

## math数学对象

### 描述

![image-20230203170926063](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203170926063.png)

### 属性

![image-20230203171436818](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203171436818.png)

![image-20230203171526882](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203171526882.png)

### 常用的方法

#### 求最大最小值 Math.max(),  Math.min()

![image-20230203172005604](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203172005604.png)

![image-20230203172117564](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203172117564.png)

![image-20230203172155748](/Users/aqiang/Library/Application Support/typora-user-images/image-20230203172155748.png)

```html
<script>
     // 3. 利用对象封装一个自己的数学对象（模拟内置对象的底层代码）
        var MyMath = {
            PI: 3.141592653,
            Max: function() {
                var max = arguments[0];
                for (i = 1; i < arguments.length; i++) {
                    if (arguments[i] > max) {
                        max = arguments[i]
                    }
                }
                return max;
            },
            Min: function() {
                var min = arguments[0];
                for (i = 1; i < arguments.length; i++) {
                    if (arguments[i] < min) {
                        min = arguments[i]
                    }
                }
                return min;
            }
        }
        alert(MyMath.PI);
        alert(MyMath.Max(1, 2, 9, 46));
        alert(MyMath.Min(1, 2, 9, 46));
</script>
```

#### 求绝对值 Math.abs()

![image-20230204172815190](/Users/aqiang/Library/Application Support/typora-user-images/image-20230204172815190.png)

![image-20230204172901373](/Users/aqiang/Library/Application Support/typora-user-images/image-20230204172901373.png)

```html
<script>
    console.log(Math.abs(1)); // 1
    console.log(Math.abs(-1)); // 1
    console.log(Math.abs('-1')); // 隐式转换
    console.log(Math.abs('pink')); // NaN
</script>
```

#### 三个取整方法

![image-20230204173402478](/Users/aqiang/Library/Application Support/typora-user-images/image-20230204173402478.png)

```HTML
<script>
     // 三个取整的方法
        // Math.floor() 函数总是返回小于等于一个给定数字的最大整数。向下取整
        console.log(Math.floor(1.1)); // 1
        console.log(Math.floor(1.9)); // 1
        console.log(Math.floor(-1.1)); // -2
        console.log(Math.floor(-1.9)); // -2

        // Math.ceil() 函数总是四舍五入并返回大于等于给定数字的最小整数。向上取整
        console.log(Math.ceil(1.1)); // 2
        console.log(Math.ceil(1.9)); // 2
        console.log(Math.ceil(-1.1)); // -1
        console.log(Math.ceil(-1.9)); // -1

        // Math.round() 函数返回一个数字四舍五入后最接近的整数。注意： .5不是四舍五入，而是往大取数字
        console.log(Math.round(1.1)); // 1
        console.log(Math.round(1.5)); // 2
        console.log(Math.round(1.9)); // 2
        console.log(Math.round(-1.1)); // -1
        console.log(Math.round(-1.5)); // -1  ////.5不是四舍五入，而是往大取数字
        console.log(Math.round(-1.9)); // -2
</script>
```

#### 取随机数方法**`Math.random()`**

![image-20230204175829006](/Users/aqiang/Library/Application Support/typora-user-images/image-20230204175829006.png)

![image-20230204180024893](/Users/aqiang/Library/Application Support/typora-user-images/image-20230204180024893.png)

![image-20230204180116248](/Users/aqiang/Library/Application Support/typora-user-images/image-20230204180116248.png)

```html
<script>
 // 得到一个两数之间的随机整数，包括两个数在内
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
        }
        alert(getRandomIntInclusive(1, 10));
        // 示例：随机点名
        var arr = ['张三', '张三丰', '张三疯子', '李四', '李思思', '李四傻子']
        alert(arr[getRandomIntInclusive(0, arr.length - 1)])
</script>
```

### 案例

![image-20230204181258466](/Users/aqiang/Library/Application Support/typora-user-images/image-20230204181258466.png)

```html
<script>
     // 案例练习：猜数字游戏
        // 得到一个两数之间的随机整数，包括两个数在内
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
        }
        var random = getRandomIntInclusive(1, 10);

        while (true) {
            var num = prompt('请输入0-10之间的一个数');
            if (num < random) {
                alert('你猜小了')
            } else if (num > random) {
                alert('你猜大了')
            } else {
                alert('你猜对了')
                break;
            }
        }
</script>
```



## date日期对象

### 描述

![image-20230218122042926](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218122042926.png)

```html
<script>
     // Date()日期对象， 是一个构造函数，必须使用关键词new来调用创建我们需要的日期对象，而math本身就是一个对象，不需要用new 再来调用并创建。
        // Date()的使用，类似数组和对象的创建：
        var arr=new Array(); // 创建了一个数组对象实例，Array()本质也是一个构造函数，需要使用关键字new来调用创建
        var obj=new Object(); // 创建了一个对象实例，Object()本质也是一个构造函数，需要使用关键字new来调用创建
</script>
```

### 方法使用

![image-20230218123623420](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218123623420.png)

```html
<script>
    // 2 使用方法
        // Date()函数无参数，返回的是当前时间
        var date = new Date();
        alert(date);
        // Date()函数有参数，参数的格式，数字型：2020,11,01 ， 字符串型：'2020-11-1 8:8:8'
        var date1 = new Date(2020, 11, 01);
        alert(date1); // 数字型输出的是12月，不是11月
        var date2 = new Date('2020-11-1 8:8:8');
        alert(date2); // 字符串型输出的是11月，推荐使用字符串型
</script>
```

### 输出日期的格式化



![image-20230218123947853](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218123947853.png)

#### 格式化年月日，星期

```html
<script>
     //日期的格式化
        var date = new Date();
        alert(date.getFullYear()); //返回当前日期的年
        alert(date.getMonth() + 1); //返回当前日期的月， getMonth()返回的月份会小一个月，从0-11，当前月份需要加一
        alert(date.getDate()); //返回当前日期的日
        alert(date.getDay()); //返回当前日期的星期， 0-6， 周一是1，周六是6，周日是0

        // 案例1：输出一个格式化的当前日期
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var dates = today.getDate();
        var day = today.getDay();
        // day 值是数字0-6，可以作为数字week的索引来输出对应的中文星期数 
        var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

        alert('今天是' + year + '年' + month + '月' + dates + '日，' + week[day])
    
     // 案例2: 封装一个格式化某一天日期的函数
        function getDate(value) {
            var someday = new Date(value);
            var year = someday.getFullYear();
            var month = someday.getMonth() + 1;
            var dates = someday.getDate();
            var day = someday.getDay();
            // day 值是数字0-6，可以作为数字week的索引来输出对应的中文星期数 
            var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            return '今天是' + year + '年' + month + '月' + dates + '日，' + week[day];
        }
        alert(getDate('2022-12-12'));
</script>
```

#### 格式化时分秒

```html
<script>
     //日期的格式化,时分秒
        var date = new Date();
        alert(date.getHours()); // 当前小时
        alert(date.getMinutes()); // 当前分钟
        alert(date.getSeconds()); // 当前秒

        // 案例3: 封装一个当前时间的函数
        function getTime() {
            var date = new Date();
            var h = date.getHours();
            h = h < 10 ? '0' + h : h;
            var m = date.getds();
            m = m < 10 ? '0' + m : m;
            var s = date.getSeconds();
            s = s < 10 ? '0' + s : s;
            return '当前时间是:' + h + '点' + m + '分' + s + '秒'
        }
        alert(getTime());
</script>
```

#### 获得日期date总的毫秒数（时间戳）：现在距离过去（1970-01-01）过了多少毫秒了？

![image-20230218141544356](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218141544356.png)

```html
<script>
     // 方法一： valueOf()和getTime()方法实现
        var date = new Date();
        alert(date.valueOf());
        alert(date.getTime());

        // 方法二：最常用的简单方法:+new Date()返回的就是总的毫秒数
        var date1 = +new Date();
        alert(date1);

        // 方法三：H5新增的方法，更简单
        alert(Date.now());
</script>
```

### 案例：倒计时

![image-20230218143421742](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218143421742.png)

![image-20230218143651729](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218143651729.png)

```html
<script>
    //  6. 案例：倒计时
        function countDown(time) {
            var timeNow = +new Date(); //当前时间戳
            var timeInput = +new Date(time); //输入时间的时间戳
            var times = (timeInput - timeNow) / 1000; // 剩余时间转化成总的秒数

            var d = parseInt(times / 60 / 60 / 24); // 天
            d = d < 10 ? '0' + d : d;
            var h = parseInt(times / 60 / 60 % 24); //时
            h = h < 10 ? '0' + h : h;
            var m = parseInt(times / 60 % 60); //分
            m = m < 10 ? '0' + m : m;
            var s = parseInt(times % 60); //秒
            s = s < 10 ? '0' + s : s;
            return d + '天' + h + '时' + m + '分' + s + '秒'
        }
        alert(countDown('2024-2-18 14:57:00'))
</script>
```

## array数组对象

### 概述

```html
<script>
     // Array()数组对象， 是一个构造函数，必须使用关键词new来调用创建我们需要的数组对象
        var arr = new Array();
</script>
```

### 属性

### 方法

#### 创建数组

```html
<script>
     // 利用数组字面量
        var arr1 = [1, 2, 3];
        alert(arr1[0]);
        // 利用new关键字和构造函数Array()
        var arr2 = new Array(); //创建了一个空的数组
        // var arr2 = new Array(2); //2 表示数组的长度为2，里面有2个空的元素
        var arr2 = new Array(2, 3); //等价于[2,3],表示里面有2个元素时2和3
        alert(arr2);
</script>
```

#### 检查是否为数组

```html
<script>
     //检查是否为数组
        var arr3 = new Array();
        var obj = new Object();
        // 1.利用运算符 instanceof 
        alert(arr3 instanceof Array); // ture
        alert(obj instanceof Array); // false
        alert(obj instanceof Object); // ture
        // 2. H5新增的方法 Array.isArray()
        alert(Array.isArray(arr3)); // ture
        alert(Array.isArray(obj)); // false
    
        //3. 案例：判断数组并反转数组
        function reverseArr(arr) {
            // if (arr instanceof Array) { // 或者
            if (Array.isArray(arr)) {
                var arr1 = new Array;
                for (var i = arr.length - 1; i >= 0; i--) {
                    arr1[arr1.length] = arr[i]
                }
                return '[' + arr1 + ']'
            } else {
                return '请输入正确的数组形式,比如[1,2,3]'
            }
        }
        var result = reverseArr([1, 2, 3]);
        alert(result);
</script>
```

#### 添加数组元素

```html
<script>
     //3. 添加数组元素
        // 在数组末尾添加元素push(),可添加一个活多个数组元素
        var arr4 = new Array(1, 2, 3);
        arr4.push(4); // 末尾添加一个元素
        alert(arr4);
        arr4.push(5, 'hello', arr4[arr4.length - 1]); // 添加多个元素
        alert(arr4);
    
        // 在数组开头添加元素 unshift(),可添加一个活多个数组元素
        arr4.unshift(0); // 开头添加一个元素
        alert(arr4);
        arr4.unshift(5, 'hello', arr4[arr4.length - 1]); // 添加多个元素
        alert(arr4);
</script>
```

#### 删除数组元素

```html
<script>
     //4. 删除数组元素
        // pop(),删除数组最后一个元素，并返回这个值,()里为空,不跟元素
        var arr5 = [1, 2, 3, 4, 'hello', 'world'];
        arr5.pop(); // 删除'world'
        alert(arr5); //[1, 2, 3, 4, 'hello'];
        alert(arr5.pop()); //删除'hello', 并返回hello
        alert(arr5); //[1, 2, 3, 4];
        
        // shift(),删除数组第一个元素，并返回这个值,()里为空,不跟元素
        arr5.shift(); // 删除 1
        alert(arr5); //[2, 3, 4];
        alert(arr5.shift()); //删除 2, 并返回2
        alert(arr5); //[3, 4];
</script>
```

![image-20230218165440532](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218165440532.png)

#### 数组排序

![image-20230218171949263](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218171949263.png)

```html
<script>
    // 6.数组排序
        // （1）反转数组 reverse()
        var arr6 = ['hello', 'world', 'happy', 'new year'];
        arr6.reverse();
        alert(arr6); // new year,happy,world,hello

        // （2）数组排序（冒泡排序）sort()
        var arr7 = [13, 4, 77, 7, 11];
        arr7.sort();
        alert(arr7); // 11,13,4,7,77 并没有严格按照冒泡排序

        // 解决方案： sort()里放一个自定义函数
        arr7.sort(
            function(a, b) {
                // return a - b; // 升序排列
                return b - a; // 降序排列
            }
        );
        alert(arr7); // 77,13,11,7,4
</script>
```

#### 获取数组元素的索引

![image-20230218193203842](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218193203842.png)

```html
<script>
     // 7. 返回数组中某元素的索引号
        var arr8 = ['red', 'green', 'blue', 'black', 'green'];

        // （1）indexOf(数组元素) 返回该元素第一次出现的索引号，如果没有，则返回-1
        alert(arr8.indexOf('green')); //1
        alert(arr8.indexOf('white')); //-1

        // （2）lastIndexOf(数组元素) 返回该元素最后一次出现的索引号，如果没有，则返回-1
        alert(arr8.lastIndexOf('green')); //4
        alert(arr8.lastIndexOf('red')); //0
        alert(arr8.lastIndexOf('white')); //-1
</script>
```

#### 数组转化成字符串

![image-20230218202030071](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218202030071.png)

```html
<script>
    // 9. 数组转换成字符串
        var arr10 = [1, 2, 3, 'pink', 'blue', 4, 5]
            // （1）toString()
        console.log(arr10); // Array(7)
        var word = arr10.toString();
        console.log(word); //1,2,3,pink,blue,4,5

        // （2）jion('分隔符') 分隔符默认是逗号
        var word = arr10.join()
        alert(word); //1,2,3,pink,blue,4,5
        var word2 = arr10.join('-');
        alert(word2); //1-2-3-pink-blue-4-5
        var word3 = arr10.join(' ');
        alert(word3); //1 2 3 pink blue 4 5
</script>
```

#### 其他常用的方法

![image-20230218203610646](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218203610646.png)

### 案例

#### 筛选数组（增加元素，删除元素）

![image-20230218165749059](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218165749059.png)

```html
<script>
    // 5. 案例，数组重组：把大于2000的元素删除，剩余的元素放到一个新素组里
        var wage = [1500, 1200, 3000, 1660, 1000, 4000];
        var newWage = [];
        for (var i = 0; i < wage.length; i++) {
            if (wage[i] < 2000) {
                // newWage[newWage.length] = wage[i]; //// 原先的方法
                newWage.push(wage[i]);
            }
        }
        alert(newWage); //  [1500, 1200, 1660, 1000];
</script>
```

#### 数组取重（获取索引号，和添加元素）

![image-20230218194541636](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218194541636.png)

![image-20230218195020324](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218195020324.png)

```html
<script>
     //8. 案例：数组元素取重：indexOf()返回值为-1，和push()添加元素法
        // 思路：创建空的心数组，用于存储取重后的元素，遍历旧数组，拿旧数组的元素取比较新数组的元素，
        // 如果此元素不在新数组中（indexOf(目标元素)的返回值为-1），则添加到新数组值push();

        // var arr9 = ['a', 'b', 'c', 'x', 'y', 'b', 'a', 'd', 'c'] //给定的旧数组
        // var newArr = [];
        // for (var i = 0; i < arr9.length; i++) {
        //     if (newArr.indexOf(arr9[i]) == -1) {
        //         newArr.push(arr9[i]);
        //     }
        // }
        // alert(newArr);

        // 封装一个取重函数
        function getUnique(arr) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (newArr.indexOf(arr[i]) == -1) {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        }
        var myArr = ['a', 'b', 'p', 'f', 'w', 'b', 'a', 'd', 'c'];
        alert(getUnique(myArr));
</script>
```

## string字符串对象

### 基本包装类型

![image-20230218220926227](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218220926227.png)

![image-20230218221052469](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218221052469.png)



![image-20230218221207714](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218221207714.png)

### 字符串不可变

![image-20230218221513928](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218221513928.png)

### 常用的方法

#### 根据字符返回位置

![image-20230218222025846](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218222025846.png)

```html
<script>
     // 1. 根据字符返回位置
        var str = 'helloworld';

        // （1）indexOf('字符') 返回该字符第一次出现的索引号，如果没有，则返回-1
        alert(str.indexOf('l')); //2
        alert(str.indexOf('a')); //-1
        // 也可以返回指定区间，字符出现的位置，indexOf('字符',数字)，从这个数字的位置之后查找
        alert(str.indexOf('l', 4)); //8, 从第4位之后开始查找
    
        // （2）lastIndexOf('字符') 返回该字符最后一次出现的索引号，如果没有，则返回-1
        alert(str.lastIndexOf('o')); //6
        alert(str.lastIndexOf('p')); //-1
        // 也可以返回指定区间，字符出现的位置，lastIndexOf('字符',数字)，从这个数字的位置之前查找
        alert(str.lastIndexOf('o', 5)); //4
</script>
```

#### 根据位置返回字符

![image-20230218230254416](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218230254416.png)

```html
<script>
     // 2. 根据位置返回字符
        var str = 'ahalialuyaoaopa';

        //（1）charAt(index) 返回该位置的字符
        alert(str.charAt(5)); //a
        // 遍历整个字符串的字符
        for (var i = 0; i < str.length; i++) {
            console.log(str.charAt(i));
        }

        //（2）charCodeAt(index) 返回相应索引号的字符ASCII码，用于判断用户按下了那个键
        alert(str.charCodeAt(5)); //97

        //（3）str[index] H5新增的方法
        alert(str[7]); //u
</script>
```

#### 拼接及截取字符串

![image-20230219002940808](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219002940808.png)

```html
<script>
      //3.拼接与截取
        // （1）concat() 拼接
        var str = 'hello'
        var str2 = 'world'
        alert(str.concat(str2)) // helloworld

        // （2）subString(start,end) 截取
        alert(str.substring(1, 3)) //el 不包括第3个
        alert(str.concat(str2).substring(3, 7)) //lowo
</script>
```

#### 替换字符串及转换为数组

```html
<script>
     //4.替换与转换成数组
        var str = 'hellohello';
        //（1）替换 replace('被替换的字符'，'替换为') ,只会替换第一个
        alert(str.replace('h', 'H')); // Hellohello
        // 如果需要替换所有的，可利用循环
        var str1 = 'hellohello';
        while (str1.indexOf('l') !== -1) {
            str1 = str1.replace('l', 'r');
        }
        alert(str1);


        //（2）转换成数组 splite('分隔符')
        alert(str1.split('')); //h,e,r,r,o,h,e,r,r,o

        var str2 = 'hello,world,hi'
        alert(str2.split(',')); //hello,world,hi
        var str3 = 'hello*world*hi'
        alert(str3.split('*')); //hello,world,hi
</script>
```



#### 其他方法

![image-20230219010149862](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219010149862.png)



### 案例：

#### 求某个字符出现的位子和次数（返回字符位置的方法）

![image-20230218224206157](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218224206157.png)

```html
<script>
    // (3) 案例练习：查找某字符出现的位置和次数
        var str = 'ahalialuyaoaopa';
        var index = str.indexOf('a'); // 字符a出现的位置
        var arr = []; // 存储位置的数组
        var num = 0 // 字符出现的次数
        while (index !== -1) {
            arr.push(index);
            num++;
            index = str.indexOf('a', index + 1); //找到之后，从这个位置下一位从新开始查找，知道找不到，返回-1，结束循环
        }
        alert('a字符出现的位置分别是' + arr); //a字符出现的位置分别是0,2,5,9,11,14
        alert('a字符出现的次数是' + num); // a字符出现的次数是6
</script>
```

#### 统计出现次数最多的字符（根据位置查找字符）

![image-20230218234722149](/Users/aqiang/Library/Application Support/typora-user-images/image-20230218234722149.png)

```html
<script>
     // (4) 案例练习：统计出现次数最多的字符
        var str = 'ahalialuyaoaopa';
        var obj = {}; // 创建一个空的对象，用来存储每个字符和其出现的次数

        // a, 遍历字符串，将字符和出现的次数存储到对象中，以属性名=属性值的形式
        for (var i = 0; i < str.length; i++) {
            var chars = str.charAt(i); //遍历字符串里的每个字符，并存储到chars里
            if (obj[chars]) {
                obj[chars]++; // obj对象有属性chars时，则把chars属性的值加一；
            } else {
                obj[chars] = 1; //obj对象没有属性chars时，则把chars存储到对象中，并给其赋值为1；
            }
        }
        console.log(obj); // 字符和次数以键值对的形式存储到对象中
        // b, 遍历对象，找到最多次数和对应的字符
        var max = 0; // 用于存储最多次数
        var ch = ''; // 用于存储对应的字符
        for (k in obj) {
            if (obj[k] > max) {
                max = obj[k];
                ch = k;
            }
        }
        alert('这个字符串里出现最多的字符是' + ch + '，出现了' + max + '次')
    
</script>
```

# 简单数据类型与复杂数据类型

## 概述

![image-20230219011035483](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219011035483.png)

![image-20230219011121099](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219011121099.png)

## 堆和栈

![image-20230219011310681](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219011310681.png)

## 简单类型的内存分配

![image-20230219011430992](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219011430992.png)

![image-20230219011522851](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219011522851.png)

## 复杂类型的分配

![image-20230219011844193](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219011844193.png)

![image-20230219011910778](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219011910778.png)

## 简单类型传参（值传递）

![image-20230219012144531](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219012144531.png)

## 复杂类型传参（地址传递）

![image-20230219013054735](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219013054735.png)

![image-20230219013510032](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219013510032.png)

![image-20230219013755825](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219013755825.png)

![image-20230219013930267](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219013930267.png)





