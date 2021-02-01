const router = require("@koa/router")();

const postController = require("./../controller/post.controller");

router.get("/", postController.postList);
//   .post("/post", postController.createPost)
//   .get("/post/:id", postController.getPostById);

module.exports = router;
