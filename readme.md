�����Ұ���[N-blog](https://github.com/nswbmw/N-blog)��ɵ�С��Ŀ
###���з���
<pre>
<code>
git clone https://github.com/ZZR-china/Node-blog

cd Node-blog

npm install 

npm start
</code>
</pre>
PS:��ȷ��������mongodb�ҷ����Կ�����

��ɹ������������ٿӣ������Ǹ���ģ��İ汾�������⣬���ö����
���ڵİ汾�ǿ����ڱ������еġ�

ѧϰ֮���nodejs���˸���������ʶ��node�ڽ�����ҳӦ���ϵ�ȷ���ŵ����������ƣ��ҷ����ݣ����е�Ч��Ҳ�ܸߡ�

��������һЩ����:

1.���Ȱ�װ������mongo���ݿ⻨���ҵ�ʱ�䣬������ǰ�˽��.��д��ƪ[��ν�mongo��װ��Ϊwindows�µķ���](http://www.zhangzirui.com/2016/01/10/create-windows-mongodb/)���ҵĲ����ϣ���ӭ����;

2.ÿ���¼���Щ���ܶ�Ҫctrl+cȻ���������'npm start'���鷳�������Ƽ�����ʹ��node-dev����������supervisor��ʹ��'npm install -g supervisor'��װ�ͺ�;

(��װ����package.json�н�

"scripts": {
    "start": "node ./bin/www"
  }
  
�е�node ./bin/www��Ϊsupervisor ./bin/www��Ȼ��Ҳ���Ըĳ�supervisor app���ʹ����һ�����ס��app.js����Ӽ���port�Ĵ��롣
)

3.֮���ս̳�����ûʲô���⣬��Ϥ֮��ͻᷢ����ӹ��ܵ����̶���ࣺ����post.js�ж����µ�����ģ�Ͳ����ñ���ɾ���ȹ���ģ�飬Ȼ����route�е�index.js���ô�������Ĺ��ܡ������view�����ҳ��

