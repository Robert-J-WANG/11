## BOM概述

### 定义

![image-20230222173842554](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222173842554.png)

### 构成

![image-20230222173945150](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222173945150.png)

![image-20230222174230086](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222174230086.png)

## window对象的常见事件

### 窗口加载事件

![image-20230222221717585](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222221717585.png)

![image-20230222222109918](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222222109918.png)

```html
<body>
    <script>
        // 窗口加载事件。可以将js文件放在任意位置
        // 1. 传统加载事件，一次只加载一个函数
        window.onload = function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click', function() {
                alert('onload点击了')
            })
        }
        window.onload = function() {
                var btn = document.querySelector('button');
                btn.addEventListener('click', function() {
                    alert('onload又点击了')
                })
            }
            //2.常用的监听加载事件，加载多个函数，依次执行
        window.addEventListener('load', function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click', function() {
                alert('load点击了')
            })
        })
        window.addEventListener('load', function() {
                var btn = document.querySelector('button');
                btn.addEventListener('click', function() {
                    alert('load又点击了')
                })
            })
            //3,快捷加载事件 DOMContentLoaded，仅当dom元素加载完成就执行，不需要等待其他元素的加载，比如样式表，图片，flash等
        window.addEventListener('DOMContentLoaded', function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click', function() {
                alert('DOM点击了')
            })
        })
        window.addEventListener('DOMContentLoaded', function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click', function() {
                alert('DOM又点击了')
            })
        })
    </script>
    <button>点击一下</button>
</body>
```

### 调整窗口大小事件

![image-20230222232411324](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222232411324.png)

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
    </style>
    <script>
        // 调整窗口大小事件 resize。
        window.addEventListener('load', function() {
            var div = document.querySelector('div');
            window.addEventListener('resize', function() {
                var x = window.innerWidth; // 获取浏览器窗口的宽度,在事件resize里
                if (x <= 800) {
                    div.style.display = 'none';
                } else {
                    div.style.display = 'block';
                }
            })
        })
    </script>
</head>

<body>
    <div></div>
</body>
```

## 定时器

### 概述

![image-20230222233755540](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222233755540.png)

### setTimeout()

#### 语法

![image-20230222234215016](/Users/aqiang/Library/Application Support/typora-user-images/image-20230222234215016.png)

```html
<script>
        // 定时器setTimeout
        // 语法规范： window.setTimeout(调用函数, 延迟时间)
        // 1.window可省略
        // 2. 延迟时间单位时毫秒，可以省略，省略的表示0，不延迟
        //3. 调用函数，可以直接写函数
        setTimeout(function() {
            alert('时间到了')
        }, 2000); //延迟2秒
        // 也可以写函数名,
        setTimeout(callback, 3000); //延迟3秒
        function callback() {
            alert('爆炸了')
        }
        // 4. 页面中有多个定时器，通常给定时器加不同的标识符（名字）
        var timer1 = setTimeout(callback, 5000); //延迟5秒
        var timer2 = setTimeout(callback, 7000); //延迟7秒
    </script>
```

#### 回调函数 callback

![image-20230223000023011](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223000023011.png)

#### 案例：5秒后自动关闭广告

![image-20230223000409079](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223000409079.png)

![image-20230223000451849](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223000451849.png)

```html
<body>
    <img src="images/ad.jpg" alt="">
    <script>
        var ad = document.querySelector('img')
        setTimeout(function() {
            ad.style.display = 'none'
        }, 5000); //延迟5秒
    </script>
</body>
```

#### 停止（清除）定时器

![image-20230223001601014](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223001601014.png)

```html
<body>
    <button>点击清除定时器clearTimeout</button>
    <script>
        var btn = document.querySelector('button');

        // 设置定时器
        var timer = setTimeout(function() {
            alert('爆炸了')
        }, 3000); //延迟3秒
        // 清除定时器
        btn.addEventListener('click', function() {
            clearTimeout(timer); // 点击按钮，清除定时器，timer为定时器名称
        })
    </script>
