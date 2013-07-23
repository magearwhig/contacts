function contactsViewModel() {
    var self = this;

    self.newFirstName = ko.observable();
    self.newLastName = ko.observable();

    self.remove = function(contact) {
        self.contacts.remove(contact);
    };

    self.addContact = function() {
        self.contacts.push(new contact({
            firstName: self.newFirstName(),
            lastName: self.newLastName()
        }));
        self.newFirstName("");
        self.newLastName("");
    }

    self.contacts = ko.observableArray([
        new contact({
            firstName: "Matt",
            lastName: "Wood",
            haveMet: true,
            company: "Mentor Graphics",
            address: "555 Address",
            city: "Wilsonville",
            state: "OR",
            zip: "97214",
            phone: "5035551212"
        }),
        new contact({
            firstName: "Matt2",
            lastName: "Wood",
            haveMet: true,
            company: "Mentor Graphics",
            address: "555 Address",
            city: "Wilsonville",
            state: "OR",
            zip: "97214",
            phone: "5035551212"
        })
    ]);
}
