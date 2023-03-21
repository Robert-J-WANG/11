# javasctrip概念

## 历史

![image-20230129141651792](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129141651792.png)

![image-20230129141806809](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129141806809.png)

![image-20230129141919291](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129141919291.png)

![image-20230129142000322](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129142000322.png)

## 执行过程

![image-20230129142218844](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129142218844.png)

## 组成部分

![image-20230129142629351](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129142629351.png)

![image-20230129142739221](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129142739221.png)

![image-20230129142911815](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129142911815.png)

![image-20230129142957560](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129142957560.png)

## 书写位置

### 行内式,  内嵌式, 外部式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
     <!-- 2.内嵌式js -->
     <script>
        alert('沙漠骆驼')
     </script>
     <!-- 3.外部式 -->
    <script src="js文件/01-书写位置.js"></script>
</head>
<body>
    <!-- 1.行内式 -->
    <input type="button" value="唐伯虎" onclick="alert('秋香姐')">
   
</body>
</html>
```

![image-20230129145632568](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129145632568.png)

![image-20230129145718980](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129145718980.png)

![image-20230129145818568](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129145818568.png)

## 注释

![image-20230129150624950](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129150624950.png)

## 输入输出语句

![image-20230129150732086](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129150732086.png)

```html
 <script>
        // 这是一个输入框
        prompt('请输入你的年龄');
        // 这是一个弹出警示框，展示给用户的
        alert('计算的结果是')
        // 控制台输出，给测试员测试的
        console.log('程序员才能看到我哦')
    </script>
```

# 变量

## 概述

![image-20230129155242724](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129155242724.png)

![image-20230129155433184](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129155433184.png)

## 使用

![image-20230129155612827](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129155612827.png)

![image-20230129155802287](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129155802287.png)

![image-20230129155942185](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129155942185.png)

```html
 <script>
        // 1,声明一个变量
        var age;
        // 2,给变量赋值
        age = 18;
        // 3,输出结果
        console.log(age)
        // 4,变量的初始化：申明变量，并赋值
        var age = 18
        console.log(age);
    </script>
```

## 语法拓展

![image-20230129161059074](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129161059074.png)

![image-20230129161502391](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129161502391.png)

```html
<script>
    // 申明多个变量,用逗号隔开
        var myname = 'pink',
            age = 18,
            address = '火影村';
        console.log(myname, age, address);
</script>
```

![image-20230129161813714](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129161813714.png)

## 命名规范

![image-20230129162002172](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129162002172.png)

![image-20230129162252308](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129162252308.png)

## 案例

![image-20230129162413242](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129162413242.png)

```html
<script>
    // 交换2个苹果
        var temp,
            apple1 = '青苹果',
            apple2 = '红苹果';
        temp = apple1;
        apple1 = apple2;
        apple2 = temp;
        console.log(apple1, apple2);
</script>
```

# 数据



## 数据类型简介

![image-20230129163342288](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129163342288.png)

![image-20230129163614234](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129163614234.png)

![image-20230129163831607](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129163831607.png)

## 简单的数据类型

![image-20230129172142555](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129172142555.png)

### 数字型

![image-20230129172224791](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129172224791.png)

![image-20230129172244717](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129172244717.png)

![image-20230129172314473](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129172314473.png)

![image-20230129172331802](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129172331802.png)

![image-20230129172357681](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129172357681.png)

![image-20230129172418659](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129172418659.png)

### 字符串型

![image-20230129172950421](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129172950421.png)

![image-20230129173035579](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129173035579.png)

![image-20230129173207235](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129173207235.png)

![image-20230129173526135](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129173526135.png)

![image-20230129173820443](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129173820443.png)

![image-20230129174136909](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129174136909.png)

### 布尔型

![image-20230129174523804](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129174523804.png)

### 未定义undefined

![image-20230129174820828](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129174820828.png)

### Null 

![image-20230129174922062](/Users/aqiang/Library/Application Support/typora-user-images/image-20230129174922062.png)

## 获取变量的数据类型

### 通过使用typeof 来检测数据类型

```html
<script>
      // 4. 数据类型typeof
        var myNum = 18; 
        // number
        console.log(typeof(myNum));

        var tilte = "nihao";
        // strig
        console.log(typeof(tilte));

        var flag=true;
        // boolean
        console.log(typeof(flag));

        var vaule=undefined;
        // undefined
        console.log(typeof(vaule));

        var timer=null;
        // object
        console.log(typeof(timer));