</body>
```

### setInterval()

#### 语法

![image-20230223122537407](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223122537407.png)

```html
  <script>
        // 定时器setInterval
        // 语法规范： window.setsetInterval(调用函数, 延迟时间)
        // 1.window可省略
        // 2. 延迟时间单位时毫秒，可以省略，省略的表示0，不延迟
        //3. 调用函数，可以直接写函数
        setInterval(function() {
            console.log('重复调用')
        }, 2000); //延迟2秒
        // 也可以写函数名,
        setInterval(callback, 2000); //延迟3秒
        function callback() {
            console.log('重复调用')
        }
        // 4. 页面中有多个定时器，通常给定时器加不同的标识符（名字）
        var timer1 = setInterval(callback, 5000); //延迟5秒
        var timer2 = setInterval(callback, 7000); //延迟7秒
        // 5. setTimeout 只调用一次，setInterval会一直重复调用
    </script>
```

#### 案例：京东秒杀倒计时

![image-20230223123628264](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223123628264.png)

![image-20230223175156645](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223175156645.png)

```html
<body>
    <div>
        <span class="hour">1</span>
        <span class="minute">2</span>
        <span class="second">3</span>
    </div>
    <script>
        // 1. 获取元素
        var hour = document.querySelector('.hour')
        var minute = document.querySelector('.minute')
        var second = document.querySelector('.second')

        // 2.设置截止时间
        var timeInput = +new Date('2023-2-25 18:00:00'); //输入时间的时间戳

        // 3. 先执行一次倒计时函数，防止定时器第一次调用时有空白
        countDown();

        //4. 设置定时器
        setInterval(countDown, 1000)

        //  5. 使用倒计时案例的函数
        function countDown() {
            var timeNow = +new Date(); //当前时间戳
            var times = (timeInput - timeNow) / 1000; // 剩余时间转化成总的秒数
            // 把输入时间的时间戳放在函数外面，提供用户设置截至日期的API接口
            // var timeInput = +new Date(time); //输入时间的时间戳 

            var h = parseInt(times / 60 / 60); //时
            h = h < 10 ? '0' + h : h;
            var m = parseInt(times / 60 % 60); //分
            m = m < 10 ? '0' + m : m;
            var s = parseInt(times % 60); //秒
            s = s < 10 ? '0' + s : s;

            // 将剩余的时间分别显示于span盒子元素中
            hour.innerHTML = h;
            minute.innerHTML = m;
            second.innerHTML = s;
        }
    </script>
</body>
```

#### 清除定时器

![image-20230223175543719](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223175543719.png)

```html
<body>
    <button class="start">开始定时</button>
    <button class="stop">停止定时</button>
    <script>
        var start = document.querySelector('.start');
        var stop = document.querySelector('.stop');
        var timer = null; // timer 放在函数外面，为全局标量，所有函数都能访问，并初始设为一个空对象，防止报错（undefined)
        start.addEventListener('click', function() {
            timer = setInterval(function() {
                console.log('开始了');
            }, 1000);
        })
        stop.addEventListener('click', function() {
            clearInterval(timer)
        })
    </script>
</body>
```

#### 案例：发送短信

![image-20230223181637332](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223181637332.png)

```html
<body>
    <input type="text" name="" id="">
    <button>发送</button>
    <script>
        // 1. 获取元素
        var input = document.querySelector('input')
        var button = document.querySelector('button')
        var time = 3; //定义剩余的秒数

        button.addEventListener('click', function() {
            this.disabled = true;
            // 设置定时器
            var timer = setInterval(function() {
                if (time == 0) {
                    // 清除定时器，并恢复按钮设置
                    clearInterval(timer);
                    button.disabled = false; //恢复按钮的点击
                    button.innerHTML = '发送'; //恢复按钮内容
                    time = 3; // 倒计时从新开始
                } else {
                    button.innerHTML = '还剩' + time + '秒才能发送'
                    time--;
                }
            }, 1000)
        })
    </script>
