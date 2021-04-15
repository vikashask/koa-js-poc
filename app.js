// const render = require("./lib/render");
const logger = require("koa-logger");
// const router = require("@koa/router")();
const koaBody = require("koa-body");

const Koa = require("koa");
const app = (module.exports = new Koa());

// middleware
app.use(logger());
app.use(koaBody());

var router = require("./routes");
app.use(router.routes());

app.use(router.routes()).use(router.allowedMethods());

// listen to port 3000
if (!module.parent)
  app.listen(3000, () => {
    console.log("server is lising at 3000");
  });
