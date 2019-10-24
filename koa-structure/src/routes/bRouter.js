const koaRouer = require('koa-router')
const b = require('../api/b')

const router = new koaRouer()

router.get('/b', b)

module.exports = router