</script>
```

### 通过控制台输出变量的颜色来判断

![image-20230130115234011](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130115234011.png)

### 通过字面量判断

![image-20230130115415518](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130115415518.png)



## 数据类型转换

![image-20230130115612140](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130115612140.png)

### 转换成字符串型

![image-20230130120226628](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130120226628.png)

![image-20230130120256068](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130120256068.png)



### 转换为数字型

![image-20230130121052101](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130121052101.png)

![image-20230130121335440](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130121335440.png)

![image-20230130122039296](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130122039296.png)

```html
 <script>
        var year = prompt('请输入你的出生年份');
        // year 是字符串型，但是“-”号进行了隐式转换，直接转换成为数字型
        var age = 2023 - year; 
        alert('你今年' + age + '岁了');
    </script>
```

![image-20230130122957952](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130122957952.png)

```html
<script>
        var num1 = prompt('第一个输'),
            num2 = prompt('第二个数');
        var result = parseFloat(num1) + parseFloat(num2);
        alert('计算结果是' + result);
    </script>
```



### 转换为布尔型

![image-20230130124104043](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130124104043.png)

## 拓展

![image-20230130124509415](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130124509415.png)

![image-20230130124609416](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130124609416.png)

![image-20230130124953195](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130124953195.png)

![image-20230130125029337](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130125029337.png)

![image-20230130125119387](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130125119387.png)

# 运算符

## 运算符概念

![image-20230130135902358](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130135902358.png)

## 算术运算符

![image-20230130140024960](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130140024960.png)

![image-20230130140641484](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130140641484.png)

![image-20230130140802283](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130140802283.png)

![image-20230130141321992](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130141321992.png)

![image-20230130141444353](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130141444353.png)

## 递增和递减运算符

![image-20230130141642989](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130141642989.png)

![image-20230130141851213](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130141851213.png)

```html
<script>
    // 递增运算符++num=num+1，前置,先自加，后返回值
        var age = 10;
        ++age; //age=age+1;
        console.log(age); //11
        console.log(age + 10); //21
        console.log(age + age); //22
        console.log(++age); //12
        console.log(++age + 10); //23
        console.log(++age + age); //28
        console.log(++age + ++age); //31
</script>
```

![image-20230130143329630](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130143329630.png)

```html
<script>
    // 递增运算符num++=num+1,后置， 先返回值，再自加1
        var age = 10;
        age++; //age=age+1
        console.log(age); //11, age=11
        console.log(age + 10); //21, age=11
        console.log(age + age); //22, age=11
        console.log(age++); //11, age=12
        console.log(age++ + 10); //22, age=13
        console.log(age++ + age); //27, age=14
        console.log(age++ + age++); //29, age=16
</script>
```



![image-20230130151041492](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130151041492.png)

## 比较运算符

![image-20230130151143594](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130151143594.png)

```html
<script>
    // 比较运算符
        console.log(3 >= 5); //false
        console.log(3 <= 4); //true
        // =会默认转换数据类型
        console.log(3 <= '4'); //true
        console.log(3 == 5); //false
        console.log('hello' == 'hallo') // false;
        // 等于=, 会默认转换数据类型
        console.log(18 == '18'); //true
        console.log(18 === '18'); //false
        // 不等于：!=
        console.log(18 != 18) //false;
        // = 会默认转换数据类型
        console.log(18 != '18'); //false
        console.log(18 !== "18"); //true
</script>
```

![image-20230130152340592](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130152340592.png)

## 逻辑运算符

![image-20230130152523650](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130152523650.png)

```html
<script>
     // 逻辑运算符
        // 1，逻辑与&&, and
        console.log(3 > 5 && 3 > 2); //false
        console.log(3 < 5 && 3 > 2); //true
        // 2,逻辑或||, or
        console.log(3 > 5 || 3 > 2); //true
        console.log(3 < 5 || 3 > 2); //true
        // 3,逻辑非！, not
        console.log(!true); //false
        console.log(!3 > 5 || 3 > 2); //true
        console.log(!(3 > 5 || 3 > 2)); //false
</script>
```

![image-20230130153538607](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130153538607.png)

```html
<script>
    //逻辑短路（逻辑中断）
        // 1.逻辑与
        console.log(123 && 456); //456
        console.log(0 && 456); //0
        console.log(123 && 456 && 789); //789
        console.log(123 && 0 && 789); //0
</script>
```

![image-20230130155026983](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130155026983.png)

```html
<script>
     // 2.逻辑或
        console.log(123 || 456); //123
        console.log(0 || 456); //456
        console.log(123 || 0 || 789); //123
        console.log(0 || 0 || 789); //789
</script>
```

![image-20230130155636940](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130155636940.png)

## 赋值运算符

![image-20230130160136176](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130160136176.png)

## 运算符的优先级

![image-20230130160328374](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130160328374.png)

# 流程控制之顺序结构

## 流程控制概念

![image-20230130161341661](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130161341661.png)

## 顺序结构

![image-20230130161424108](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130161424108.png)

# 流程控制之分支结构

![image-20230130161633223](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130161633223.png)

## if分支语句

![image-20230130162102914](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130162102914.png)

![image-20230130162205605](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130162205605.png)

![image-20230130162309034](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130162309034.png)

```html
<script>
   var age = prompt('请输入年龄');
        if (age >= 18) {
            alert('带你网吧偷耳机')
        }
