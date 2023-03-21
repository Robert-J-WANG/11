## 元素偏移量offset系列

### 概述

![image-20230224112941358](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224112941358.png)

### 代码验证

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .father {
            position: relative;
            width: 200px;
            height: 200px;
            background-color: brown;
            margin: 100px;
            border: 2px solid green;
            padding: 20px;
        }
        
        .son {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin: 30px;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <script>
        //1. 获取元素位置offset
        var father = document.querySelector('.father')
        var son = document.querySelector('.son')

        // 获取元素带有定位父元素的偏移量
        console.log(father.offsetLeft); //108 其定位父元素是body
        console.log(father.offsetTop); //100

        // 如果父元素有定位，则已父元素为准
        console.log(son.offsetLeft); //50
        console.log(son.offsetTop); //50

        // // 如果父元素没有定位，则以body为准
        // console.log(son.offsetLeft); //138
        // console.log(son.offsetTop); //100

        // 2. 获取元素大小offset.高度和宽度：border+padding+width(height)
        console.log(father.offsetWidth); //244 
        console.log(father.offsetHeight); //244

        // 3. offsetParent 获取有定位的父元素，如果没有则返回body
        console.log(son.offsetParent); //获取有定位的父元素，如果没有则返回body
        console.log(son.parentNode); // 返回的是最近一级的父节点，不管有没有定位
    </script>
</body>
```

### offset和style的区别

![image-20230224120411035](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224120411035.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1,
        .box2 {
            position: relative;
            width: 200px;
            height: 200px;
            background-color: brown;
            margin: 100px;
            border: 2px solid green;
            padding: 20px;
        }
    </style>
</head>

<body>
    <div class="box1"></div>
    <div class="box2" style="width: 200px;"></div>


    <script>
        //offset与style的区别
        var box1 = document.querySelector('.box1')
        var box2 = document.querySelector('.box2')

        // 1. offset获取任何形式引入的样式表，style只能回去行内样式
        // 2. offset获取的是数字，style获取的是数字加单位
        // 3. offset获取的是padding+border+width，style获取的仅仅是width
        console.log(box1.offsetWidth); //244 
        console.log(box1.style.width); //无法获取，没有行内样式
        console.log(box2.style.width); //200px
        // 4. offset只能读取，style能读取也能赋值
        box1.offsetWidth = 300
        console.log(box1.offsetWidth); //244 无法赋值
        box2.style.width = "300px"
        console.log(box2.style.width); //300px 可以赋值
    </script>
</body>
```

### 案例：获取鼠标在盒子内的坐标

![image-20230224122337570](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224122337570.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: brown;
            margin: 100px;
        }
    </style>
</head>

<body>
    <div class="box"></div>
    <script>
        var box = document.querySelector('.box')
        box.addEventListener('mousemove', function(e) {

            // // 利用鼠标事件对象的属性获得鼠标距离浏览器页面的位置
            // console.log(e.pageX);
            // console.log(e.pageY);
            // // 利用offset的属性获得盒子距离浏览器页面的位置
            // console.log(this.offsetLeft);
            // console.log(this.offsetTop);

            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            this.innerHTML = 'x坐标是' + x + ',y坐标是' + y
        })
    </script>
</body>
```

### 案例：模态框的拖拽

![image-20230224124459898](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224124459898.png)

![image-20230224154053110](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224154053110.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .login-header {
            margin-bottom: 20px;
        }
        
        .login {
            display: none;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 150px;
            background-color: brown;
            text-align: center;
            line-height: 30px;
            padding: 30px;
            z-index: 999;
        }
        
        .close-login {
            position: absolute;
            top: 0;
            right: 0;
        }
          .login-title {
            cursor: move
        }
        
        .login-bg {
            display: none;
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .2);
        }
    </style>
</head>

<body>
    <div class="login-header">
        <a href="javascript:;" id="link">点击弹出登录框</a>
    </div>
    <div class="login">
        <div class="login-title">登录会员
            <span><a href="javascript:;" class="close-login">关闭</a></span>
        </div>
        <div class="login-input-content">
            <div class="login-input">
                <label for="">用户名</label>
                <input type="text" placeholder="请输入用户名">
            </div>
            <div class="login-input">
                <label for="">密码</label>
                <input type="password" placeholder="请输入密码">
            </div>
        </div>
        <div class="login-button">
            <a href="javascript:;">登陆</a>
        </div>
    </div>
    <!-- 遮盖层 -->
    <div class="login-bg"></div>
    <script>
        // 1.获取事件源
        var link = document.querySelector('#link');
        var login = document.querySelector('.login');
        var mask = document.querySelector('.login-bg');
        var closeBtn = document.querySelector('.close-login');

        // 2. 点击登陆链接弹出登录项和遮盖层
        link.addEventListener('click', function() {
            login.style.display = 'block'
            mask.style.display = 'block'
        })

        // 3. 点击关闭链接隐藏登录项和遮盖层
        closeBtn.addEventListener('click', function() {
            login.style.display = 'none'
            mask.style.display = 'none'
        })

        // 4. 设置鼠标拖拽()
        //设置鼠标放在title里才能拖动 
        var title = document.querySelector('.login-title')
        title.addEventListener('mousedown', function(e) {

            //1. 鼠标按下,触发拖拽，并获得鼠标在title盒子里的位置
            var x = e.pageX - login.offsetLeft;
            var y = e.pageY - login.offsetTop;

            //2. 鼠标移动，计算login盒子的动态位置
            document.addEventListener('mousemove', move)

            function move(e) {
                login.style.left = e.pageX - x + 'px';
                login.style.top = e.pageY - y + 'px';
            }

            // 3.鼠标弹起， 解除鼠标移动事件
            document.addEventListener('mouseup', function() {
                document.removeEventListener('mousemove', move)
            })

        })
    </script>
</body>
```

### 案例：放京东放大镜效果

![image-20230224155123350](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224155123350.png)

![image-20230224155809826](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224155809826.png)

![image-20230224161420935](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224161420935.png)

![image-20230224161611558](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224161611558.png)



## 元素可视区client系列

### 概述

![image-20230224162256895](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224162256895.png)

![image-20230224162332414](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224162332414.png)

### 立即执行函数

![image-20230224165355775](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224165355775.png)

```html
<body>
    <script>
        // 1. 立即执行函数，不需要调用就能执行的函数
        // 一般函数
        function fn() {
            console.log(1);
        }
        fn(); //调用才能执行
        // 立即执行函数不需要调用

        // 2. 书写语法  (function() {})() 或者(function() {}())
        (function() {
            console.log(2);

        })(); //不需要调用

        //3. 也可以传递参数
        (function(a, b) {
            console.log(a + b);

        })(1, 2); //后面的小括号可以看做是调用函数

        //4. 立即执行函数最大的作用是，创建了一个独立的作用域，里面的所有变量都是局部变量，没有命名冲突的问题
        
    </script>
</body>
```

![image-20230224170030892](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224170030892.png)



## 元素滚动scroll系列

### 概述

![image-20230224170524131](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224170524131.png)

![image-20230224170613099](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224170613099.png)

### scroll滚动事件

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 200px;
            border: 5px solid red;
            margin: 100px auto;
            overflow: auto;
        }
    </style>
