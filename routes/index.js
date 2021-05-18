const config = require('../configs'),
      Router = require('koa-router'),
      router = new Router({
          prefix: config.app.routerBaseApi
      }),
      U = require('../controllers/user.js'),
      N = require('../controllers/news.js'),
      A = require('../controllers/article.js')

/* HTTP动词
    GET     //查询
    POST    //新建
    PUT     //替换
    PATCH   //更新部分属性
    DELETE  //删除指定ID的文档
*/

router
    .post('/login', U.login)
    .get('/news',N.getAllNewsList)
    .post('/atricle/insert',A.insertAtricle)                                     //用户登录
    .get('/atricle/query',A.getAtricle)                                     //用户登录

exports = module.exports = router;


