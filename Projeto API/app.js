const express = require('express');
const app = express();

const routes = require('./src/routes');
const port = 3000;

app.use(routes);
app.listen(port, () => {
  console.log("Server is running on port " + port);
});