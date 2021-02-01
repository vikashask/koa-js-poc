// const render = require("./lib/render");
const logger = require("koa-logger");
const router = require("@koa/router")();
const koaBody = require("koa-body");

const Koa = require("koa");
const app = (module.exports = new Koa());

const posts = [
  {
    id: 1,
    name: "vikask",
    Country: "India",
  },
  {
    id: 2,
    name: "test",
    Country: "Pak",
  },
];

// middleware
app.use(logger());

app.use(koaBody());
// route definitions
router
  .get("/", list)

app.use(router.routes());

function list(ctx) {
  ctx.response.body = { posts: posts };
}
// listen

if (!module.parent) app.listen(3000);
