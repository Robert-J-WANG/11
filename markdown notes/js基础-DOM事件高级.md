## 注册事件（绑定事件）

### 概述

![image-20230222095737088](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222095737088.png)

### 事件监听方式addEventListener( )

![image-20230222100216214](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222100216214.png)

### 了解：注册事件兼容性解决方案

![image-20230222120505555](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222120505555.png)

```html
<body>
    <button class="btn1">传统注册事件</button>
    <button class="btn2">方法监听注册事件</button>
</body>

<script>
    // 1. 传统注册事件方式
    var btn1 = document.querySelector('.btn1');
    btn1.onclick = function() {
        alert('11')
    }
    btn1.onclick = function() {
            alert('22')
        } // 同一元素，同一注册事件只能设置一个执行函数，多个时，后面的会覆盖掉前面的

    // 2. 添加监听注册事件addEventListener('type', function(){}, )
    var btn2 = document.querySelector('.btn2');
    btn2.addEventListener('click', function() {
        alert('333')
    })
    btn2.addEventListener('click', function() {
            alert('444')
        })
        // addEventListener()中type是字符串，必须加引号，而且不带on(比如是click，而不是onclick)
        // 同一元素，同一注册事件能添加多个执行函数（监听器），按顺序依次执行
</script>
```

## 删除事件（解绑事件）

### 删除事件的方式

![image-20230222121139731](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222121139731.png)

### 了解：兼容性解决方案

![image-20230222121244179](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222121244179.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: blueviolet;
        }
    </style>
</head>

<body>
    <div>1</div>
    <div>2</div>
</body>

<script>
    var divs = document.querySelectorAll('div')

    // 1. 传统注册事件方式,删除事件
    //添加事件
    divs[0].onclick = function() {
        alert('11');

        //删除事件  
        this.onclick = null;
    };

    // 2. 添加监听注册事件
    //删除函数是，要指定删除的是哪个函数，所以绑定的函数不能用匿名函数的方式（function)，可以创建一个自定义函数(比如fn)
    // divs.[1].addEventListener('click',function(){}) //// 绑定的是匿名函数
    divs[1].addEventListener('click', fn); // 绑定的自定义函数，方便删除。不加小括号

    // 自定义一个函数fn
    function fn() {
        alert('33');
        this.removeEventListener('click', fn); // 删除函数fn
    }
</script>
```



## DOM事件流

### 概述

![image-20230222124315674](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222124315674.png)

### 解释

![image-20230222124402016](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222124402016.png)

### 代码验证

![image-20230222125031156](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222125031156.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .father {
            width: 200px;
            height: 200px;
            background-color: blueviolet;
        }
        
        .son {
            width: 100px;
            height: 100px;
            background-color: lawngreen;
            margin: 25px auto;
        }
    </style>
</head>

<body>
    <div class="father">father
        <div class="son">son</div>
    </div>

</body>

<script>
    // dom 事件流三个阶段
    // 1. js 代码中只能执行捕获或者冒泡其中的一个阶段
    // 2. onclick 传统注册事件方式只能得到冒泡阶段
    // 3. addEventListener 能得到2个阶段，第三个参数为true时，则处于捕获阶段，flase或不写是，处于冒泡阶段
    // (1). 捕获阶段
    // 给son盒子添加事件
    var son = document.querySelector('.son');
    son.addEventListener('click', function() {
        alert('son');
    }, true);
    // 此时，给father盒子也添加事件，
    var father = document.querySelector('.father');
    father.addEventListener('click', function() {
        alert('father');
    }, true);
    // 捕获阶段执行：点击是，会先弹出father盒子的事件，再弹出son盒子的事件 document>html>body>father>son

    // (2). 冒泡阶段
    // 给son盒子添加事件
    var son = document.querySelector('.son');
    son.addEventListener('click', function() {
        alert('son');
    }, );
    // 此时，给father盒子也添加事件，
    var father = document.querySelector('.father');
    father.addEventListener('click', function() {
        alert('father');
    }, );
    // 捕获阶段执行：点击时，会先弹出son盒子的事件，再弹出father盒子的事件 son>father>body>html>document
</script>
```

## 事件对象

### 定义

![image-20230222131725843](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222131725843.png)

### 使用语法

