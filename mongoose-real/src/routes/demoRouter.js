import Router from "koa-router";
import demoController from "../api/demoController";

const router = new Router()

router.get('/demoController', demoController.demo)

export default router