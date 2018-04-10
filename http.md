# http通信模块

```
/*
*   作用 http模块发起请求
*/

var http=require('http');
http.get('http://www.itsource.cn/',function(res){
  // console.log(res);
  var html='';
  
  // 真正拿数据需要绑定 data 事件
  res.on('data',function(txt){
    console.log('------')
    console.log(txt.toString()); // 每次发送一小段数据 
    
    html+=txt;
  })
  
  // 绑定end 事件， 当服务器将所有数据发送完毕时触发
  res.on('end',function(){
    console.log(html)
  })
});

```
