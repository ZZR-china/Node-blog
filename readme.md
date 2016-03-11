这是我按照[N-blog](https://github.com/nswbmw/N-blog)完成的小项目
###运行方法
<pre>
<code>
git clone https://github.com/ZZR-china/Node-blog

cd Node-blog

npm install 

npm start
</code>
</pre>
PS:请确保本地有mongodb且服务以开启！

完成过程中遇到不少坑，尤其是各种模块的版本兼容问题，还好都解决
现在的版本是可以在本地运行的。

学习之后对nodejs有了更清晰的认识，node在建造网页应用上的确有着得天独厚的优势，且方便快捷，运行的效率也很高。

我遇到的一些问题:

1.首先安装并配置mongo数据库花了我点时间，还好以前了解过.我写了篇[如何将mongo安装成为windows下的服务](http://www.zhangzirui.com/2016/01/10/create-windows-mongodb/)在我的博客上，欢迎交流;

2.每次新加入些功能都要ctrl+c然后方向键上在'npm start'很麻烦，作者推荐我们使用node-dev但是我用了supervisor，使用'npm install -g supervisor'安装就好;

(安装后再package.json中将

"scripts": {
    "start": "node ./bin/www"
  }
  
中的node ./bin/www改为supervisor ./bin/www当然你也可以改成supervisor app如果使用这一命令记住在app.js中添加监听port的代码。
)

3.之后按照教程来都没什么问题，熟悉之后就会发现添加功能的流程都差不多：先在post.js中定义新的数据模型并设置保存删除等功能模块，然后在route中的index.js配置处理请求的功能。最后在view中添加页面

