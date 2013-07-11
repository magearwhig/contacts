Contacts.ContactController = Ember.ObjectController.extend({
    haveMet: function(key, value){

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
