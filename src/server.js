const express = require('express');
const path = require('path');

const app = express();

console.log(path.join('.', '../build'));

app.use(express.static(path.resolve('../build')));

app.listen(process.env.PORT || 3000, () => {
  console.info(`Listening on port ${process.env.PORT || 3000}`);
});
