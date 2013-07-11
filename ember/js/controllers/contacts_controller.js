Contacts.ContactsController = Ember.ArrayController.extend({
    createContact: function () {
        var firstName = this.get('newContactFirstName');
        if (!firstName.trim()) { return; }
        var lastName = this.get('newContactLastName');
        if (!lastName.trim()) { return; }

        var contact = Contacts.Contact.createRecord({
            firstName: firstName,
            lastName: lastName,
            haveMet: false
        });

        this.set('newContactFirstName', '');
        this.set('newContactLastName', '');

        contact.save();
    }
});
