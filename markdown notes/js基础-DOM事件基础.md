## DOM简介

### 概述

![image-20230219102609548](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219102609548.png)

### DOM树

![image-20230219102922578](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219102922578.png)

## 获取元素

### 根据ID获取：document.getElementById('ID名')

![image-20230219105246659](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219105246659.png)

![image-20230219105344759](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219105344759.png)

```html
<body>
    <div id="time">2023-1-1</div>
    <script>
        //1. 因为文档是从上而下加载，所以先得有标签，所以script代码放在标签的后面
        //2. 参数ID是大小写敏感的字符串，需要加引号
        //3. 返回的是一个元素对象
        var timer = document.getElementById('time');
        console.log(timer); //<div id="time">2023-1-1</div> 元素
        console.log(typeof(timer)); //object 对象
        //4. console.dir 打印出返回元素对象，更好滴查看里面的属性和方法
        console.dir(timer);
    </script>
</body>

```

### 根据标签名获取：document.getElementsByName('标签名')

![image-20230219111146404](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219111146404.png)

![image-20230219111421438](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219111421438.png)

```html
<body>
    <div>
        <ul>
            <li>何鲁丽1</li> <li>何鲁丽2</li> <li>何鲁丽3</li> <li>何鲁丽4</li>
        </ul>
        <ol>
            <li>何鲁丽5</li> <li>何鲁丽6</li> <li>何鲁丽7</li> <li>何鲁丽8</li>
        </ol>
        <ol id="ol2">
            <li>何鲁丽555</li> <li>何鲁丽666</li> <li>何鲁丽777</li> <li>何鲁丽888</li>
        </ol>
    </div>
    
    <script>
        //1. 返回的是获取过来元素对象的集合，以伪数组的形式存储
        var lis = document.getElementsByTagName('li');
        console.log(lis); //HTMLCollection(12)
        console.log(lis[0]); // <li>何鲁丽1</li> 类似数组，获取第一个元素
        //2. 想要依次打印里面的元素对象，可以采取遍历的方式
        for (var i = 0; i < lis.length; i++) {
            console.log(lis[i]);
        }
        //3. 如果里面只有一个元素，返回的还是伪数组的形式
        var ul = document.getElementsByTagName('ul');
        console.log(ul); //HTMLCollection(1)

        //4. 如果页面中没有此元素，返回的空的为数组形式
        var p = document.getElementsByTagName('p');
        console.log(p); //HTMLCollection(0)

        //5.通过element.getElementsByTagName('')可得到指定标签里的字标签对象集合
        var ol = document.getElementsByTagName('ol'); // ol标签对象的集合
        console.log(ol[1].getElementsByTagName('li')); // ol[1]表示ol标签对象的集合里的第2个ol标签

        // 更常用的写法是
        var ol2 = document.getElementById('ol2'); // 通过ID名直接获得第2个ol标签
        console.log(ol2.getElementsByTagName('li'));
    </script>
</body>
```

### 通过H5新增方法获取

![image-20230219124015514](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219124015514.png)

```html
<body>
    <div class="box">box1</div>
    <div class="box">box2</div>
    <div>
        <ul>
            <li>产品</li>
            <li>首页</li>
        </ul>
    </div>

    <script>
        // 1. 通过类名 getElementsByClassName('类名'); 获得元素对象的集合，伪数组的形式存储
        var boxes = document.getElementsByClassName('box');
        console.log(boxes); // HTMLCollection(2) [div.box, div.box] 
        // 2. 通过选择器querySelector('选择器名') 获得指定选择器的第一个标签对象， 选择器名可以是标签名，或其他
        // 需要加符号，比如 .box, #logo
        var box1 = document.querySelector('div'); //  <div class="box">box1</div> 第一个div标签
        console.log(box1);
        var bx = document.querySelector('.box'); //  <div class="box">box1</div> 第一个类名为box的标签
        console.log(bx);

        // 3, 通过选择器querySelectorAll('选择器名') 获得指定选择器的所有标签对象,伪数组的形式存储
        var lis = document.querySelectorAll('li');
        console.log(lis); // NodeList(2) [li, li]

        var bx = document.querySelectorAll('.box');
        console.log(bx); // NodeList(2) [div.box, div.box]
    </script>
</body>
```

### 特殊元素的获取(body, html)

![image-20230219124544144](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219124544144.png)

```html
<body>
    <div class="box">box1</div>
    <div>
        <ul>
            <li>产品</li>
        </ul>
    </div>

    <script>
        // 1. body元素，通过 document.body, 返回的是body标签对象
        var bodyEle = document.body;
        console.log(bodyEle);
        console.dir(bodyEle);

        // 2, html元素，通过document.documentElement, 返回的是html标签对象
        var htmlEle = document.documentElement;
        console.log(htmlEle);
        console.dir(htmlEle);
    </script>
</body>
```

## 事件基础

### 事件概述

![image-20230219125657080](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219125657080.png)

### 事件3要素

![image-20230219130042718](/Users/aqiang/Library/Application Support/typora-user-images/image-20230219130042718.png)

