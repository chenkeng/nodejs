#模块的使用
  * exports 写法一
  ```mymodule.js
  function hello(){
    console.log('hello superhan')
  }
  function world(){
    console.log('hello world')
  }
  exports.hello=hello;
  exports.world=world;
  ```
  * 在其他文件中调用mymodule.js
  ```index.js
  var hello =require('./mymodule');  // or  var hello =require('./mymodule.js')
  
  hello.hello(); // hello superhan
  hello.world(); // hello world
  ```
  * exports 写法二
  
  ```mymodule.js
  function Hello(){
    this.hello=function(){
      console.log('hello superhan');
    }
    this.world=function(){
      console.log('hello world');
    }
  }
  module.exports=Hello;
  ```
  
  ```index.js
  var Hello =require('./mymodule');
  var hello =new Hello();
  
  hello.hello(); // hello superhan
  hello.world(); // hello world
  ```
  
  
---

npm 也可以从第三方网站（http://www.npmjs.org/）上下载第三方Node.js包。

通过npm安装的包会按包名字母顺序出现在package.json中的dependencies字段中。

由于 taobao 的源不支持搜索包，所以需要先设置为官方源：
```
$ npm config set registry https://registry.npmjs.org
```
然后搜索包：
```
$ npm search express  //搜索express包
```
安装包，如果安装包失败或者比较慢的话可以切换到 taobao 的源：
```
$ npm config set registry https://registry.npm.taobao.org
$ npm install -g express  //安装包，-g即global全局安装
```
更新包：
```
$ npm update express
```
卸载包：
```
$ npm uninstall express
```
  
