const router = require('koa-router')();
const sinup = require('./sinup');

router.use('/sinup', sinup.routes(), sinup.allowedMethods());
module.exports = router;