```html
<body>
    <button id="btn">唐伯虎</button>

    <script>
        // 点击按钮，弹出对话框
        //1. 获取事件源
        var btn = document.getElementById('btn');
        //2. 事件类型，鼠标点击 btn.onclick
        //3. 事件处理程序，通过函数赋值来实现
        btn.onclick = function() {
            alert('点秋香')
        }
    </script>
</body>
```

### 事件执行过程

![image-20230220092307247](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220092307247.png)

### 常见的鼠标事件

![image-20230220092415801](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220092415801.png)

## 操作元素

### 改变元素内容

![image-20230220101849397](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220101849397.png)

```html
<body>
    <button id="btn">点击查看当前时间</button>
    <div style="background-color: brown;">点击按钮才能显示</div>
    <nav>打开页面直接显示</nav>
    <div class="div"></div>
    <p>
        我是文字
        <span>123</span>
    </p>


    <script>
        // 1. element.innerHTML 和 element.innerText 改变元素内容,推荐使用innerHTML

        // 点击按钮button，改变div盒子的内容

        //(1). 获取事件源
        var btn = document.getElementById('btn');
        var div = document.querySelector('div');

        //(2). 事件类型，鼠标点击 btn.onclick, div.innerHTML
        //(3). 事件处理程序，通过函数赋值来实现
        btn.onclick = function() {
            // div.innerHTML = '2023-1-1'
            // (4) 动态显示当前时间，调用当前时间的函数
            div.innerHTML = getTime();

        }

        // 案例3: 封装一个当前时间的函数，调用此案例的函数
        function getTime() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var dates = date.getDate();
            var day = date.getDay();
            // day 值是数字0-6，可以作为数字week的索引来输出对应的中文星期数 
            var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

            var h = date.getHours();
            h = h < 10 ? '0' + h : h;
            var m = date.getMinutes();
            m = m < 10 ? '0' + m : m;
            var s = date.getSeconds();
            s = s < 10 ? '0' + s : s;
            return '当前时间是:' + year + '年' + month + '月' + dates + '日，' + week[day] + '，' + h + '点' + m + '分' + s + '秒'
        }
        //(4). 也可以不用给元素注册时间，打开页面直接更改元素内容
        // 获取事件源
        var nav = document.querySelector('nav');
        // 更改内容
        nav.innerHTML = getTime();

        // 2. element.innerHTML 和 element.innerText 的区别

        //(1). innerText 不识别html标签，非标准，读取内容时会自动去除空格和换行
        var div1 = document.querySelector('.div');
        div1.innerText = '<strong>今天是:</strong> 2023年' //不识别html标签

        //(2). innerHTML 识别html标签，wsc标准，保留空格和换行
        div1.innerHTML = '<strong>今天是:</strong> 2023年' // 识别html标签

        //(3). 这两个属性能也读取元素里面的内容
        var p = document.querySelector('p');
        alert(p.innerText); // 不识别html标签,自动去除空格和换行
        alert(p.innerHTML); // 识别html标签,保留空格和换行
    </script>
</body>
```

### 改变元素属性

![image-20230220104532342](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220104532342.png)

```html
<body>
    <button id="red">红色背景</button>
    <button id="green">绿色背景</button>
    <div>我是div</div>


    <script>
        //  更改元素属性

        // 点击不同按钮button，改变div盒子的属性 div.style

        //(1). 获取事件源
        var red = document.getElementById('red');
        var green = document.getElementById('green');

        var div = document.querySelector('div');

        //(2). 事件类型，鼠标点击 btn.onclick, 
        //(3). 事件处理程序，通过函数赋值来实现
        red.onclick = function() {
            div.style.backgroundColor = 'red';
            div.style.width = '100px'
            div.style.color = 'green';
        }
        green.onclick = function() {
            div.style.backgroundColor = 'green';
            div.style.width = '200px';
            div.style.color = 'red';
        }
    </script>
</body>
```

### 案例：分时问候

![image-20230220110652039](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220110652039.png)

![image-20230220110716710](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220110716710.png)

```html
<body>
    <img src="" alt="" style="width: 200px;">
    <div></div>
    <script>
        //1.  获取事件元素
        var img = document.querySelector('img');
        var div = document.querySelector('div');
        //2.  绑定事件元素属性或内容
        // img.src
        // div.innerHTML
        //3. 执行程序：判断当前时间，显示不同的属性和内容
        var date = new Date();
        var hour = date.getHours();
        if (hour < 12) {
            img.src = 'images/s.gif'
            div.innerHTML = 'good moring'
        } else if (hour >= 12 && hour < 18) {
            img.src = 'images/x.gif'
            div.innerHTML = 'good afternoon'
        } else {
            img.src = 'images/w.gif'
            div.innerHTML = 'good night'
        }
    </script>
</body>
```

### 表单元素的属性操作

![image-20230220113350847](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220113350847.png)

```html
<body>
    <button>点击</button>
    <input type="text" value="请输入内容">
    <script>
        //1.  获取事件元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        //2.  绑定事件元素属性或内容
        // btn.onclick, this.disabled
        // input.value, input.disabled
        //3. 执行程序：
        btn.onclick = function() {
            // input.innerHTML = '点击了'//innerHTML适用于普通盒子，如div
            input.value = '点击了'; // 表单里的文字内容，通过value属性更改
            // 让某个表达被禁用，使用disabled 属性
            input.disabled = true;
            // btn.disabled = true;
            // 可使用关键字this，this指向的是事件函数的调用者
            this.disabled = true;
        }
    </script>
</body>
```