</script>
```

## if else双分支语句

![image-20230130162906057](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130162906057.png)

![image-20230130162945048](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130162945048.png)

```html
<script>
  var age = prompt('请输入年龄');
        if (age >= 18) {
            alert('带你去网吧偷耳机')
        } else {
            alert(' 滚')
        }
</script>
```

## if else多分支语句

![image-20230130163946075](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130163946075.png)

![image-20230130164023602](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130164023602.png)

![image-20230130164134706](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130164134706.png)

```html
<script>
   var score = prompt('请输入你的分数');
        if (score >= 90) {
            alert('A')
        } else if (score >= 80) {
            alert('B')
        } else if (score >= 70) {
            alert('C')
        } else if (score >= 60) {
            alert('D')
        } else {
            alert('E')
        }
</script>
```

## 三元表达式

![image-20230130164909080](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130164909080.png)

![image-20230130165029811](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130165029811.png)

```html
<script>
     // 案例：数字补0
        var time = prompt('请输入0-59的数字');
        // 把返回值赋给一个变量
        var result = time < 10 ? '0' + time : time;
        alert(result);
</script>
```

## switch分支结构

![image-20230130165848854](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130165848854.png)

![image-20230130170222082](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130170222082.png)

![image-20230130170257838](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130170257838.png)

```html
<script>
     // 查询水果价格
        var fruit = prompt('请输入水果');
        switch (fruit) {
            case '苹果':
                alert('3.5/斤')
                break;
            case '香蕉':
                alert('5/斤')
                break;
            case '榴莲':
                alert('35/斤')
                break;
            default:
                alert('没有查询到')
        }
</script>
```



![image-20230130170829010](/Users/aqiang/Library/Application Support/typora-user-images/image-20230130170829010.png)



# 流程控制之循环结构

## 概念

![image-20230131082641287](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131082641287.png)

![image-20230131082548843](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131082548843.png)

## for循环

### 语法结构

![image-20230131083041493](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131083041493.png)

![](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131083150015.png)

### 执行过程

![image-20230131083633871](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131083633871.png)

### 断点调试

![image-20230131084000160](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131084000160.png)

### 重复执行相同代码

```html
<script>
     // 重复固定的次数
        for (var i = 1; i <= 100; i++) {
            console.log('你好');
        }
    
      // 重复用户指定的次数
        var num = prompt('请输入次数');
        for (var i = 1; i <= num; i++) {
            alert('你好')
        }
</script>
```

### 重复执行不同代码

```html
<script>
 // for循环可以执行不同的代码，应为我们有变量i的存在，i每次循环都会变化
        for (var i = 1; i <= 100; i++) {
            console.log('你今年' + i + '岁了');
        }
    
// +++++++++++++++++++++++++++++++++++++++++++++++++
        for (var i = 1; i <= 100; i++) {
            if (i == 1) {
                console.log('你今年1岁了，刚出生')
            } else if (i == 100) {
                console.log('你今年100岁了，恭喜恭喜')
            } else {
                console.log('你今年' + i + '岁了');
            }
        }
</script>
```

### 重复某些操作

```html
<script>
 // for循环的用法：重复某些操作,比如做100次加法运算
        // 首先定义一个变量sum,用来保存求和的值
        var sum = 0;
        // 再用for循环100次
        for (var i = 1; i <= 100; i++) {
        sum = sum + i
        }
        // 最后输出变量值
        alert(sum);
</script>
```

### 案例

```html
<script>
   // 练习1：求1-100数的平均数
        var sum = 0;
        var average = 0;
        for (var i = 1; i <= 100; i++) {
            sum = sum + i
        };
        average = sum / 100;
        alert(average)
     
   // 练习2：求1-100数的偶数和与奇数和
        var even = 0;
        var odd = 0;
        for (var i = 1; i <= 100; i++) {
            if (i % 2 == 0) {
                even = even + i
            } else {
                odd = odd + i
            }
        };
        alert(even);
        alert(odd);
    
   // 练习3：求1-100数3的倍数的和
        var result = 0;
        for (var i = 1; i <= 100; i++) {
            if (i % 3 == 0) {
                result = result + i
            }
        };
        alert(result);
</script>
```



![image-20230131090836308](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131090836308.png)

```html
<script>
      // 练习4：计算班级总成绩
        // 先让输入班级总人数
        var num = prompt('请输入班级人数')
            // 输入每个学生的成绩,并把输入的值保存在变量score中，再求和
        var sum = 0;
        var average = 0;
        for (var i = 1; i <= num; i++) {
            var score = prompt('输入第' + i + '个学生的成绩');
            sum = sum + parseInt(score);
        }
        // 求完和单独计算平均数
        average = sum / num;
        alert('总成绩是' + sum);
        alert('平均成绩是' + average)

