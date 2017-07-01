/**
 * Created by superhan on 17-7-1.
 */

var express=require('express');
var app= express();
app.get('/',function (req,res) {
    res.send('hello superhan !');
})

app.listen('3000',function () {
    console.log("I am running at port 3000");
})