### 案例：仿京东显示密码

![image-20230220115255472](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220115255472.png)

![image-20230220115444689](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220115444689.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 400px;
            border-bottom: 1px solid #ccc;
            margin: 0 auto;
            position: relative;
        }
        
        .box input {
            width: 350px;
            height: 40px;
            border: 0px;
            outline: none;
        }
        
        .box label img {
            width: 24px;
            position: absolute;
            top: 10px;
            left: 370px;
        }
    </style>
</head>

<body>
    <div class="box">
        <label for="">
            <img src="images/eyeClose.png" alt="">
        </label>
        <input type="password">
    </div>
    <script>
        //1.  获取事件元素
        var img = document.querySelector('img');
        var input = document.querySelector('input');

        //2.  绑定事件元素属性或内容
        // img.onclick, this.scr
        // input.type
        //3. 执行程序：
        var flag = 0;
        img.onclick = function() {
            if (flag == 0) {
                this.src = 'images/eyeOpen.png';
                input.type = 'text';
                flag = 1;
            } else {
                this.src = 'images/eyeClose.png';
                input.type = 'password';
                flag = 0;
            }
        }
    </script>
</body>
```

### 样式属性操作

![image-20230220154541101](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220154541101.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        
        .change {
            background-color: red;
            width: 300px;
            border-radius: 50px;
            color: #fff;
        }
    </style>
</head>

<body>
    <div class="box">helloworld</div>
    <script>
        //1. 通过element.style，操作样式属性，适用于需要修改的样式比较少，或功能简单时
        //(1).  获取事件元素
        var div = document.querySelector('div');

        //(2).  绑定事件元素属性或内容
        // div.onclick, this.style

        //(3). 执行程序：多次使用this.style， 程序繁琐
        // div.onclick = function() {
        //     this.style.backgroundColor = 'red';
        //     this.style.width = '300px'
        //     this.style.borderRadius = '50px'
        //     this.style.color = 'white'
        // }

        // //2. 通过修改元素的className,来统一修改样式，推荐使用。把需要修改的样式全部写进一个新的类名里
        // div.onclick = function() {
        //     this.className = 'change' // 点击事件时，给div元素添加新的样式,类名为change
        // }

        //3. className会直接覆盖掉原先的类名，想要保留原来的类名（追加类名）可以写成以下
        div.onclick = function() {
            this.className += ' change' // 注意：change前有一个空格
        }
    </script>
</body>
```

### 案例；仿淘宝点击关闭二维码

![image-20230220124633714](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220124633714.png)

![image-20230220124713891](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220124713891.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            position: relative;
            width: 225px;
            height: 300px;
            margin: 100px auto;
        }
        .close_btn {
            position: absolute;
            top: 25px;
            left: -40px;
            width: 50px;
            height: 50px;
            background-color: #ccc;
            font-size: 40px;
            text-align: center;
            line-height: 50px;
        }
    </style>
</head>

<body>
    <div class="box">
        淘宝二维码
        <img src="images/taobao.png" alt="">
        <i class="close_btn"> × </i>
    </div>
    <script>
        // 操作样式属性，通过element.style
        //1.  获取事件元素
        var btn = document.querySelector('.close_btn');
        var box = document.querySelector('.box');
        //2.  绑定事件元素属性或内容
        // close_btn.onclick, box.style

        //3. 执行程序：
        btn.onclick = function() {
            box.style.display = 'none'
        }
    </script>
</body>
```

### 案例：循环精灵图背景

![image-20230220131218913](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220131218913.png)

![image-20230220131342201](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220131342201.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            margin: 100px auto;
        }
        
        li {
            float: left;
            width: 60px;
            height: 60px;
            margin: 10px;
            list-style: none;
            background-image: url(images/sprite.png);
        }
    </style>
</head>

<body>
    <div class="box">
        <ul>
            <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li>
        </ul>
    </div>
    <script>
        // 操作样式属性，通过element.style
        //1.  获取事件元素
        var lis = document.querySelectorAll('li');
        //2.  绑定事件元素属性或内容
        // lis.style
        //3. 执行程序：for循环，依次设置背景图片位置
        for (var i = 0; i < lis.length; i++) {
            var index = i * 60
                // lis[0].style.backgroundPosition = '60px 0'
                // lis[1].style.backgroundPosition = '120px 0'
            lis[i].style.backgroundPosition = index + 'px 0'
        }
    </script>
</body>
```

### 案例：显示隐藏文本框内容

