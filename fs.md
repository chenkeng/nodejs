#文件模块 
需要引入 fs=require("fs");
1. 文件读取
  * 异步
    ```
    var fs=require('fs');
    fs.readFile('xxx.txt',function(err,data){
      if(err){ console.log(err)}
      console.log(data)
    })
    
    ```
  * 同步
  ```
  var fs=require('fs');
  var data=fs.readFileSync('xxx.txt');
  console.log(data.toString());
  
  ```
  

2. 文件写入
  * 异步
  ```
  var fs=require('fs');
  var data='Hello ,superhan';
  fs.writeFile('01.txt',data,function(err){
    if(err){console.log(err)}
    console.log('write success')
  })
  
  ```
  * 同步
  ```
  var fs=require('fs');
  var str='hello superhan';
  var data=fs.writeFileSync('01.txt',str)
  console.log(data)
  
  ```
3. 文件删除
 * 异步
```
var fs=require('fs');
fs.unlink('./01.txt',fuction(err){
  if(err){
   console.log(err)
  }else{
   console.log('删除成功');
  }
  
})
```

4. 以流的方式读取文件
```
// fs.createReadStream();
var fs=require('fs');
// 创建可以读取的流
var stream1=fs.createReadStream('./data.txt');
// 监听data事件，有数据读取的时候会触发，接收到数据
stream1.on('data',function(txt){
 console.log(txt);
});

//监听end事件，当文件读取完毕时，会触发该事件
stream1.on('end',function(){
 console.log('文件读取完毕')
})

// 监听error事件，当文件读取错误时，会触发此事件
stream1.on('error',function(){
 console.log('文件读取错误')
})
```

5. 写入流文件

```
var fs=require('fs');
var stream2=fs.createWriteStream('./11.txt');  // 创建可以写的流
stream2.write('这是一段测试数据'); // 向stream2写入内容
stream2.end();  // 写完以后要结束

// 绑定一个finish 事件
stream2.on('finish',function(){
 console.log('以流的方式写入成功了')
});
// 流读取错误error事件
stream1.on('error',function(){
 console.log('流读取错误')
})
```

6. 管道 pipe
// 从一个流将数据流入另外一个流（一定要是流才能用管道）
```
var fs=require('fs');
var s1=fs.createReadStream('./data.txt');
var s2=fs.createWriteStream('./data2.txt'); // data2 可以是不存在的文件
s1.pipe(s2);   // 相当于将s1的文件复制到s2
```