![image-20230222131926890](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222131926890.png)

### 事件对象常见的属性和方法

![image-20230222134222052](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222134222052.png)

#### 返回事件目标 e.target属性

```html
<body>
    <div>123</div>
    <ul>
        <li>11</li>
        <li>22</li>
        <li>33</li>
    </ul>
</body>

<script>
    // 事件对象属性e.target与this的区别:
    // e.target,点击谁，就返回谁。this，绑定事件给谁，就返回谁

    // 给div盒子添加事件,并点击div盒子
    var div = document.querySelector('div');
    div.addEventListener('click', function(e) {
        console.log(e.target); // 点击谁，就打印出谁 <div>123</div>
        console.log(this); // 绑定事件给谁，就打印出谁 <div>123</div>
    });

    // 给ul盒子添加事件,但是点击li
    var ul = document.querySelector('ul');
    ul.addEventListener('click', function(e) {
        console.log(e.target); // 点击谁，就打印出谁<li>11</li>
        console.log(this); // 绑定事件给谁，就打印出谁 <ul>...</ul>
    });
</script>
```

#### 返回事件类型 e.type属性

```html
<body>
    <div>123</div>
</body>

<script>
    // e.type,返回事件类型
    var div = document.querySelector('div');
    div.addEventListener('click', fun);
    div.addEventListener('mouseover', fun);
    div.addEventListener('mouseleave', fun);

    function fun(e) {
        console.log(e.type); //返回事件类型 click，mouseover，mouseleave
    }
</script>
```

#### 阻止默认行为 e.preventDefault()，比如不让链接跳转

```html

<body>
    <a href="#">baidu</a>
    <form action="#">
        <button>提交</button>
    </form>

    <script>
        // e.preventDefault(),阻止默认行为，比如链接的跳转，按钮的提交

        var a = document.querySelector('a');
        var btn = document.querySelector('button');

        a.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止链接的跳转
        });
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止按钮的提交
        });
    </script>
</body>

```

#### 阻止事件冒泡e.stopPropagation()

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="father">father
        <div class="son">son</div>
    </div>

    <script>
        // 阻止冒泡，使用son盒子添加e.stopPropagation()属性，阻止点击son时继续冒泡
        var son = document.querySelector('.son');
        son.addEventListener('click', function(e) {
            alert('son');
            e.stopPropagation();
        }, );
        // 此时，给father盒子也添加添加e.stopPropagation()属性，阻止点击father时继续冒泡
        var father = document.querySelector('.father');
        father.addEventListener('click', function(e) {
            alert('father');
            e.stopPropagation();
        }, );
        // 此时，给document也添加事件，
        document.addEventListener('click', function() {
            alert('document');
        }, );
    </script>
</body>
```

## 事件委托（代理，委派）

### 概述

![image-20230222142529121](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222142529121.png)

![image-20230222142707171](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222142707171.png)

### 原理和作用

![image-20230222142854777](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222142854777.png)

### 代码验证

```html
<body>
    <ul>
        <li>点击我</li>
        <li>点击我</li>
        <li>点击我</li>
        <li>点击我</li>
        <li>点击我</li>
    </ul>

    <script>
        // 事件委托，利用事件冒泡原理，给父元素注册事件，点击某个子元素，触发事件。从而不用给每个子元素注册事件。
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
            alert('hello'); // 点击任何一个li，都会弹出对话框

            // 利用e.target属性能获得当前被点击的元素，从而给此元素设置属性
            // 排他思想
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].style.backgroundColor = '';
            }
            e.target.style.backgroundColor = 'pink'
        }, );
    </script>
</body>
```

## 常用的鼠标事件

### 基本事件

![image-20230222144634132](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222144634132.png)

### 有用事件

#### 禁止鼠标右键菜单（比如复制，下载）

![image-20230222144853698](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222144853698.png)

#### 禁止鼠标选中（无法使用control c, control v)

![image-20230222145055657](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222145055657.png)

#### 代码验证

```html
<body>
    <p>无法复制我了</p>

    <script>
        //1. 能选中目标，点击右键，无法弹出菜单栏，但还是可以使用control c, control v复制
        document.addEventListener('contextmenu', function(e) {
                e.preventDefault()
            })
            //2. 禁止鼠标选中,根本无法选中目标
        document.addEventListener('selectstart', function(e) {
            e.preventDefault()
        })
    </script>
