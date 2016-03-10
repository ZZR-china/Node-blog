var crypto = require('crypto'),
    User = require('../models/user.js');

module.exports = function(app) {
  //主页
  app.get('/', function (req, res) {
      res.render('index', {
      title: '主页',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
      });
});
//注册
  app.get('/reg', function (req, res) {
      res.render('reg', {
      title: '注册',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
      });
  });
      app.post('/reg', function (req, res) {
      });
  //登录页面
app.get('/login', function (req, res) {
      res.render('login', {
          title: '登录',
          user: req.session.user,
          success: req.flash('success').toString(),
          error: req.flash('error').toString()});
  });
app.post('/login', function (req, res) {
      //生成密码的 md5 值
      var md5 = crypto.createHash('md5'),
          password = md5.update(req.body.password).digest('hex');
      //检查用户是否存在
      User.get(req.body.name, function (err, user) {
        if (!user) {
          req.flash('error', '用户不存在!');
          return res.redirect('/login');//用户不存在则跳转到登录页
        }
        //检查密码是否一致
        if (user.password != password) {
          req.flash('error', '密码错误!');
          return res.redirect('/login');//密码错误则跳转到登录页
        }
        //用户名密码都匹配后，将用户信息存入 session
        req.session.user = user;
        req.flash('success', '登陆成功!');
        res.redirect('/');//登陆成功后跳转到主页
      });
});
  //发表文章页面
      app.get('/post', function (req, res) {
        res.render('post', { title: '发表' });
      });
      app.post('/post', function (req, res) {
      });

  //登出界面
      app.get('/logout', function (req, res) {
        req.session.user = null;
        req.flash("success", "登出成功");
        res.redirect("/");
        //登出成功后返回主页
      });





};
