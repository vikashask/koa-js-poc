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

module.exports.postList = (ctx) => {
  ctx.response.body = { posts: posts };
};

module.exports.getPostById = (ctx) => {
  const id = ctx.params.id;
  let filterPost = posts.filter((d) => d.id == id);
  if (!filterPost) ctx.throw(404, "invalid post id");
  ctx.response.body = { post: filterPost };
};

module.exports.createPost = (ctx) => {
  const post = ctx.request.body;
  const id = posts.push(posts.length) - 1;
  post.created_at = new Date();
  post.id = id;
  ctx.response.body = { post: post, message: "post added" };
};
