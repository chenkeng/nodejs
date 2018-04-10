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
```
var fs=require('fs');
fs.unlink(fuction(err){
  
})
```
