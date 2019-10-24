const koaRouer = require('koa-router')
const a = require('../api/a')

const router = new koaRouer()

router.get('/a', a)

module.exports = router