</body>
```



## this的指向问题

![image-20230223184308469](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223184308469.png)

```html
<body>
    <button>点击</button>
    <script>
        // this指向问题：一般情况下，this指向的最终是那个调用它的对象
        // 1. 全局作用域或者普通函数中this指向的是全局对象window（定时器里this也指向window）
        //  全局作用域 
        console.log(this); // window
        //  普通函数 
        function fn() {
            console.log(this); //  window
        }
        fn(); //函数需要调用一下才会执行，是window.fn()的缩写（全局作用域下，函数是window对象的方法）
        // 定时器
        setTimeout(function() {
            console.log(this); // window 定时器实际是window.setTimeout的缩写

        }, 1000)

        // 2. 方法调用中谁调用this指向谁
        var o = {
            sayHi: function() {
                console.log(this); //{sayHi: ƒ} 指向这个对象o
            }
        }
        o.sayHi();

        var btn = document.querySelector('button')
        btn.addEventListener('this', function() {
            console.log(this); //<button>点击</button> 指向这个btn按钮对象
        })

        // 3. 构造函数中this指向的是构造函数的实例
        function fn() {
            console.log(this); //fn {} 指向的是fn()函数实例化的对象
        }
        var f = new fn();
    </script>
</body>
```

## js执行机制

### 概述

![image-20230223230443752](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223230443752.png)

![image-20230223230724512](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223230724512.png)

![image-20230223231006413](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223231006413.png)

![image-20230223231325622](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223231325622.png)

![image-20230223231402814](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223231402814.png)

![image-20230223231513283](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223231513283.png)

![image-20230223232137260](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223232137260.png)

![image-20230223232214146](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223232214146.png)

## location对象

### location对象定义

![image-20230223232457098](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223232457098.png)

### URL 定义

![image-20230223232708597](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223232708597.png)

### location对象的属性

![image-20230223233143229](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223233143229.png)

### 案例：点击按钮，获得当前页面的URL，或者跳转到新的页面

```html
<body>
    <button>点击</button>
    <button>跳转</button>
    <script>
        var btn = document.querySelectorAll('button');

        // location.href 当前页面的URL
        btn[0].addEventListener('click', function() {
            console.log(location.href); // 获得当前页面的URL
        })

        // location.href 赋值，跳转到新的页面
        btn[1].addEventListener('click', function() {
            location.href = 'https://www.metservice.com/towns-cities/locations/auckland'
        })
    </script>
</body>
```



### 案例：5秒之后自动跳转页面

![image-20230223235237967](/Users/aqiang/Library/Application Support/typora-user-images/image-20230223235237967.png)

```html
<body>
    <button>点击</button>
    <div></div>
    <script>
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        var time = 5;

        btn.addEventListener('click', function() {
            jump(); // 先调用一次，防止页面刷新是的空白
            setInterval(jump, 1000)

        })

        function jump() {
            if (time == 0) {
                location.href = 'https://www.metservice.com/towns-cities/locations/auckland'
            } else {
                div.innerHTML = '你将在' + time + '秒之后返回主页';
                time--;
            }
        }
    </script>
</body>
```

### 案例：获取url参数数据

![image-20230224001412780](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224001412780.png)

![image-20230224001631672](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224001631672.png)

```html
<body>
    <!-- login -->
    <form action="index.html">
        <h3>用户名</h3>
        <input type="text" name="uname" id="">
        <input type="submit" value="登陆">
    </form>

</body>

<body>
    <!-- index -->
    <div></div>
    <script>
        // 处理数据
        console.log(location.search); // ?uname=andy
        // 1.去掉问号

        var params = location.search.substr(1);
        console.log(params); //uname=andy
        //2, 去掉等于号
        var arr = params.split('=')
        console.log(arr); //['uname', 'andy']

        //显示数据到div中
        var div = document.querySelector('div')
        div.innerHTML = arr[1] + '欢迎你'
    </script>
</body>
```

### location对象的方法

![image-20230224005635853](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224005635853.png)

## navigator对象

### 概述

![image-20230224005807089](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224005807089.png)



## history对象

### 概述

![image-20230224010018664](/Users/aqiang/Library/Application Support/typora-user-images/image-20230224010018664.png)

