## CSS基础

### 概念

#### Cascading Style Sheet 层叠样式表

### 网页中样式的来源

#### 注意：html标签本身没有任何样式。

#### 1. 浏览器默认的样式：网页中显示时会生成浏览器默认的样式。

![image-20221230111147186](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230111147186.png)

#### 2.浏览器用户自定义的样式

* #### 可以在浏览器设置中，自定义来控制网页显示的样式。

    ![image-20221230111750111](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230111750111.png)

#### 3. 网页代码样式

* #### 内联样式：在标签中添加style属性，在属性值中编写CSS样式代码。

    ##### ![image-20221230112518113](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230112518113.png)

    * #### 优点：哪里需要写哪里

    * ####  缺点：多个元素有相同的样式时，需要重新书写

* #### 内部样式：在head标签中添加style标签，再通过选择器来添加css样式代码![image-20221230113843967](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230113843967.png)

    * #### 优点：

        * #### 结构和样式分离

        * #### 结构清晰，利于后期代码的维护

        * #### 可以批量设置所选择标签的css样式

    * #### 缺点：

        * #### 结构和样式并未完全分离，还在同一个文件中

* #### 外部样式: 先创建css文件，再通过head标签里添加link标签来引入css文件。

    ```html
    <head>
         <link rel="stylesheet" href="13-w外部样式.css">
    </head>
    ```

    * #### 优点：

        * #### 结构和样式完全分离

        * #### 以后方便维护代码，一处改，处处改

        * #### 外部css文件可以压缩，减少代码文件的体积

* #### 样式层叠性：

    * #### 优先级：对于同一个标签，内联权重最大，而内部和外部采用就近原则，离标签近的优先起作用

    * #### 层叠性：css 样式可以中多个地方书写，最后根据权重优先级，层叠在一起，形成一套css样式作用在标签上。



## 选择器

![image-20221230142102187](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230142102187.png)

![image-20221230142205125](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230142205125.png)

![image-20221230142346336](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230142346336.png)

![image-20221230142756880](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230142756880.png)

## 背景样式：

![image-20221230143952463](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230143952463.png)

![image-20221230144236470](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230144236470.png)

![image-20221230144932804](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230144932804.png)

## 雪碧图的实现

![image-20221230151432750](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230151432750.png)

## 文本样式

![image-20221230153935302](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230153935302.png)

![image-20221230154240464](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230154240464.png)

## 行和块

### 分类

![image-20221230155059213](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230155059213.png)

![image-20221230155234779](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230155234779.png)

### 行和块之间的转化

![image-20221230155642653](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230155642653.png)



## 字体样式

### 1. 字体的使用

![image-20221230181705171](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230181705171.png)

![image-20221230181817409](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230181817409.png)

![image-20221230181930313](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230181930313.png)

![image-20221230182444290](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230182444290.png)

![image-20221230182514161](/Users/aqiang/Library/Application Support/typora-user-images/image-20221230182514161.png)

### 2. 字体图标的设计

![image-20230118131049564](/Users/aqiang/Library/Application Support/typora-user-images/image-20230118131049564.png)

## 超链接样式

![image-20230118142323868](/Users/aqiang/Library/Application Support/typora-user-images/image-20230118142323868.png)

## 列表样式

![image-20230118144234630](/Users/aqiang/Library/Application Support/typora-user-images/image-20230118144234630.png)

```html
<style>
        ul{
            border: 1px solid green;
        }
        li{
            border: 1px solid red;
        }
        /* list-style-type 默认是小黑点 */
        /* list-style-position:小黑点位置，默认是outside  */
        .l1 {
            /* none 无 */
            list-style-type: none;
        }

        .l2 {
            /* 空心圆 */
            list-style-type: circle;
            list-style-position: inside;
        }

        .l3 {
            /* 实心方框 */
            list-style-type: square;
            list-style-position: outside;
        }

        .l4 {
           /* 数字，变成ol有序列表 */
           list-style-type: decimal;
           list-style-position: inside;
        }
        
    </style>
```

![image-20230118150908685](/Users/aqiang/Library/Application Support/typora-user-images/image-20230118150908685.png)

## 表格样式

![image-20230118151321475](/Users/aqiang/Library/Application Support/typora-user-images/image-20230118151321475.png)

```html
<style>
    table {
        border: 1px solid red;
        width: 600px;
        height: 200px;
        /* 单元格之间的间距 */
        /* border-spacing: 10px; */
        border-spacing: 0px;
        /* 合并单元格边框为一 */
        border-collapse: collapse;
    }
    td {
        border: 1px solid green;
        color: rgb(158, 23, 23);
        text-align: center;

    }
</style>
<body>
    <table>
        <tr>
            <td>姓名</td>
            <td>性别</td>
            <td>年龄</td>
        </tr>
        <tr>
            <td>张三</td>
            <td>男</td>
            <td>18</td>
        </tr>
        <tr>
            <td>莉丝</td>
            <td>女</td>
            <td>19</td>
        </tr>
        
    </table>
</body>
```

![image-20230118153127438](/Users/aqiang/Library/Application Support/typora-user-images/image-20230118153127438.png)

## Link 和@ import 

![image-20230118160511482](/Users/aqiang/Library/Application Support/typora-user-images/image-20230118160511482.png)

![image-20230118160547040](/Users/aqiang/Library/Application Support/typora-user-images/image-20230118160547040.png)

## 盒子模型

![image-20230120124105030](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120124105030.png)

### 边框border

![image-20230120125808977](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120125808977.png)

![image-20230120133824520](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120133824520.png)

### 内边距padding

![image-20230120140538350](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120140538350.png)

### 外边距margin

![image-20230120150917127](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120150917127.png)

![image-20230120151007889](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120151007889.png)

![image-20230120151043836](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120151043836.png)

### 标准盒子的大小的计算规则

![image-20230120151956926](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120151956926.png)

### 怪异盒子模型（IE盒子模型）

![image-20230120152542908](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120152542908.png)

![image-20230120152845881](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120152845881.png)

### 拓展：width百分比的设置

![image-20230120154505453](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120154505453.png)

![image-20230120155949750](/Users/aqiang/Library/Application Support/typora-user-images/image-20230120155949750.png)