</script>
```

```html
<script>
       // 练习5：利用空字符串打印一行5课星星
        var num = prompt('你要几颗星星？')
        var str = '';
        for (var i = 1; i <= num; i++) {
            str = str + '⭐️'
        }
        // console.log(str);
        alert(str);
</script>
```

## 双重for循环

### 概述

![](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131121122437.png)

### 语法结构

![image-20230131121539274](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131121539274.png)

### 案例

![image-20230131121737303](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131121737303.png)

```html
<script>
    // 1,for双循环打印5行5列的星星
        var str = '';
        // 外循环打印行
        for (var i = 1; i <= 5; i++) {
            // 内循环打印一行内的星星数
            for (var j = 1; j <= 5; j++) {
                str = str + '⭐️';
            };
            // 一行打印完换行
            str = str + '\n'
        };
        alert(str)
</script>
```

```html
<script>
    //2,for双循环打印多行多列的星星
            var rows = prompt('请输入行数');
            var cols = prompt('请输入列数');
            var str = '';
            for (var i = 1; i <= rows; i++) {
                for (var j = 1; j <= cols; j++) {
                    str = str + '⭐️'
                };
                str = str + '\n'
            };
            alert(str)
</script>
```

```html
<script>
  // 3,for双循环打印倒三角的星星(方法一)
            var str = '';
            for (var i = 1; i <= 10; i++) {
                for (var j = i; j <= 10; j++) {
                    str = str + '⭐️'
                };
                str = str + '\n'
            };
            alert(str)
</script>
```

```html
<script>
    // 5,for双循环打印九九乘法表
        var str = '';
        for (var i = 1; i <= 9; i++) {
            for (var j = 1; j <= i; j++) {
                // str = str + '⭐️'
                // 把星号换成乘法等式：1X2=2
                // j + 'x' + i = 'j*i'
                str += j + 'x' + i + '=' + i * j+ '\t
            };

            str = str + '\n'
        };
        alert(str)
</script>
```

```html
<script>
     // 6,for双循环打印任意数乘法表
        var num = prompt('你要多少数的乘法表？');
        var str = '';
        for (var i = 1; i <= num; i++) {
            for (var j = 1; j <= i; j++) {
                // str = str + '⭐️'
                // 把星号换成乘法等式：1X2=2
                // j + 'x' + i = 'j*i'
                str += j + 'x' + i + '=' + i * j + '\b'
            };

            str = str + '\n'
        };
        alert(str);
</script>
    
```

### 总结

![image-20230131170026627](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131170026627.png)

##  while循环

### 语法结构

![image-20230131170249121](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131170249121.png)

### 案例

![image-20230131170832094](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131170832094.png)

```html
<script>
    //案例1
    var age=1;
    while(age<=100){
        alert('你几年'+age+'岁了');
        age++;
    }
    
    //2. 计算0-100之间所有整数的和
    var i = 0;
    var sum = 0;
    while (i <= 100) {
        sum += i;
        i++;
    }
    alert('所有整数的和是' + sum);
    
    // 3.while循环可以做更复杂的运算
    var message = prompt('你爱我吗？');
    while (message !== '我爱你') {
        message = prompt('你爱我吗？');
    }
    alert('我也爱你');
</script>
```

## Do while循环

### 概述

![image-20230131172931812](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131172931812.png)

### 语法结构

![image-20230131173137500](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131173137500.png)

### 案例

```html
<script>
    // do while 比while跟简洁：先执行一次，再判断
        //1. 打印人的一生，从1岁到100岁
        var age = 1;
        do {
            console.log('此人今年' + age + '岁了');
            age++;
        }
        while (age <= 100);

        // ++++++++++++++++++++++++++++++++++++++++++++++++
        //2. 计算0-100之间所有整数的和
        var i = 0;
        var sum = 0;
        do {
            sum += i;
            i++;
        }
        while (i <= 100);
        alert('所有整数的和是' + sum);
        // ++++++++++++++++++++++++++++++++++++++++++++++++
        // 3. 
        do {
            var message = prompt('你爱我吗？')
        }
        while (message !== '我爱你');
        alert('我也爱你')
</script>
```

### 循环小结

![image-20230131174806807](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131174806807.png)

## continue break

### continue

![image-20230131175011623](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131175011623.png)

```html
<script>
     // continue:结束本次循环，从头开始执行剩余次数的循环
        for (i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; //直接跳出第3次，重新从第4次开始循环
            }
            alert('我吃了第' + i + '个包子');
        }
        // 求1～100之间，能被7整除的数之外的和
        var sum = 0;
        for (i = 1; i <= 100; i++) {
            if (i % 7 == 0) {
                continue;
            }
            sum += i
        }
        alert('能被7整除的数之外的和是' + sum);