![image-20230220150321821](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220150321821.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        input {
            color: #999;
        }
    </style>
</head>

<body>
    <input type="text" name="" id="" value="手机">
    <script>
        // 操作样式属性，通过element.style
        //1.  获取事件元素
        var input = document.querySelector('input');

        //2.  绑定事件元素属性或内容
        // input.onfoucs
        //3. 执行程序：
        // 获得焦点
        input.onfocus = function() {
                if (this.value === '手机') {
                    this.value = '';
                }
                // 内容颜色变深
                this.style.color = '#333'
            }
            // 失去焦点
        input.onblur = function() {
            if (this.value === '') {
                this.value = '手机';
            }
            // 内容颜色变浅
            this.style.color = '#999'
        }
    </script>
</body>
```

### 案例：密码框提示错误信息

![image-20230220155259002](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220155259002.png)

![image-20230220155400277](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220155400277.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .register {
            width: 600px;
            margin: 100px auto;
        }
        
        .message {
            display: inline-block;
            font-size: 12px;
            color: #999;
            padding-left: 20px;
        }
        
        .wrong {
            color: red;
        }
        
        .right {
            color: green;
        }
    </style>
</head>

<body>
    <div class="register">
        <input type="password" class="ipt">
        <p class="message">请输入6-16位密码</p>
    </div>
    <script>
        // 操作样式属性，通过element.style
        //1.  获取事件元素
        var ipt = document.querySelector('.ipt');
        var mes = document.querySelector('.message');

        //2.  绑定事件元素属性或内容
        // ipt.onblur

        //3. 执行程序：
        // 失去焦点
        ipt.onblur = function() {
            if (this.value.length < 6 || this.value.length > 16) {
                mes.className += ' wrong';
                mes.innerHTML = '你输入的密码错误'
            } else {
                mes.className += ' right'
                mes.innerHTML = '你输入的密码正确'
            }
        }
    </script>
</body>
```

### 操作元素小结

![image-20230220161514380](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220161514380.png)

### 操作多个元素

#### 排他思想

![image-20230220162109806](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220162109806.png)

```html
<body>
    <button>点击</button>
    <button>点击</button>
    <button>点击</button>
    <button>点击</button>
    <button>点击</button>
    <script>
        // 多个元素操作时的排他思想
        // 5个按钮，点一某按钮，他背景颜色改变

        //1.  获取事件元素
        var btns = document.querySelectorAll('button')

        //2.  绑定事件元素属性或内容
        // btns.onclick

        //3. 执行程序：

        // for 循环，绑定所有的按钮
        for (var i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                // (1) 先把所有的背景颜色去掉，利用for循环
                for (var i = 0; i < btns.length; i++) {
                    btns[i].style.backgroundColor = '';
                }
                // (2) 在给当前的按钮添加背景
                this.style.backgroundColor = 'pink'
            }
        }
    </script>
</body>
```

#### 案例：百度换肤

![image-20230220163658218](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220163658218.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background: url(images/1.jpg) no-repeat center center;
        }
        
        .baidu {
            width: 600px;
            list-style: none;
            margin: 0 auto;
        }
        
        .baidu li {
            margin: 20px;
            float: left;
            width: 100px;
            height: 50px;
            border: 2px solid white;
        }
        
        .baidu li img {
            width: 100%;
            height: 100%;
        }
    </style>
</head>

<body>
    <ul class="baidu">
        <li>
            <img src="images/1.jpg" alt="">
        </li>
        <li>
            <img src="images/2.jpg" alt="">
        </li>
        <li>
            <img src="images/3.jpg" alt="">
        </li>
        <li>
            <img src="images/4.jpg" alt="">
        </li>
    </ul>
    <script>
        //1.  获取事件元素. 获取所有的img
        var imgs = document.querySelector('.baidu').querySelectorAll('img');

        //2.  绑定事件元素属性或内容
        // imgs.onclick

        //3. 执行程序：

        // for 循环，绑定所有元素
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].onclick = function() {
                // // (1) 获取被点击图片的路径地址
                // console.log(this.src);
                // (2) 把获取路径地址 给body 背景
                document.body.style.backgroundImage = 'url(' + this.src + ')'
            }
        }
    </script>
</body>
```

#### 案例：表格隔行变色

![image-20230220170907857](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220170907857.png)

![image-20230220171556310](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220171556310.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            width: 600px;
            height: 250px;
            margin: 100px auto;
            border: 1px solid #000;
            border-collapse: collapse;
        }
        
        td,
        th {
            border: 1px solid #999;
            text-align: center;
        }
        
        .bg {
            background-color: darkmagenta;
        }
    </style>
</head>

<body>
    <table>
        <thead>
            <tr>
                <th>代码</th>
                <th>名称</th>
                <th>最新净值</th>
                <th>累计净值</th>
                <th>前单位净值</th>
                <th>净值增长率</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>003526</td>
                <td>农行金穗</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.0047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农行金穗</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.0047%</td>
            </tr>

        </tbody>
    </table>
    <script>
        //1.  获取事件元素. 获取tbody里面的所有行tr
        var trs = document.querySelector('tbody').querySelectorAll('tr');

        //2.  绑定事件元素属性或内容
        // trs[i].onmouseover， trs[i].onmouseleave

        //3. 执行程序：
        for (var i = 0; i < trs.length; i++) {

            trs[i].onmouseover = function() {
                this.className += ' bg';
            }
            trs[i].onmouseleave = function() {
                this.className = '';
            }
        }
    </script>
</body>

```

#### 案例：表单全选与取消全选

![image-20230220174413036](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220174413036.png)

