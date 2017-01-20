var express = require('express');
var router = express.Router();
var superagent = require('superagent'),
    cheerio = require('cheerio'),
    fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/nice', function (req, res, next) {
    var url = 'http://www.niceui.cn/';
    superagent.get(url)
        .end(function (err, rses) {
            var $ = cheerio.load(rses.text);
            // var case_con = [];
            // var banner = [];

            /*for (var i = 0; i < $('.rsContent').length; i++) {
             banner.push({
             href: $('.rsContent a').eq(i).attr('href'),
             imgsrc: $('.rsContent img').eq(i).attr('src')
             });
             }
             fs.writeFile('public/json/index_banner.json', JSON.stringify(banner));*/

            /*for (let i = 0; i < $('.case_con dl').length; i++) {
                console.log(i);
                case_con.push({
                    title: $('.case_con dl').eq(i).find('dt').eq(0).find('h1 a').attr('title'),
                    href: $('.case_con dl').eq(i).find('dt').eq(0).find('h1 a').attr('href'),
                    desc: $('.case_con dl').eq(i).find('dt').eq(1).text(),
                    imgSrc:$('.case_con dl').eq(i).find('dd a').css('background').match(/http:.+(.jpg)/gi).join()
                })
            }
            fs.writeFile('public/json/index_case.json', JSON.stringify(case_con));*/

        });

});

module.exports = router;
