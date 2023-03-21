HTML常用的标签

## 文本标签

### 标题标签h

* #### 定义：h1-h6,用来组织标题文本

* #### 语法：

    ```html
    <!-- 1. 标题标签 -->
        <h1>h1标题标签</h1>
        <h2>h2标题标签</h2>
        <h3>h3标题标签</h3>
        <h4>h4标题标签</h4>
        <h5>h5标题标签</h5>
        <h6>h6标题标签</h6>
    ```

* #### 数字越大，字体越小，文本内容加粗

* #### 独占一行，文本上下有默认间距margin

### 段落标签p

* #### 用于组织段落，一个段落用一个标签

* #### 语法：

```html
  <!-- 2. 段落标签P  -->
    <p>
        为激励大家学习，即日起，凡是连续完成学习并在此视频下方评论区打卡满15天者（请另外自行开贴否则无效），将获得蜗牛学苑本门课程一阶段原创（电子）教材，打卡30天获得二阶段教材，打卡45天获得三阶段教材，打卡60天获得四阶段教材。
    </p>
    <P>
        学员可以自主的选择求职身份。我们的培养目标是让学员具备解决企业实际问题的能力，而不是靠忽悠面试官，所以我们不但不强制学员进行简历包装，而且还鼓励学生走培训简历，我们要让更多的企业认识和认可我们出去的学员，慢慢摘掉培训机构和培训生身上的“水货”标签。
    </P>
```

* #### p标签不能相互嵌套

* #### 独占一行

* #### 文本内容上下有默认间距

### span标签

* #### 用来组织简短的文本或者提示性的信息

* #### 语法：

```html
<!-- 3. span标签： 存放一些简单的文本或者提示性信息，可以同行显示 -->
    <span>作者：小王</span>
    <span>单位：银行</span>
```

* #### 可以同行显示

### label标签

* #### 用来搭配表单标签使用

* #### 语法

```html
 <!-- 4. label标签： 配合表单元素使用，用来控制表单元素的一些属性，可以同行显示 -->
    <!-- for=""  for 是标签上的属性，引号里面是属性值-->
    <label for=""> 我是label标签1</label>
    <label for=""> 我是label标签2</label>
```

* #### 可以同行显示

### 粗体标签

* #### b/strong标签，加粗字体

* #### 语法：

```html
  <!-- 4. 加粗标签 b/strong， 推荐strong-->
    <b>我是b加粗的</b>
<strong>我是strong加粗的</strong>
```

* #### 推荐使用strong

### 斜体标签

* #### i/em标签，用于斜体显示文本

* #### 语法：

* ```html
    <!-- 5. 斜体标签:i/em ， 推荐i-->
       <i>我是i斜体</i>
       <em>我是em斜体</em>
    ```

* #### 推荐使用i标签

### 换行标签

* #### br标签，用于强制换行		

* #### 语法：

* ```html
    <!-- 6. 换行标签br ,单标签-->
        <br>
    
    ```

* #### 单标签

### 分割线标签

* #### hr标签，用于添加分割线

* #### 语法：

* ```html
    <!-- 分割线hr , 单标签-->
        <hr>
        分割线
        <hr>
    ```

* #### 单标签

## 图片标签

![image-20221223120759562](/Users/aqiang/Library/Application Support/typora-user-images/image-20221223120759562.png)

## 超链接标签a

![](/Users/aqiang/Library/Application Support/typora-user-images/image-20221223121954803.png)

![image-20221223125149304](/Users/aqiang/Library/Application Support/typora-user-images/image-20221223125149304.png)

## 表格标签table

### 用于制作网页上的表格

### 语法：

```html
<table border="1px" width="800px" height="200px" align="center" bgcolor="skyblue" cellspacing="0" cellpadding="20px">
        <tr height="20px" align="right" bgcolor="yellow" >
            <th>name</th>
            <th>age</th>
            <th>gender</th>
            <th>hobby</th>
        </tr>
        <tr>
            <td width="300px" height="200px" align="center" bgcolor="darkred" >Adm</td>
            <td >18</td>
            <td>male</td>
            <td>reading</td>
        </tr>
        <tr>
            <td>Anna</td>
            <td>30</td>
            <td>female</td>
            <td>writing</td>
        </tr>
    </table>
```

### 属性

* #### border: 控制这个表格的边框

* #### width：表格的宽度，对tr设置无效，td设置来控制某一个单元格的宽度，会影响整个列的宽度

* #### height：表格的高度，对tr设置控制一行的高度，td设置来控制某一个单元格的宽度，会影响整个行的宽度

* #### bgcolor：控制背景颜色，作用的优先顺序：td>tr>table

* #### align：控制对齐方式

* #### cellspacing：控制整表格单元格与单元格之间的间距

* #### Cellpadding：控制整个表格单元格内容与单元格边框的间距

#### 注意

* #### th标签代表表头，默认会加粗，文本居中显示