![image-20230220210352861](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220210352861.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            width: 600px;
            margin: 100px auto;
            border: 1px solid #000;
            border-collapse: collapse;
        }
        
        td,
        th {
            border: 1px solid #999;
            text-align: center;
            height: 30px;
        }
    </style>
</head>

<body>
    <table>
        <thead>
            <tr>
                <th><input type="checkbox" class="cball"></th><th>名称</th><th>价格</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th><input type="checkbox"></th><td>农行金穗</td><td>1.075</td>
            </tr>
            <tr>
                <th><input type="checkbox"></th><td>农行金穗</td><td>1.075</td>
            </tr>
            <tr>
                <th><input type="checkbox"></th><td>农行金穗</td><td>1.075</td>
            </tr>
        </tbody>
    </table>
    <script>
        //1. 全选和取消全选,让下面所有按钮的checked跟岁全选按钮的checked值
        //(1).  获取事件元素. 获取thead里面的全选按钮
        var cball = document.querySelector('.cball');
        // 获取tbody里面的所有checkbox按钮
        var tb_cb = document.querySelector('tbody').getElementsByTagName('input');

        //(2).  绑定事件元素属性或内容
        // cball.onclick

        //(3). 执行程序：
        cball.onclick = function() {
                // tbody里面的所有checkbox按钮的checked值与全选按钮的checked值一致
                for (var i = 0; i < tb_cb.length; i++) {
                    tb_cb[i].checked = this.checked
                }
            }
            //2. tbody里面的所有checkbox按钮影响全选按钮， 每一个checkbox按钮注册点击事件，只有所有的checkbox按钮注checked时，全选按钮才选择
        for (var i = 0; i < tb_cb.length; i++) {
            tb_cb[i].onclick = function() {
                // flag 控制全选按钮是否选中
                var flag = true;
                // 检查每一个是否选中
                for (var i = 0; i < tb_cb.length; i++) {
                    if (!tb_cb[i].checked) {
                        flag = false;
                        break; // 只要有一个没选中，就退出检查是否选中的循环，提高代码执行效率
                    }
                }
                cball.checked = flag;
            }
        }
    </script>
</body>
```

### 自定义属性的操作

#### 获取属性值

![image-20230220232153246](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220232153246.png)

#### 设置属性值

![image-20230220233135387](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220233135387.png)

#### 移除属性值

![image-20230220233252368](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220233252368.png)

```html
<body>
    <div id="demo" index="1"></div>

    <script>
        var div = document.querySelector('div');
        //1. 获取元素属性值的方法
        //(1). 对元素自带属性（内部属性），使用element.属性，获得属性值
        var value = div.id;
        alert(value); // demo

        //(2). 对于自定属性（程序员自定义的属性）,比如上面的index， 使用element.getAttribute('属性名');
        var inx = div.getAttribute('index');
        alert(inx); //1

        //2. 设置属性值
        //(1). 对元素自带属性（内部属性），使用element.属性=属性值
        div.id = 'test';
        var value = div.id;
        alert(value); // test

        //(2). 对于自定属性（程序员自定义的属性）,比如上面的index， 使用element.setAttribute('属性名','属性值');
        div.setAttribute('index', '2');
        var inx = div.getAttribute('index');
        alert(inx); //2

        //3. 删除属性值
        //  使用element.removeAttribute('属性名');
        div.removeAttribute('index');
        console.log(div); //  <div id="demo"></div>
        div.removeAttribute('id');
        console.log(div); //  <div></div>
    </script>
</body>
```

#### 案例：tab栏切换

![image-20230220233936110](/Users/aqiang/Library/Application Support/typora-user-images/image-20230220233936110.png)

![image-20230221002822701](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221002822701.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .tab {
            width: 502px;
            margin: 100px auto;
        }
        
        .tablist {
            background-color: #ccc;
            border: 1px solid #999;
        }
        
        .tablist ul {
            list-style: none;
            overflow: hidden;
        }
        
        .tablist ul li {
            float: left;
            width: 100px;
            height: 30px;
            text-align: center;
            line-height: 30px;
        }
        
        .tablist ul .current {
            background-color: red;
            color: white;
        }
        
        .tabcon {
            padding: 20px;
        }
        
        .tabcon .item {
            display: none;
        }
    </style>
</head>

<body>
    <div class="tab">
        <div class="tablist">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格包装</li>
                <li>售后保障</li>
                <li>商品评价</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tabcon">
            <div class="item" style="display: block;">商品介绍内容</div>
            <div class="item">规格包装内容</div>
            <div class="item">售后保障内容</div>
            <div class="item">商品评价内容</div>
            <div class="item">手机社区内容</div>
        </div>
    </div>

    <script>
        // 获取事件元素
        var tablist = document.querySelector('.tablist');
        var lis = tablist.querySelectorAll('li');
        var items = document.querySelectorAll('.item');

        // 注册事件： lis[i].onclick
        // 执行程序： for循环，给每个li 绑定事件
        for (var i = 0; i < lis.length; i++) {
            // 先给每个li添加索引号，用于和下面显示卡模块一一对应
            lis[i].setAttribute('index', i);
            //1. 上模块选项卡，点击某一个，当前这个底色为红色，其余不变色（排他思想）。修改类名的方式实现
            lis[i].onclick = function() {
                // 排他思想，先给所有的li去除背景色
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = ''
                }
                // 再给当前的li添加背景色
                this.className += ' current';
                //2. 下面显示卡模块
                // 获取被点击li的索引号
                var index = this.getAttribute('index');
                // 显示index对应的内容
                // 排他思想
                // 先让所有的隐藏
                for (var i = 0; i < items.length; i++) {
                    items[i].style.display = 'none'
                }
                // 让被点击的内容显示
                items[index].style.display = 'block';
            }
        }
    </script>
</body>
```

