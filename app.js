const express = require('express');
const { validate } = require('./middleware');
const forumMessageController = require('./controllers/forumMessage.controller');

const app = express();

app.use(express.json());
app.use((error, req, res, next) => {
  res.status(500).send(error);
});

app.get('/forum', (req, res) => {
  console.log(`Get handler is running from url ${req.url}`);
});

app.post(
  '/forum',
  validate.newForumMsgValidate,
  forumMessageController.postMessage
);

app.patch(
  '/forum',
  validate.editedForumMsgValidate,
  forumMessageController.editMessage
);

module.exports = app;
