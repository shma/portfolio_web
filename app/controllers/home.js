var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
  app.use('/about', router);
  app.use('/works', router);
  app.use('/works/ooparts', router);
  app.use('/works/sugoi_instagram', router);
  app.use('/works/korographic', router);
  app.use('/works/shikaku', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Shunya Matsuno | Web Developer',
      articles: articles,
      og_type: 'website'
    });
  });
});

router.get('/about', function (req, res, next) {
    res.render('about', {
      title: 'Shunya Matsuno | About',
      og_type: 'article'
    });
});

router.get('/works', function (req, res, next) {
    res.render('works', {
      title: 'Shunya Matsuno | Works',
      og_type: 'article'
    });
});

router.get('/works/ooparts', function (req, res, next) {
    res.render('ooparts', {
      title: 'Shunya Matsuno | Works - ooparts2015',
      works_title: 'OOPARTS GIFU 2015',
      works_img: '/img/ooparts.png',
      og_type: 'article'
    });
});

router.get('/works/sugoi_instagram', function (req, res, next) {
    res.render('sugoi_instagram', {
      title: 'Shunya Matsuno | Works - すごいインスタグラム',
      works_title: 'すごいインスタグラム',
      og_type: 'article'
      //works_img: '/img/ooparts.png',
      //works_desc: 'aaa br'
    });
});

router.get('/works/korographic', function (req, res, next) {
    res.render('korographic', {
      title: 'Shunya Matsuno | Works - コログラフィック',
      works_title: 'コログラフィック',
      og_type: 'article'
      //works_img: '/img/ooparts.png',
      //works_desc: 'aaa br'
    });
});

router.get('/works/shikaku', function (req, res, next) {
    res.render('shikaku', {
      title: 'Shunya Matsuno | Works - ヘイメンと９人のシカク',
      works_title: 'ヘイメンと９人のシカク',
      works_img: '/img/shikaku_works.png',
      og_type: 'article'
      //works_img: '/img/ooparts.png',
      //works_desc: 'aaa br'
    });
});