</body>
```

### 鼠标事件对象 MouseEvent

#### 概述

![image-20230222150618807](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222150618807.png)

#### 代码

```html
<body style="height: 3000px;">
    <script>
        //  鼠标事件对象 MouseEvent
        document.addEventListener('click', function(e) {
            //1.client 浏览器可视区的坐标
            alert(e.clientX);
            alert(e.clientY);
            //2. page 相对于页面文档的坐标
            alert(e.pageX);
            alert(e.pageY);
            //3. screen 相对于设备屏幕的坐标
            alert(e.screenX);
            alert(e.screenY);
        })
    </script>
</body>
```

#### 案例：跟随鼠标的天使

![image-20230222152032354](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222152032354.png)

![image-20230222152142069](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222152142069.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            position: absolute;
            width: 100px;
            height: 100px;
        }
    </style>
</head>

<body>
    <img src="images/angle.png" alt="">
    <script>
        var img = document.querySelector('img')
        document.addEventListener('mousemove', function(e) {
            //1.client 浏览器可视区的坐标
            var x = e.clientX;
            var y = e.clientY;
            img.style.left = x - 50 + 'px'
            img.style.top = y - 50 + 'px'
        })
    </script>
</body>
```

## 常用的键盘事件

### 概述

![image-20230222154542460](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222154542460.png)

### 事件

```html
 <script>
        //1. keyup 按键弹起的时候触发
        document.addEventListener('keyup', function(e) {
            console.log('我弹起了')
        })

        //2. keydown 按键按下的时候触发
        document.addEventListener('keydown', function(e) {
            console.log('我按下了')
        })

        //3. keypress 按键按下的时候触发, 无法识别功能键
        document.addEventListener('keypress', function(e) {
                console.log('我按下了press')
            })
            //4. 执行顺序：down > press > up
    </script>
```

### 键盘事件对象

![image-20230222160320322](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222160320322.png)

```html
 <script>
        //  键盘事件对象 KeyboardEvent中keyCode 属性得到ASCII码值
        //1. keyup keydown事件不能区分字母大小写， 按 a 和 A 得到的都是65
        document.addEventListener('keyup', function(e) {
            console.log('up:' + e.keyCode);
            // 我们可以用keyCode返回的ASCII码值来判断用户按下了那个键
            if (e.keyCode === 65) {
                alert('你按下了a键')
            } else {
                alert('你按下的不是a键')
            }
        })

        // //2. keypress事件能区分字母大小写， 按 a 和 A 得到的都是65和81
        // document.addEventListener('keypress', function(e) {
        //     alert(e.keyCode);
        // })
        
    </script>
```

### 案例：模拟京东按键输入内容

![image-20230222160604441](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222160604441.png)

![image-20230222160658929](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222160658929.png)

```html
<body>
    <input type="text" name="" id="">
    <script>
        var search = document.querySelector('input');

        document.addEventListener('keyup', function(e) {
            if (e.keyCode === 83) {
                search.focus(); // 获得焦点
            }
        })
    </script>
</body>
```

### 案例：京东快递单号查询

![image-20230222161527316](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222161527316.png)

![image-20230222164237283](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222164237283.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .con {
            display: none;
            width: 150px;
            height: 30px;
            border: 1px solid red;
            font-size: 24px;
            line-height: 30px;
        }
    </style>
</head>

<body>
    <div class="search">
        <div class="con"></div>
        <input type="text" name="" id="" placeholder="请输入快递单号码" class="jd">
    </div>
    <script>
        var con = document.querySelector('.con');
        var jd = document.querySelector('.jd');
        jd.addEventListener('keyup', function() {
                // console.log("ddd");
                if (this.value == '') {
                    con.style.display = 'none'
                } else {
                    con.style.display = 'block';
                    con.innerHTML = this.value;
                }
            })
            // 2. 当失去焦点时，隐藏con盒子
        jd.addEventListener('blur', function() {
                con.style.display = 'none';
            })
            // 2. 当获得焦点时，且内容不为空时，显示con盒子
        jd.addEventListener('focus', function() {
            if (this.value !== '') {
                con.style.display = 'block';
            }
        })
    </script>
</body>
```