### H5自定义属性

#### 目的用途

![image-20230221005649840](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221005649840.png)

#### 设置自定义属性

![image-20230221005743640](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221005743640.png)

#### 获取自定义属性的值

![image-20230221010103069](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221010103069.png)

## 节点操作

### 概述

![image-20230221102712930](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221102712930.png)

![image-20230221102901632](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221102901632.png)

![image-20230221103049083](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221103049083.png)

### 节点层级

#### 父节点

![image-20230221103428825](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221103428825.png)

```html
<body>
    <div class="box">
        淘宝二维码
        <img src="images/taobao.png" alt="">
        <i class="close_btn"> × </i>
    </div>
    <script>
        // 节点操作，父级节点parentNode

        // 操作样式属性，通过element.style
        //1.  获取事件元素
        var btn = document.querySelector('.close_btn');

        // var box = document.querySelector('.box');// 元素操作获取的
        //2.  绑定事件元素属性或内容
        // close_btn.onclick, box.style

        //3. 执行程序：
        btn.onclick = function() {
            // box.style.display = 'none'// 元素操作时的事件

            // 使用父节点，获取父级盒子（最近以及的父节点），如果没有，返回值为null
            this.parentNode.style.display = 'none';
        }
    </script>
</body>
```

#### 子节点

![image-20230221104631139](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221104631139.png)

![image-20230221104821773](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221104821773.png)

![image-20230221111617055](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221111617055.png)

![image-20230221111750755](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221111750755.png)

![image-20230221112216045](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221112216045.png)

```html
<body>
    <div>
        <ul>
            <li>何鲁丽1</li>
            <li>何鲁丽2</li>
        </ul>
        <ol>
            <li>何鲁丽3</li>
            <li>何鲁丽4</li>
            <li>何鲁丽5</li>
            <li>何鲁丽6</li>
        </ol>
    </div>

    <script>
        // 获取ul里的所有li
        var ul = document.querySelector('ul');
        // 操作元素的方法获取子元素li
        var lis = ul.querySelectorAll('li');
        console.log(lis);
        // 操作节点的方法获取，子节点
        // 1. parentNode.childNodes, 获取所有子节点，包括文本节点（空格等）
        console.log(ul.childNodes); // 5个节点 NodeList(5) [text, li, text, li, text]

        // 2. parentNode.children，只获取元素节点，推荐使用
        console.log(ul.children); // 2个节点 HTMLCollection(2) [li, li]

        //3. 获取第一个子元素节点和最后一个子元素节点，
        // 获取ol里的li
        var ol = document.querySelector('ol');

        // (1) 包括所有的类型的第一个子节点和最后一个子节点 firstChild 和lastChild
        console.log(ol.firstChild); //#text
        console.log(ol.lastChild); //#text
        // (2) 只包括元素类型的第一个子节点和最后一个子节点 firstElementChild 和 lastElementChild 
        // 但是有兼容性问题
        console.log(ol.firstElementChild); // <li>何鲁丽3</li>
        console.log(ol.lastElementChild); //<li>何鲁丽6</li>
        // (3) 实际开发中，只包括元素类型的第一个子节点和最后一个子节点 parentNode.children[0] 
        // 和 parentNode.children[parentNode.children.length-1] 

        console.log(ol.children[0]); // <li>何鲁丽3</li>
        console.log(ol.children[ol.children.length - 1]); //<li>何鲁丽6</li>
    </script>
</body>
```

#### 案例：新浪下拉菜单

![image-20230221113610873](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221113610873.png)

