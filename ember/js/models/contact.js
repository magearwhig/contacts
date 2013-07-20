Contacts.Contact = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    company: DS.attr('string'),
    address: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    zip: DS.attr('string'),
    phone: DS.attr('string'),
    haveMet: DS.attr('boolean'),
    fullName: function(){
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName'),
    initials: function(){
        return this.get('firstName').substring(0,1) + this.get('lastName').substring(0,1);
    }.property('firstName', 'lastName')
});

