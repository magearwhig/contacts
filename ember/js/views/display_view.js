Contacts.displayContact = Ember.View.extend({
    doubleClick: function(evt) {
        this.get('controller').set('isEditing', true);
    }
});
