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
  .post("/post", createPost)
  .get("/post/:id", getPostById);


app.use(router.routes());

function list(ctx) {
  ctx.response.body = { posts: posts };
}

function getPostById(ctx) {
    const id = ctx.params.id;
    let filterPost = posts.filter((d) => d.id == id);
    if (!filterPost) ctx.throw(404, "invalid post id");
    ctx.response.body = { post: filterPost };
  }

  function createPost(ctx){
    const post = ctx.request.body;
    console.log("🚀 ~ file: app.js ~ line 48 ~ createPost ~ post", post)
    const id = posts.push(posts.length) - 1;
    post.created_at = new Date();
    post.id = id;
    ctx.response.body = {post:post,message:"post added"}
  }

// listen to port 3000
if (!module.parent) app.listen(3000);
