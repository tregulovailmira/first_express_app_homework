const forumMessages = new Map();

module.exports.postMessage = (req, res) => {
  const { body } = req;
  const newMessage = { id: Date.now().toString(), ...body };

  forumMessages.set(newMessage.id, newMessage);
  res.status(201).send(newMessage);
};

module.exports.editMessage = (req, res) => {
  const { body } = req;

  if (forumMessages.has(body.id)) {
    const oldMessage = forumMessages.get(body.id);
    if (oldMessage.email === body.email) {
      const editedMessage = {
        id: oldMessage.id,
        email: oldMessage.email,
        texMessage: body.textMessage,
        createdAt: oldMessage.createdAt,
        isEdit: true,
      };
      forumMessages.set(body.id, editedMessage);
      res.status(200).send(editedMessage);
    } else {
      res.status(403).send('You can not edit this message');
    }
  } else {
    res.status(404).send('Message not found');
  }
};