</script>
```

### break

![image-20230131180517387](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131180517387.png)

```html
<script>
     // break:立即结束整个循环
        for (i = 1; i <= 5; i++) {
            if (i == 3) {
                break; //立即结束整个循环
            }
            alert('我吃了第' + i + '个包子');
        }
</script>
```



# 数组

## 概念

![image-20230131181712659](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131181712659.png)

## 创建数组

![image-20230131181819373](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131181819373.png)

### 利用new创建数组

![image-20230131182127542](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131182127542.png)

### 利用字面量创建数组（推荐）

![image-20230131182412955](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131182412955.png)

![image-20230131182458242](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131182458242.png)

## 获取数组中的元素

![image-20230131183414807](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131183414807.png)

## 遍历数组

### 语法结构

![image-20230131183914428](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131183914428.png)

### 案例

![image-20230131184012214](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131184012214.png)

```html
<script>
var arr = ['关羽', '张飞', '赵云', '马超', '黄忠', '魏延', ]
       for (var i = 0; i < arr.length; i++) { 
           console.log(arr[i]);
       }
</script>
```

```html
<script>
// 练习1：计算一个数组里元素的总和以及平均数
        var arr = [12, 46, 53, 26, 88];
        var sum = 0;
        var avrage = 0;
        for (var i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
        };
        avrage = sum / arr.length;
        console.log('总和是' + sum, '平均值是' + avrage)
    
// 练习2：计算一个数组里元素的最大值和最小值
        var arr = [12, 46, 53, 26, 88, 990, 223, 9];
        var max = arr[0];
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            };
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        alert('最大值是' + max);
        alert('最小值是' + min);
    
// 练习3：数组里字符串的连接
        var arr = ['red', 'green', 'blue', 'pink', 'black', 'white', ];
        var str = '';
        // 给需要添加的符号定义一个变量dep, 只需赋予这个变量相应的 值， 便可更改连接的符号
        var dep = '#';
        for (var i = 0; i < arr.length; i++) {
            str += arr[i] + dep
        }
        alert(str);
    
</script>
```



## 数组中新增元素

### 通过修改数组长度length来新增元素

![image-20230131190322785](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131190322785.png)

### 通过修改索引号来新增元素

![image-20230131190658484](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131190658484.png)

## 数组案例

### 将元素存放进数组

```html
<script>
        // 练习1：新建一个数组，里面存放10个整数（1~10）
        var arr4 = [];
        for (var i = 0; i < 10; i++) {
            arr4[i] = i + 1;
        }
        alert(arr4);
</script>
```



### 筛选数组

```html
<script>
    // 练习2；将数组[2,0,6,1,77,0,52,0,25,7]中大于等于10的元素选出来，放入新数组
        // 方法一
        var arr6 = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var arr5 = [];
        var j = 0;
        for (var x = 0; x < arr6.length; x++) {
            if (arr6[x] >= 10) {
                arr5[j] = arr6[x]
                j++;
            }
        }
        alert(arr5)
        // 方法二
        var arr6 = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var arr5 = [];

        for (var x = 0; x < arr6.length; x++) {
            if (arr6[x] >= 10) {
                arr5[arr5.length] = arr6[x]
            }
        }
        alert(arr5)
</script>
```



### 删除数组里的指定元素（数组取重）

```html
<script>
    // 练习3；将数组[2,0,6,1,77,0,52,0,25,7]中等于0的元素剔除
        var arr7 = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var arr8 = [];
        for (var i = 0; i < arr7.length; i++) {
            if (arr7[i] != 0) {
                arr8[arr8.length] = arr7[i]
            }
        }
        alert(arr8)
</script>
```



### 翻转数组

```html
<script>
     // 练习4；将数组[2,0,6,1,77,0,52,0,25,7]中的元素颠倒顺序
        var arr9 = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var arr10 = [];
        for (var i = 0; i < arr9.length; i++) {
            arr10[i] = arr9[arr9.length - i - 1]
        };
        // 或者
        for (var i = arr9.length - 1; i >= 0; i--) {
            arr10[arr10.length] = arr9[i]
        };
        alert(arr10)
</script>
```



### 冒泡排序

![image-20230131193618387](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131193618387.png)

```html
<script>
   // 练习5；冒泡排序。将数组[2,0,6,1,77,0,52,0,25,7]中的元素等于0的剔除，并排序
        var arr11 = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var arr12 = [];
        for (var i = 0; i < arr11.length; i++) {
            if (arr11[i] != 0) {
                arr12[arr12.length] = arr11[i]
            }
        }
        for (var j = 0; j < arr12.length; j++) {
            for (var x = 0; x < arr12.length; x++) {
                if (arr12[x] > arr12[x + 1]) {
                    var temp = arr12[x + 1];
                    arr12[x + 1] = arr12[x];
                    arr12[x] = temp;
                }
            }
        }
        alert(arr12)
