Contacts.Router.map(function () {
    this.resource('contacts', { path: '/' }, function() {
        this.route('havenotmet');
        this.route('havemet');
    });
});

Contacts.ContactsRoute = Ember.Route.extend({
    model: function () {
        return Contacts.Contact.find();
    }
});

Contacts.ContactsIndexRoute = Ember.Route.extend({
    model: function () {
        return Contacts.Contact.find();
    }
});

Contacts.ContactsHavenotmetRoute = Ember.Route.extend({
    model: function() {
        return Contacts.Contact.filter(function(contact){
            if (!contact.get('haveMet')) { return true; }
        });
    },
    renderTemplate: function(controller) {
        this.render('contacts/index', {controller: controller});
    }
});

Contacts.ContactsHavemetRoute = Ember.Route.extend({
    model: function() {
        return Contacts.Contact.filter(function(contact){
            if (contact.get('haveMet')) { return true; }
        });
    },
    renderTemplate: function(controller) {
        this.render('contacts/index', {controller: controller});
    }
});
