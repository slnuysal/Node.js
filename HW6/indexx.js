const Koa = require("koa");

const app = new Koa();

// response
app.use(async (ctx) => {
  const url = ctx.request.url;

  if (url === "/") {
    ctx.status = 200;
    ctx.body = "<h1>WELCOME INDEX PAGE!</h1>";
  } else if (url === "/about") {
    ctx.status = 200;
    ctx.body = "<h1>WELCOME ABOUT PAGE!</h1>";
  } else if (url === "/comunication") {
    ctx.status = 200;
    ctx.body = "<h1>WELCOME TO COMUNICATION PAGE!</h1>";
  } else {
    ctx.status = 404;
    ctx.body = "<h1>404 PAGE NOT FOUND!</h1>";
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server Started with port ${port}...`);
});
