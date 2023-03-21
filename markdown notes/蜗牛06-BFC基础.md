# BFC与IFC基础

## BFC概念

![image-20230123094943974](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123094943974.png)

![image-20230123095216573](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123095216573.png)

![image-20230123095357865](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123095357865.png)

## BFC应用场景

![image-20230123095914600](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123095914600.png)

![image-20230123102103911](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123102103911.png)

![image-20230123101752577](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123101752577.png)

```html
<style>
        .container{
            border: 1px solid red;

        }
        .left{
            width: 200px;
            height: 200px;
            background-color: tomato;
            float: left;

        }
        .right{
            width: 200px;
            height: 200px;
            background-color: yellowgreen;
            float: right;
        }
        .center{
            height: 400px;
            background-color: pink;
            /* 可转换为BFC，从而实现左右盒子固定，中间盒子自适应布局 */
            overflow: hidden;
        }
</style>
<body>
    <div class="container">
        <div class="left">left</div>
        <div class="right">right</div>
        <div class="center">center</div>
    </div>
</body>
```

![image-20230123102002884](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123102002884.png)

![image-20230123102646280](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123102646280.png)

![image-20230123103633386](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123103633386.png)

![image-20230123103943752](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123103943752.png)

![image-20230123104830799](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123104830799.png)

## IFC概念

![image-20230123105458046](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123105458046.png)

![image-20230123105602885](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123105602885.png)

![image-20230123105910804](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123105910804.png)

## IFC应用场景

![image-20230123110442730](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123110442730.png)

![image-20230123110637930](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123110637930.png)

![image-20230123111722717](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123111722717.png)

![image-20230123111813642](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123111813642.png)

![image-20230123112132832](/Users/aqiang/Library/Application Support/typora-user-images/image-20230123112132832.png)

