var Contact = require('./contactModel');

function getContacts(req, res) {
  Contact.find({}, (err, contacts) => {
    res.send(contacts);
  });
}

function postContact(req, res) {
  console.log("postContact called, here's the body: ", req.body);
  Contact.create(req.body)
    .then((contact) => {
      // res.send('Contact created: '+ JSON.stringify(contact));
      // res.send('success!');
    })
    .catch((err) => {
      // res.send('MongoDB Error: '+ err);
      res.send('failure!');
    });
}

module.exports = {
  getContacts: getContacts,
  postContact: postContact,
};
