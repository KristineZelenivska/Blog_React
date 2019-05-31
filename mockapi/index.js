const jsonServer = require('json-server');
const { isEmpty } = require('lodash');
const seed = require('./seed.js');
const routes = require('./routes');
const port = 3030;
const data = seed();
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

const render = (router.render = (req, res, outcomeCode, message) => {
  res.jsonp({
    payload: res.locals.data,
    state: {
      outcomeCode,
      message,
    },
  });
});

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(jsonServer.rewriter(routes));

// getCodes api
server.post('/code/getCodes', (req, res) => {
  res.locals.data = router.db.get('codes') || [];
  return render(req, res);
});

server.use(router);
server.listen(port, (err) => {
  console.log(`Mock Api Server is running at http://localhost:${port}/`);
});
