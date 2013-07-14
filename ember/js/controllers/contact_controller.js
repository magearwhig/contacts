Contacts.ContactController = Ember.ObjectController.extend({

    isEditing: false,

    deleteContact: function() {
        var model = this.get('model');
        model.deleteRecord();
        model.save();
    },

    editContact: function() {
        var model = this.get('model');
        var firstName = this.get('firstName');
        if (!firstName.trim()) { return; }
        var lastName = this.get('lastName');
        if (!lastName.trim()) { return; }
        model.save();
        this.set('isEditing', false);
    },

    haveMet: function(key, value) {

        var model = this.get('model');

        if (value === undefined) {
            // property being used as a getter
            return model.get('haveMet');
        } else {
            // property being used as a setter
            model.set('haveMet', value);
            model.save();
            return value;
        }

    }.property('model.haveMet')

});