</head>

<body>
    <div>我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是
    </div>
    <script>
        // scroll属性
        var div = document.querySelector('div')
        console.log(div.scrollHeight); //357 纯实际内容，不加边框
        console.log(div.clientHeight); //200 超出盒子的不会获得
        // scroll方法
        div.addEventListener('scroll', function() {
            console.log(div.scrollTop);

        })
    </script>
</body>
```

### 案例：仿淘宝固定右侧侧边栏

![image-20230224172354586](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224172354586.png)

![image-20230225102011672](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225102011672.png)

![image-20230225103020762](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225103020762.png)

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
        
        .w {
            width: 1000px;
            margin: 0 auto;
        }
        
        body {
            position: relative;
        }
        
        .slider-bar {
            position: absolute;
            top: 300px;
            right: 0px;
            width: 80px;
            height: 200px;
            background-color: pink;
        }
        
        .header {
            height: 170px;
            background-color: #b03434;
        }
        
        .banner {
            height: 300px;
            background-color: #4db034;
        }
        
        .main {
            height: 1000px;
            background-color: #3432d6;
        }
        
        span {
            position: absolute;
            bottom: 0;
            display: none;
        }
    </style>
</head>

<body>
    <div class="slider-bar">
        <span class="goBack"> 返回顶部</span>
    </div>
    <div class="header w">头部区域</div>
    <div class="banner w">banner区域</div>
    <div class="main w">主体区域</div>
    <script>
        //1. 获取元素
        var sliderbar = document.querySelector('.slider-bar');
        var banner = document.querySelector('.banner');
        var main = document.querySelector('.main');
        var goBack = document.querySelector('.goBack');

        // 获取banner头部的大小 offsetTop
        var bannerTop = banner.offsetTop;
        // console.log(bannerTop); //300

        // 获取slider-bar的头部大小sliderbar.offsetTop
        console.log(sliderbar.offsetTop); //200
        // 设置 滚动后 slider-bar固定的位置
        var sliderbarTop = sliderbar.offsetTop - bannerTop;

        //2. 添加事件，页面滚动scroll
        document.addEventListener('scroll', function() {
            // console.log(11);
            // window.pageYOffset 页面被卷去的头部
            // console.log(window.pageYOffset);
            //3.当页面被卷去的头部大于等于了banner的头部大小，此时，侧边栏就改为固定定位，其他为绝对定位
            if (window.pageYOffset >= bannerTop) {
                sliderbar.style.position = 'fixed';
                // 设置 滚动后 slider-bar固定的位置
                sliderbar.style.top = sliderbarTop + 'px'
            } else {
                sliderbar.style.position = 'absolute';
                // 恢复slider-bar绝对定位的位置
                sliderbar.style.top = '300px';
            }
            //4. 当页面被卷去的头部大于等于了mian的头部大小，此时，显示goback内容
            if (window.pageYOffset >= main.offsetTop) {
                goBack.style.display = 'block';
            } else {
                goBack.style.display = 'none';
            }
        })
    </script>
</body>
```

