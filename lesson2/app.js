/**
 * Created by superhan on 17-7-1.
 */
// eg     http://localhost:3000/?sh=superhan/*
//  string superhan md5 secret
// */
var express =require('express');
var utility =require('utility');
var app=express();

app.get('/',function (req,res) {
    var sh=req.query.sh;
    var md5Value=utility.md5(sh);
    var sha1Value=utility.sha1(sh);
    res.send('md5Value:'+md5Value+";"+"sha1Value:"+sha1Value);
})
app.listen(3000,function (req,res) {
    console.log('I am running at port 3000');
})

