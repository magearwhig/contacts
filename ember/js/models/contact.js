Contacts.Contact = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    haveMet: DS.attr('boolean')
});

Contacts.Contact.FIXTURES = [
    {
        id: 1,
        firstName: 'Matt',
        lastName: 'Wood',
        haveMet: true
    },
    {
        id: 2,
        firstName: 'Ray',
        lastName: 'Lankford',
        haveMet: false
    },
    {
        id: 3,
        firstName: 'Brian',
        lastName: 'Jordan',
        haveMet: false
    },
];