</script>
```

# 函数

## 函数的概念

![image-20230131195115970](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131195115970.png)

![image-20230131195359734](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131195359734.png)

## 函数的使用

### 声明函数

![image-20230131195701135](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131195701135.png)

### 调用函数

![image-20230131195804101](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131195804101.png)

### 函数的封装

![image-20230131195916026](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131195916026.png)

### 案例练习:利用函数重复相同的代码

![image-20230131200057205](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131200057205.png)

```html
<script>
 // 函数练习1：1-100数的和
        // 申明函数：
        function getsum() {
            var sum = 0;
            for (var i = 1; i <= 100; i++) {
                sum += i
            }
            alert(sum);
        }
        // 调用函数
        getsum();
       
    	//利用函数重复相同的代码
        getsum();
    	getsum(); 

</script>
```

## 函数的参数

### 概念

![image-20230131201351143](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131201351143.png)

![image-20230131201505237](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131201505237.png)

### 案例练习

```html
<script>
    // 函数练习2：两个任意数之间的总和
        // 申明函数：
        function getsum(num1, num2) { //num1, num2 形参
            var sum = 0;
            for (var i = num1; i <= num2; i++) {
                sum += i
            }
            alert(sum);
        }
        // 调用函数
        getsum(1, 100); //1, 100 实参
       
    	//利用函数重复相同的代码，实现不同的结果
        getsum(100, 1000);
        getsum(10, 10000);
</script>
```

### 形参和实参匹配的问题

![image-20230131202904694](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131202904694.png)

## 函数的返回值

### 语法结构

![image-20230131203944371](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131203944371.png)

### 案例练习

```html
<script>
   // 5. 函数的返回值： 利用返回值return, 实现函数结构的正确写法（函数内部不应该出现输出语句，如上面函数中的alert(sum)，而是应该把函数的结果返回给调用者）
        // 语法格式:
        //     function 函数名() {
        //         函数体;
        //         return 需要返回的结果;
        //     }
        // 函数名();
        // 相当于: 函数名() = return后面的返回值,把返回值赋给了调用的函数
    
    //练习：求两个数的最大值
    function getMax(num1,num2){
        if(num1>num2){
            return num1;
        }
        else{
            return num2;
        }
    }
    alert(getMax(1,3));
    alert(getMax(11,3));
    //或者
    function getMax(num1,num2){
        return num1>num2 ? num1 : num2;
    }
    alert(getMax(1,3));
    alert(getMax(11,3));
    //练习2:求任意一个数组中的最大值
     function getArrmax(arr) {
            var max = arr[0];
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max
        }
        // console.log(getArrmax([1, 4, 5, 6, 2]));
        // 实际开发中，常用一个变量来接受函数的返回值，跟简洁
        var result = getArrmax([1, 4, 5, 6, 2]);
        console.log(result);
</script>
```

### 注意事项

```html
<script>
 	// 1.return 还有终止函数的功能，遇到return，函数不在执行return 之后的代码
        function Getsum(num1, num2) {
            return num1 + num2
            // return后面的代码不会被执行
            alert('我是不会被执行的')
        }
        console.log(Getsum(1, 8));
        alert(Getsum(1, 99))
        // ===================================================
    // 2，return每次只能返回一个值，最先返回的值会被后返回的值替代
        function fn(num1, num2) {
            return num1, num2;
        }
        console.log(fn(1, 2));
        // 结果是2， 不是1
        // ===================================================
    // 3，如果要返回多个值时，可以利用数组
        function Getresult(sum1, sum2) {
            return [sum1 + sum2, sum1 - sum2, sum1 * sum2, sum1 / sum2]
        }
        alert(Getresult(13, 35));
        // ===================================================
    // 4,如果函数有return，输出的是return后面的值，如果没有return，输出的是undefinded
        function fn1() {
            return 666;
        }
        alert(fn1());
        // 结果是666
        function fn2() {

        }
        alert(fn2())
        // 结果是undefined
    
    
</script>
```



### Return, continue, break 的区别

![image-20230131211728626](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131211728626.png)

### 函数的本质

![image-20230131212249333](/Users/aqiang/Library/Application Support/typora-user-images/image-20230131212249333.png)

## arguments的使用

### 概念

![image-20230202121830385](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202121830385.png)

### 语法

```html
<script>
 // //arguments是函数特有的内置的参数， 用来存放所有传过来的实参：
        function fn() {
        console.log(arguments); ////里面存储了传递过来的所以实参,类似数组的形式。是伪数组
            console.log(arguments.length); ////可以得到存放了多少个实参
            console.log(arguments[2]); ////可以得到具体的某一个实参
            // //按照数组遍历，求出里面的值
            for (var i = 0; i < arguments.length; i++) {
                alert(arguments[i])
            }
        }
        fn(1, 2, 3);
        fn(1, 2, 3, 4, 5);
