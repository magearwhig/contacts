Contacts.Router.map(function () {
  this.resource('contacts', { path: '/' });
});

Contacts.ContactsRoute = Ember.Route.extend({
    model: function () {
        return Contacts.Contact.find();
    }
});
