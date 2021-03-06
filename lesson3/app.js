/**
 * Created by superhan on 17-7-1.
 */
/*
 *
 * */

var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();
app.get('/', function (req, res, next) {
    superagent.get('https://cnodejs.org').end(function (err, sres) {
        if (err) {
            return next(err);
        }
        var $ = cheerio.load(sres.text);
        var items = [];
        $('#topic_list .topic_title').each(function (index, element) {
            var $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: "https://cnodejs.org" + $element.attr('href'),
                author: $('#topic_list .user_avatar img').eq(index).attr('title'),

            })
        })
        /*$('#topic_list .user_avatar img').each(function (i,ele) {
         var $element=$(ele);
         items.push({
         author:$element.attr('title')
         })
         })*/
        res.send(items);
    })
})

app.listen('3000', function () {
    console.log('app is running at port 3000');
})