</script>
```

### 案例

```html 
<script>
 //练习：利用函数的arguments求不定个数的数的最大值
        function GetMax() ////形参数不确定，可以不写
        {
            var max = arguments[0]; ////arguments具有数组的一些特性
            for (var i = 0; i < arguments.length; i++) {
                if (max < arguments[i]) {
                    max = arguments[i]
                }

            }
            return max
        }
        var result = GetMax(2, 5, 6, 9, 22);
        alert(result);
</script>
```

### 总结

#### arguments是伪数组：

#### 具有数组的一些特性： 有数组的length, 按照索引的方式存储，通过便利数组得到每个值

#### 不具有真正数组的一些方法：pop()和push()等

## 函数的案例

### 翻转任意一个数组

![image-20230202131100229](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202131100229.png)

```html
<script>
     function reverseArr(arr) {
            var arr1 = new Array;
            for (var i = arr.length - 1; i >= 0; i--) {
                arr1[arr1.length] = arr[i]
            }
            return arr1
        }
        var result = reverseArr(arr);
        alert(result);
</script>
```

### 对数组排序，冒泡排序

![image-20230202132628172](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202132628172.png)

```html
<script>
    function sort(arr) {
            for (var i = 0; i < arr.length - 1; i++) {
                for (var x = 0; x < arr.length - i - 1; x++) {
                    if (arr[x] > arr[x + 1]) {
                        var temp = arr[x];
                        arr[x] = arr[x + 1];
                        arr[x + 1] = temp;
                    }
                }
            }
            return arr;
        }
        var result = sort([1,34,77,12,999]);
        alert(result);
</script>
```

### 判断闰年

![image-20230202133410194](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202133410194.png)

```html
<script>
     function IsRun(year) {
            var flag = false; ////新定义一个变量，默认是false,if判断结果赋值给变量，最后让函数return变量
            if (year / 4 == 0 && year / 100 != 0 || year / 400 == 0) {
                flag = ture; ////为什么要返回布尔值？？引出函数之间调用的问题
            }
            return flag
        }
        alert(IsRun(3000))
</script>
```



## 函数间的相互调用

### 概述

![image-20230202133923384](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202133923384.png)

### 案例

![image-20230202134136274](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202134136274.png)

```html
<script>
    function BackDate() {
        var myYear = prompt('请输入年份');
            if (IsRun(myYear)) ////判断输入年份是否是闰年,是的if不能识别字符串，所以选择让if来判断false或true。这里调用判断年份是否是闰年的函数IsRun(myYear),这里的year是实参，是用户输入的数值。
            {
                alert('你输入' + myYear + '年2月份是29天')
            } else {
                alert('你输入' + myYear + '年2月份是28天')
            }
        }
        BackDate();

        ////此函数用于判断是不是闰年，输出的结果是true或false.

        function IsRun(year) ////这里的year是形参，也可以用其他的名称。比如year1
        {
            var flag = false; ////新定义一个变量，默认是false,if判断结果赋值给变量，最后让函数return变量
            if (year / 4 == 0 && year / 100 != 0 || year / 400 == 0) {
                flag = ture; ////为什么要返回布尔值？？引出函数之间调用的问题
            }
            return flag
        }
</script>
```

## 函数的两种申明方式

### 利用函数关键字自定义函数（命名函数）

```html	
<script>
    function fn(){
         console.log('我是命名函数')
    }
    fn();
</script>
```



### 利用函数表达式定义函数（匿名函数）

```html
<script>
    var 变量名 = function(){};
    var fun = function(){
        console.log('我是函数表达式')
    }
    fun();
    // 变量名(实参);
        // 这种函数没有名称，成为匿名函数
        // 类似于申明一个变量，这个变量里保存的不是数值，而是一个函数
    
</script>
```



# js的作用域

## 作用域

### 概述

![image-20230202203256722](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202203256722.png)

### 分类

#### 全局作用域：范围是整个script标签，或者是一个单独的js文件

#### 局部作用域：范围是函数内部，又称函数作用域，相关代码只在函数内部起作用

## 变量的作用域

### 概述：根据变量作用域的不同，变量分为全局变量和局部变量

### 分类

#### 全局变量： 在全局作用域中都可以使用的变量

```html
<script>
   var num = 10; ////变量num就是全局变量
        function fn() {
            console.log(num);
        }
        fn();
        //变量num能在全局使用，所以在函数内部也能使用，输出结果是10 
