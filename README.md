# vue-cli-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

https://www.kancloud.cn/xiaoyulive/vue/533690


实现 路由动态加载---懒加载---路由拆分--vuex拆分---服务段渲染 / 预渲染



滴滴项目分析：https://github.com/DDFE/DDFE-blog/issues/13 

迅雷懒加载：https://juejin.im/post/59bf501ff265da06602971b9 
懒加载：https://www.cnblogs.com/zhanyishu/p/6587571.html


vuex拆分：https://blog.csdn.net/qq_39523111/article/details/79638614  
         https://blog.csdn.net/github_26672553/article/details/53389988  

服务段渲染： https://segmentfault.com/a/1190000008795113  
            https://segmentfault.com/a/1190000011039920  
            https://juejin.im/post/5a9ca40b6fb9a028b77a4aac 
   Nuxt.js：https://zh.nuxtjs.org/guide



Vue发布路径问题：
  https://segmentfault.com/a/1190000012135787
    https://segmentfault.com/a/1190000012135787
打包的文件不放在主域名文件夹下
1.  修改build发布的   assetsPublicPath: '/hot/'   --- 绝对路径
2. router 路由 --- 添加 base: '/hot/',       --------//加上这一行
3. 修改图片路径
4. 刷新404，后端配合