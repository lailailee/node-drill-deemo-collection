const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const koaBody = require('koa-body');
const cors = require('@koa/cors')
const json = require('koa-json')
router.prefix('/api')
router.get('/', ctx => {
  console.log(ctx)
  ctx.body = "Lailailee,I'm comming"
})
router.get('/api', ctx => {
  const params = ctx.request.query
  console.log(params)
  console.log(params.name, params.age)
  //name:lailailee
  //age:23
  ctx.body = { name: params.name, age: params.age }
})
router.get('/async', async (ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(() => {
      console.log('print 2s later')
    }, 2000)
  })
  ctx.body = result
})
router.post('/post', async (ctx) => {
  let { body } = ctx.request
  console.log(body)
  ctx.body = { ...body }
})


app.use(koaBody())
app.use(cors())
app.use(json({ pretty: false, params: 'pretty' }))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)