</script>
```



#### 局部变量： 在函数作用域里的变量

```html
<script>
   function fn1() {
            var num1 = 10; ////num1是局部变量
            num2 = 20; ////num2没有变量申明，直接赋值，他是全局变量
        }
        fn1();
        console.log(num1);
        //num1是局部变量，在全局作用域里不起作用，所以输出结果是undefined
        console.log(num2);
        // num2在函数作用域里没有变量申明，直接赋值，他则是全局变量，所以结果是20
</script>
```

### 执行效率

####  全局变量只有当浏览器关闭才会销毁，比较占内存资源

#### 局部变量当程序执行完毕就会销毁，比较节约内存资源

## 作用域链

### 概述

![image-20230202205645029](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202205645029.png)

### 语法

```html
<script>
     var num = 10; ////全局作用域
        function fn() {
            var num = 20; ////外部函数作用域
            function fn1() {
                ////内部函数作用域
                console.log(num);
            }
            fn1()
        }
        fn()
        //根据就近原则，结果还是20
</script>
```

### 案例练习

```html
<script>
     // 练习1. 结果是？
        function f1() {
            var num = 123;

            function f2() {
                console.log(num); ////站在目标，一层一层往外查找
            }
            f2();
        }
        var num = 456;
        f1();
        ////结果是123
    
     // 练习2. 结果是？
        var a = 1;

        function fn1() {
            var a = 2;
            var b = '22';
            fn2();

            function fn2() {
                var a = 3;
                fn3();

                function fn3() {
                    var a = 4;
                    console.log(a);
                    console.log(b);
                }
            }
        }
        fn1();
        ////结果是4和22
</script>
```



# js的预解析

## 预解析

![image-20230202211724287](/Users/aqiang/Library/Application Support/typora-user-images/image-20230202211724287.png)

## 分类

### 变量提升：把所以的变量申明提升到 当前作用域 的最前面，不提升赋值操作

```html
<script>
     // 坑1
        console.log(num); ////结果也是undefined, 坑1
        var num = 10;
        //相当于：
        var num;////把变量申明提升到当前作用域的最前面
        console.log(num);
        num = 10;////变量赋值不提升
    
    // 坑2
        fun();
        var fun = function() {
                console.log(22); ////结果报错。坑2
            }
            //相当于：
        var fun; ////把变量申明提升到当前作用域最前面
        fun();////此时调用函数的话，次函数还没定义
        fun = function() {
            console.log(22);
        };
</script>
```

### 函数提升：把所有函数 申明提升到 当前作用域 的最前面，不调用函数

```html
<script>
        fn();
        function fn(){
            console.log(11);////结果是11
        }
          //相当于：
         function fn(){
            console.log(11);
        } ////把函数申明提升到当前作用域最前面
        fn();
        
</script>
```

## 案例

```html
<script>
     // 案例1：结果是？
        var num = 10;
        fun()

        function fun() {
            console.log(num);
            var num = 20;
        }
        // 预解析为：
        var num;

        function fun() {
            var num;
            console.log(num); ////就近原则。结果是undefined
            num = 20;

        };
        num = 10;
        fun();
</script>
```

```html
<script>
   // 案例2：结果是？
        var num = 10;

        function fn() {
            console.log(num);
            var num = 20;
            console.log(num);
        }
        fn();
        // 预解析为：
        var num;

        function fn() {
            var num;
            console.log(num); ////undefined
            num = 20;
            console.log(num); ////20
        }
        num = 10;
        fn();
</script>
```

```html
<script>
   // 案例3：结果是？
        var a = 18;
        f1();

        function f1() {
            var b = 9;
            console.log(a);
            console.log(b);
            var a = '123;'
        }
        // 预解析为：
        var a;

        function f1() {
            var b;
            var a;
            b = 9;
            console.log(a); ////undefined
            console.log(b); ////9
            a = '123;'
        };
        a = 18;
        f1();
</script>
```

```html
<script>
    // 案例4：结果是？
        f1();
        console.log(a);
        console.log(b);
        console.log(c);

        function f1() {
            var a = b = c = 9; ////(var a=9;b=9;c=9。b和c直接赋值了，没有申明)与（集体申明var a=9,b=9,c=9）有区别
            console.log(a);
            console.log(b);
            console.log(c);
        }
        // 预解析为：
        function f1() {
            var a;
            a = 9;
            b = 9;
            c = 9;
            console.log(a); ///9
            console.log(b); ///9
            console.log(c); ///9
        };
        f1();
        console.log(a); //// undefined,变量a局部变量
        console.log(b); //// 9, b=9直接赋值，是全局变量
        console.log(c); //// 9, c=9直接赋值，是全局变量
</script>
```

