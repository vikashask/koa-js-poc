const router = require("@koa/router")();

// const postRouter = require("./post");
const postController = require("./../controller/post.controller");

// router.use("/post", postRouter);

router.get("/", postController.postList);
//   .post("/post", postController.createPost)
//   .get("/post/:id", postController.getPostById);

module.exports = router;