* #### 表格的基本结构：table里只能放tr，tr里只能放th或者td

* #### 表格的嵌套：表格可以进行嵌套，但是内层表格必须放在外层表格的单元格里（td),不能破坏表格的基本结构

* #### 表格的合并：rowspan合并行，垂直方向， colspan列合并，水平方向

​	

## 表单标签和表单组件

### 用于登录注册等需要进行数据交换的标签

### 语法

```html
 <!-- form表单标签  -->
    <!-- 
        action:设置提交服务器的地址
        method:提交数据到服务器的方法
            get:从服务器读取数据，也可以提交表单数据，但是数据会显示在网页地址栏中
            post:提交数据到服务器，数据不会显示

        对于表单组件中的属性
        name:设置数据的存储位置
        value:数据存储的具体的值
     -->
    <form action="07-表单提交测试.html" method="post"
        style="width:400px; background-color: #eee; margin: 0 auto; padding: 50px;">
        <h3>普通输入框</h3>
        <label for="name">name</label>
        <input type="text" id="name" placeholder="name" name="mingzi">

        <h3>邮箱输入框</h3>
        <label for="email">email</label>
        <input type="email" id="email" placeholder="email" name="youxiang">

        <h3>密码输入框</h3>
        <label for="password">password</label>
        <input type="password" id="password" placeholder="password" name="mima">

        <h3>日期输入框</h3>
        <label for="DOB">DOB</label>
        <input type="date" id="DOB" placeholder="2022/09/28" name="riqi">

        <h3>单选框</h3>
        <label for="male"> male</label>
        <input type="radio" id="male" name="gender" value="nan">
        <label for="female"> female</label>
        <input type="radio" id="female" name="gender" value="nv">
        <label for="other"> other</label>
        <input type="radio" id="other" name="gender" value="qita" checked>

        <h3>复选框</h3>
        <h4>hobby:</h4>
        <label for="reading">reading</label>
        <input type="checkbox" id="reading" name="hobby" value="dushu">
        <label for="writing">writing</label>
        <input type="checkbox" id="writing" name="hobby" value="xiezuo">
        <label for="swimming">swimming</label>
        <input type="checkbox" name="" id="swimming" name="hobby" value="youyong" checked>

        <h3>下拉列表</h3>
        <h4>subjects:</h4>
        <!-- multiple 可以实现多选 -->
        <select name="xueke" multiple style="width: 100px;">
            <option value="shuxue">math</option>
            <option value="wangye" selected>web</option>
            <option value="kehuduan">GUI</option>
            <option value="chenxu">APP</option>
        </select>

        <h3>文本域</h3>
        <h4>blog</h4>
        <textarea id="blog" cols="30" rows="10" placeholder="write your blog here" name="blog"></textarea>
        <br>
        <h3>按钮</h3>
        <h4>input按钮</h4>
        <input type="button" value="普通按钮">
        <input type="reset" value="重置按钮">
        <input type="submit" value="提交按钮">

        <!-- 推荐使用 button 标签 -->
        <h4>H5 button按钮</h4>
        <button>普通按钮</button>
        <button type="button">普通按钮</button>
        <button type="reset">重置按钮</button>
        <button type="submit">提交按钮</button>

    </form>
```

### 注意

* #### 对于form标签：

    * ####  action:设置提交服务器的地址

    * #### method:提交数据到服务器的方法

    * ####  get:从服务器读取数据，也可以提交表单数据，但是数据会显示在网页地址栏中

    * 

    * #### post:提交数据到服务器，数据不会显示

* #### 对于表单组件中的属性

    * #### name:设置数据的存储位置

    * #### value:数据存储的具体的值

* #### 单选框需要设置相同的name进行绑定

* #### 单选框和复选框设置checked，设置默认选项

* #### 下拉框在select标签中设置mutiple属性，可实现多选。 在option标签中设置selected，实现默认选中项

* #### 按钮标签推荐使用button标签, reset和submit按钮需要配合form同事使用



## 列表标签

### 有序列表: ol

![image-20221227134030087](/Users/aqiang/Library/Application Support/typora-user-images/image-20221227134030087.png)

### 无序列表: ul

![image-20221227133934610](/Users/aqiang/Library/Application Support/typora-user-images/image-20221227133934610.png)

### 自定义列表: dl

![image-20221227134215657](/Users/aqiang/Library/Application Support/typora-user-images/image-20221227134215657.png)

### 列表标签的常见应用场景：于a链接标签搭配使用，用于导航栏的布局

![image-20221227134432915](/Users/aqiang/Library/Application Support/typora-user-images/image-20221227134432915.png)

## 其他标签

![image-20221227142407577](/Users/aqiang/Library/Application Support/typora-user-images/image-20221227142407577.png)

![image-20221227142523712](/Users/aqiang/Library/Application Support/typora-user-images/image-20221227142523712.png)

![image-20221227142557985](/Users/aqiang/Library/Application Support/typora-user-images/image-20221227142557985.png)