![image-20230221114622818](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221114622818.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .nav {
            width: 310px;
            margin: 100px auto;
        }
        
        .nav .item {
            float: left;
            width: 100px;
            text-align: center;
            border: 1px solid pink;
        }
        
        .nav .item a {
            display: block;
            text-decoration: none;
            height: 30px;
            line-height: 30px;
        }
        
        .change {
            background-color: yellowgreen;
            color: #fff;
        }
        
        .nav .item ul {
            text-align: center;
            display: none;
        }
        
        .nav .item ul li {
            height: 30px;
            line-height: 30px;
            border: 1px solid #ccc;
        }
    </style>
</head>

<body>
    <ul class="nav">
        <li class="item">
            <a href="#">微博</a>
            <ul>
                <li>私信</li>
                <li>评论</li>
                <li>@我</li>
            </ul>
        </li>
        <li class="item">
            <a href="#">微博</a>
            <ul>
                <li>私信</li>
                <li>评论</li>
                <li>@我</li>
            </ul>
        </li>
        <li class="item">
            <a href="#">微博</a>
            <ul>
                <li>私信</li>
                <li>评论</li>
                <li>@我</li>
            </ul>
        </li>
    </ul>

    <script>
        // 鼠标经过item时，显示其第二个子元素ul
        // 1. 获取元素
        var nav = document.querySelector('.nav');
        var lis = nav.children; // 获取了3个item的集合
        // 2. 注册事件
        // 3.执行程序
        for (var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function() {
                this.children[0].className += ' change'
                this.children[1].style.display = 'block';
            }
            lis[i].onmouseleave = function() {
                this.children[0].className = ''
                this.children[1].style.display = 'none';
            }
        }
    </script>
</body>
```

#### 兄弟节点

![image-20230221134312034](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221134312034.png)

![image-20230221134451541](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221134451541.png)

![image-20230221134604801](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221134604801.png)

```html
<body>
    <div>div</div>
    <span>span</span>
    <p>p</p>

    <script>
        // 获取span元素节点
        var span = document.querySelector('span');

        // 操作节点的方法获取，兄弟节点nextSibling和previousSibling

        // (1) 包括所有的类型的
        console.log(span.nextSibling); //#text
        console.log(span.previousSibling); //#text

        // (2) 只包括元素类型的节点 nextElementSibling 和 previousElementSibling
        // 但是有兼容性问题
        console.log(span.nextElementSibling); // <p>p</p>
        console.log(span.previousElementSibling); //<div>div</div>

        // (3) 实际开发中，封装一个函数使用
        function getNextElementSibling(element) {
            var el = element;
            while (el = el.nextSibling) {
                if (el.nodeType === 1) {
                    return el;
                }
            }
            return null;
        }

        function getPreviousElementSibling(element) {
            var el = element;
            while (el = el.previousSibling) {
                if (el.nodeType === 1) {
                    return el;
                }
            }
            return null;
        }

        var p = getNextElementSibling(span);
        var div = getPreviousElementSibling(span);
        console.log(p); // <p>p</p>
        console.log(div); //<div>div</div>
    </script>
</body>
```

### 节点操作方法

#### 创建节点

![image-20230221141108398](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221141108398.png)

#### 添加节点

![image-20230221142150354](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221142150354.png)

```html
<body>
    <ul>
        <li>123</li>
    </ul>
    <script>
        // 获取ul元素节点
        var ul = document.querySelector('ul');

        // 1. 新建元素节点
        var li = document.createElement('li')

        // 2. 把新建的节点添加到指定位置
        // (1) 给父节点追加子节点，新的子节点在最后面。类似于push
        ul.appendChild(li);

        // (2) 指定新节点的位置 node.insertBefore(child, 指定元素)
        var lili = document.createElement('li')
        ul.insertBefore(lili, ul.children[0])

        // 3. 需要给页面添加新的元素，需要2步：新建元素，添加元素
    </script>
</body>
```

#### 案例；简单版发布留言

![image-20230221143220471](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221143220471.png)

![image-20230221143329420](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221143329420.png)

```html
<body>
    <textarea name="" id="" cols="30" rows="10" style="border: 1px solid pink;"></textarea>
    <button>发布</button>
    <ul style="background-color: dodgerblue; width: 300px;">
        <li>123</li>
    </ul>
    <script>
        //1.获取元素节点
        var txt = document.querySelector('textarea');
        var btn = document.querySelector('button');
        var ul = document.querySelector('ul');
        //1.注册事件
        // btn,onclick, txt.innerHTML
        //3. 执行程序
        btn.onclick = function() {
            if (txt.value == '') {
                alert('请输入内容');
                return false;
            } else {
                // 新建元素节点
                var li = document.createElement('li');
                // 添加元素节点
                ul.appendChild(li);
                // 设置新增元素的内容
                li.innerHTML = txt.value
                txt.value = ''; //清楚文本域内容
            }
        }
    </script>
</body>
```

#### 删除节点

![image-20230221150933509](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221150933509.png)

```html
<body>
    <button>delete</button>
    <ul>
        <li>熊大</li>
        <li>熊二</li>
        <li>光头强</li>
    </ul>
    <script>
        //1.获取元素节点
        var btn = document.querySelector('button');
        var ul = document.querySelector('ul');
        //1.注册事件
        // btn,onclick, 
        //3. 执行程序
        btn.onclick = function() {
            if (ul.children.length == 0) {
                this.disabled = 'ture';
            } else {
                // 删除父节点里的子节点 node.removeChild(child)
                // ul.removeChild(ul.children[0]) // 从头删除
                ul.removeChild(ul.children[ul.children.length - 1]) // 从尾删除
            }
        }
    </script>
</body>
```



#### 案例：删除留言

![image-20230221152017898](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221152017898.png)

![image-20230221152305141](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221152305141.png)

```html
<body>
    <textarea name="" id="" cols="30" rows="10" style="border: 1px solid pink;"></textarea>
    <button>发布</button>
    <ul style="background-color: dodgerblue; width: 300px;">
        <!-- <li>123</li> -->
        <a href="javascript:;"></a>
    </ul>
    <script>
        //1.获取元素节点
        var txt = document.querySelector('textarea');
        var btn = document.querySelector('button');
        var ul = document.querySelector('ul');
        //1.注册事件
        // btn,onclick, txt.innerHTML
        //3. 执行程序
        btn.onclick = function() {
            if (txt.value == '') {
                alert('请输入内容');
                return false;
            } else {
                //(1) 新建元素节点
                var li = document.createElement('li');

                //(2) 添加元素节点
                // ul.appendChild(li); // 添加到后面
                ul.insertBefore(li, ul.children[0]) //添加到前面

                //(3) 设置新增元素的内容, 同时添加一个a链接，用于删除作用
                li.innerHTML = txt.value + '<a href="javascript:;">delete</a>';
                txt.value = ''; //清楚文本域内容
            }

            // //(4) 删除节点元素，删除当前的li
            // 思路1
            // // 因为a链接是在发布按钮里生产的，所以a链接的点击事件必须放在发布按钮里
            // var asd = document.querySelectorAll('a');
            // for (var i = 0; i < asd.length - 1; i++) {
            //     asd[i].onclick = function() {
            //         // 删除当前a链接对应的li, this.parentNode
            //         ul.removeChild(this.parentNode);
            //     }
            // }

            // 思路2： 每点击一次发布按钮，生成一个当前的li和链接a,所以不用循环所有的a链接
            var a = li.querySelector('a');
            a.onclick = function() {
                ul.removeChild(li)
            }
        }
    </script>
</body>
```

#### 复制节点

![image-20230221160405455](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221160405455.png)

```html
<body>
    <button>delete</button>
    <ul>
        <li>熊大</li>
        <li>熊二</li>
        <li>光头强</li>
    </ul>
    <script>
        // 复制节点：node.cloneNode()

        //1.获取元素节点
        var btn = document.querySelector('button');
        var ul = document.querySelector('ul');
        //1.注册事件
        //3. 执行程序

        btn.onclick = function() {
            //复制谁？
            // var lili = ul.children[0].cloneNode();// 括号里为空时，表示浅拷贝，只复制标签名，不复制内容
            var lili = ul.children[0].cloneNode(true); // 括号里为true时，表示深拷贝，同时复制内容
            //放哪里？
            // ul.appendChild(lili); // 放后面
            ul.insertBefore(lili, ul.children[0]) //放在前面
        }
    </script>
</body>
```

#### 案例：动态生成表格

![image-20230221161355293](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221161355293.png)

![image-20230221172402853](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221172402853.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            width: 500px;
            margin: 100px auto;
            border-spacing: 0px;
            border-collapse: collapse;
            text-align: center;
        }
        
        th,
        td {
            border: 1px solid green;
        }
        
        thead tr {
            height: 40px;
            background-color: #ccc;
        }
    </style>
</head>

<body>
    <table cellspacing="0">
        <thead>
            <tr>
                <th>姓名</th>
                <th>科目</th>
                <th>成绩</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script>
        // 1.先准备学生的数据，数据存放在一个对象中，多个对象放在一个数组里
        var datas = [{
            name: '熊大',
            subject: 'javascript',
            score: 100
        }, {
            name: '熊二',
            subject: 'javascript',
            score: 99
        }, {
            name: '光头强',
            subject: 'javascript',
            score: 98
        }, ]

        // 2.往tbody里创建行，有几个人（通过数组的长度），我们就常见几行
        var tbody = document.querySelector('tbody');
        for (var i = 0; i < datas.length; i++) { //外面的for循环管行
            // (1) 创建tr
            var tr = document.createElement('tr');
            // (2) 添加tr
            tbody.appendChild(tr);
            // (3)行里面创建有数据的单元格td，单元格的数量取决于对象里的属性个数， for循环遍历对象
            for (var k in datas[i]) { // 里面的for循环 管列
                //创建单元格td 
                var td = document.createElement('td');
                //添加td
                tr.appendChild(td);
                // 把对象里的属性值传递给td
                td.innerHTML = datas[i][k];
                // 遍历对象 for(k in obj){
                //     k 得到的是属性名
                //     obj[k] 得到的是属性值, obj=datas[i]
                // }
            }
            //（4）行里创建删除操作的单元格
            //创建
            var td = document.createElement('td');
            //添加
            tr.appendChild(td);
            //添加内容
            td.innerHTML = '<a href="javascript:;">delete</a>'
        }
        // 3.注册删除事件
        var asd = document.querySelectorAll('a');
        for (var i = 0; i < asd.length; i++) {
            asd[i].onclick = function() {
                // 点击a链接，删除a链接所在的行tr，行tr是a链接爸爸（td)的爸爸，this.parentNode.parentNode
                tbody.removeChild(this.parentNode.parentNode)
            }
        }
    </script>
</body>
```

### 三种动态创建元素节点的区别

![image-20230221173407465](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221173407465.png)

## DOM重点核心

### 概述

![](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221173604998.png)

### 创建

![image-20230221173757172](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221173757172.png)

### 增

![image-20230221173931068](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221173931068.png)

### 删

![image-20230221173954298](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221173954298.png)

### 改

![image-20230221174026766](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221174026766.png)

### 查

![image-20230221174055418](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221174055418.png)

### 属性操作

![image-20230221174120373](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221174120373.png)

### 事件操作

![image-20230221174149587](/Users/aqiang/Library/Application Support/typora-user-images/image-20230221174149587.png)