### 被卷去头部window.pageYoffset兼容性

![image-20230225112900337](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225112900337.png)

## 三大系列总结

![image-20230225113338697](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225113338697.png)

![image-20230225113506150](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225113506150.png)

## 鼠标经过事件

### Mouseover事件

![image-20230225113936658](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225113936658.png)

### Mouseenter事件

![image-20230225114927627](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225114927627.png)

### 代码验证

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
            background-color: aqua;
            margin: 100px auto;
        }
        
        .son {
            width: 100px;
            height: 100px;
            background-color: brown;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <script>
        // // mouseover事件：鼠标经过自身父盒子，会触发，再次经过里面的子盒子，又会触发
        // var father = document.querySelector('.father');
        // father.addEventListener('mouseover', function() {
        //     console.log(11);
        // })

        // mouseenter事件：鼠标经过自身父盒子，才会触发，而经过里面的子盒子，不会触发
        var father = document.querySelector('.father');
        father.addEventListener('mouseenter', function() {
            console.log(11);
        })
    </script>
</body>
```

## 动画函数封装

### 动画实现原理

![image-20230225115402577](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225115402577.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            position: relative;
            top: 0;
            width: 200px;
            height: 200px;
            background-color: pink;
            border-radius: 50%;
        }
    </style>
</head>

<body>
    <div></div>
    <script>
        //动画原理：
        //1. 获取盒子当前位置 element.offsetLeft;
        //2. 改变盒子的位置 element.style.left + 1;
        //3. 定时器重复，setInterval(funtion(){},1000)
        //4. 设置清除定时器的条件
        var div = document.querySelector('div');
        var timer = setInterval(function() {
            if (div.offsetLeft >= 400) {
                // 停止动画，本质是清除定时器
                clearInterval(timer)
            }
            div.style.left = div.offsetLeft + 10 + 'px';
            div.style.top = div.offsetTop + 1 + 'px';

        }, 50)
    </script>
</body>
```

### 简单动画函数封装

![image-20230225121421468](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225121421468.png)

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            top: 0;
            width: 200px;
            height: 200px;
            background-color: pink;
            border-radius: 50%;
        }
        
        span {
            position: absolute;
            top: 50px;
            display: block;
            width: 100px;
            height: 100px;
            background-color: blue;
            border-radius: 50%;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>

<body>
    <div></div>
    <span>夏雨荷</span>
    <script>
        //动画函数封装
        //1.函数封装一个动画函数,传递2个参数，目标对象和动画结束的参数
        function animate(obj, target) {
            var timer = setInterval(function() {
                if (obj.offsetLeft >= target) {
                    // 停止动画，本质是清除定时器
                    clearInterval(timer)
                }
                obj.style.left = obj.offsetLeft + 5 + 'px';
            }, 30)
        }
        // 2.获取元素对象
        var div = document.querySelector('div');
        var span = document.querySelector('span');
        // 3.调用动画函数
        animate(div, 400);
        animate(span, 800);
    </script>
</body>
```

### 函数性能优化：给不同元素记录不同的定时器

![image-20230225123409591](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225123409591.png)

```html
<body>
    <div></div>
    <span>夏雨荷</span>
    <button>点击一下</button>
    <script>
        //动画函数封装
        //1.函数封装一个动画函数,传递2个参数，目标对象和动画结束的参数
        // 优化：
        // (1)，不同元素调用函数时，都会定义一个变量timer来存储定时器，每次都会在内存中开辟空间
        // (2)，利用对象，可以设置变量为对象的一个属性名（obj.timer)，这样不同元素调用函数时，只是给这个属性重新赋值而已，不会在内存中开辟空间

        // function animate(obj, target) {
        //     var timer = setInterval(function() {
        //         if (obj.offsetLeft >= target) {
        //             // 停止动画，本质是清除定时器
        //             clearInterval(timer)
        //         }
        //         obj.style.left = obj.offsetLeft + 5 + 'px';
        //     }, 30)
        // }
        function animate(obj, target) {
            // (3), 如果给元素添加点击事件，点击一下才执行动画的话，会有bug:每点一次，就会执行一次定时器，连续点击的话，会叠加多个定时器，从而会加快动画的速度
            //（4），解决方案：点击事件执行是，先清除定时器，在执行定时器
            clearInterval(obj.timer);

            obj.timer = setInterval(function() {
                if (obj.offsetLeft >= target) {
                    // 停止动画，本质是清除定时器
                    clearInterval(obj.timer);
                } else {
                    obj.style.left = obj.offsetLeft + 5 + 'px';
                }

            }, 30)
        }

        // 2.获取元素对象
        var div = document.querySelector('div');
        var span = document.querySelector('span');
        var btn = document.querySelector('button');

        // 3.调用动画函数
        animate(div, 400);
        btn.addEventListener('click', function() {
            animate(span, 800);
        })
    </script>
</body>
```

### 缓动动画

#### 原理

![image-20230225130433875](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225130433875.png)

#### 代码实现

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        span {
            position: absolute;
            top: 50px;
            display: block;
            width: 100px;
            height: 100px;
            background-color: blue;
            border-radius: 50%;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>

<body>
    <span>夏雨荷</span>
    <button>点击一下</button>
    <script>
        function animate(obj, target) {

            clearInterval(obj.timer);

            obj.timer = setInterval(function() {
                // 设置渐变的步长值
                // 每执行一次计时器，都要获得一下目标对象当前的位置，所以放在计时器内部
                var step = (target - obj.offsetLeft) / 20;

                if (obj.offsetLeft == target) {
                    // 停止动画，本质是清除定时器
                    clearInterval(obj.timer);
                } else {
                    //缓动动画原理：把每次加5的这个步长step设置为一个逐渐变小的值
                    // step= （目标位置-当前位置）/20； // 20 的值可以自行设置
                    obj.style.left = obj.offsetLeft + step + 'px';
                }

            }, 30)
        }
        // 2.获取元素对象
        var span = document.querySelector('span');
        var btn = document.querySelector('button');

        // 3.调用动画函数
        btn.addEventListener('click', function() {
                animate(span, 800);
            })
            // 总结：
            // 普通动画（匀速动画）：当前的位置+固定的值
            // 缓动动画（减速动画）：当前的位置+变化的值（（目标位置-当前位置）/20 ）
    </script>
</body>
```

### 动画函数多个目标之间的移动

![image-20230225140306746](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225140306746.png)

```html
<body>
    <span>夏雨荷</span>
    <button class="btn500">点击一下到500</button>
    <button class="btn800">点击一下到800</button>

    <script>
        // 对于多目标的移动（盒子的前进，盒子的后退）
        function animate(obj, target) {

            clearInterval(obj.timer);

            obj.timer = setInterval(function() {
                // 设置渐变的步长值

                var step = (target - obj.offsetLeft) / 20;
                // 但是，这样计算的step会出现小数的情况，会是目标的位置不准确，所以需要取整
                // 对于多目标的移动（盒子的前进，盒子的后退），取整的方式也不同：前进时向上取整，后退时向下取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (obj.offsetLeft == target) {
                    // 停止动画，本质是清除定时器
                    clearInterval(obj.timer);
                } else {
                    //缓动动画原理：把每次加5的这个步长step设置为一个逐渐变小的值
                    // step= （目标位置-当前位置）/20； // 20 的值可以自行设置
                    obj.style.left = obj.offsetLeft + step + 'px';
                }

            }, 30)
        }
        // 2.获取元素对象
        var span = document.querySelector('span');
        var btn500 = document.querySelector('.btn500');
        var btn800 = document.querySelector('.btn800');


        // 3.调用动画函数
        btn500.addEventListener('click', function() {
            console.log(500);
            animate(span, 500);
        });
        btn800.addEventListener('click', function() {
            console.log(800);
            animate(span, 800);
        })
    </script>
</body>
```

### 动画函数添加回调函数

#### 原理

![image-20230225144442881](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225144442881.png)

#### 执行方法

```html
<body>
    <span>夏雨荷</span>
    <button class="btn500">点击一下到500</button>
    <button class="btn800">点击一下到800</button>

    <script>
        // 添加回调函数（点击按钮，完成动画后，再改变盒子的背景颜色）
        // 给动画函数添加一个形参 callback，用于传递值（这个值是一个函数，称为回调函数）
        function animate(obj, target, callback) {

            clearInterval(obj.timer);

            obj.timer = setInterval(function() {

                var step = (target - obj.offsetLeft) / 20;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (obj.offsetLeft == target) {

                    clearInterval(obj.timer);
                    // 这个函数放在计时器的最后，等计时器结束，才调用这个函数
                    if (callback) { //判断是否有回调函数
                        // 调用函数
                        callback();
                    }

                } else {

                    obj.style.left = obj.offsetLeft + step + 'px';
                };

            }, 30);

        }
        // 2.获取元素对象
        var span = document.querySelector('span');
        var btn500 = document.querySelector('.btn500');
        var btn800 = document.querySelector('.btn800');


        // 3.调用动画函数
        btn500.addEventListener('click', function() {
            console.log(500);
            animate(span, 500, function() {
                span.style.backgroundColor = 'blue';
            });
        });
        btn800.addEventListener('click', function() {
            console.log(800);
            animate(span, 800, function() { // 把这个函数当做一个实参传递给动画函数
                span.style.backgroundColor = "green";
            });
        })
    </script>
</body>
```

### 动画函数的使用：将动画函数封装到j s文件中

#### 原理

![image-20230225151329192](/Users/aqiang/Library/Application Support/typora-user-images/image-20230225151329192.png)

#### 程序验证：仿京东侧边栏滑动

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .sliderbar {
            position: fixed;
            top: 300px;
            right: 0px;
            height: 40px;
            line-height: 40px;
        }
        
        span {
            display: inline-block;
            width: 40px;
            text-align: center;
            background-color: blue;
        }
        
        .con {
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
            width: 200px;
            text-align: center;
            background-color: blueviolet;
            z-index: -1;
        }
    </style>

    <!-- 引入动画函数 -->
    <script src="animate.js"></script>

</head>

<body>
    <div class="sliderbar">
        <span> << </span>
        <div class="con">问题反馈</div>
    </div>

    <script>
        var sliderbar = document.querySelector('.sliderbar')
        var con = document.querySelector('.con')

        sliderbar.addEventListener('mouseenter', function() {
            animate(con, -160);
            sliderbar.children[0].innerHTML = '>>'
        })
        sliderbar.addEventListener('mouseleave', function() {
            animate(con, 40);
            sliderbar.children[0].innerHTML = '<<'
        })
    </script>
</body>
```

## 常见网页特效案例

