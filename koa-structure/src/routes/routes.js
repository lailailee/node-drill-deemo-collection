import combineRouters from 'koa-combine-routers'
import demoRouter from './demoRouter'

module.exports = combineRouters(demoRouter)