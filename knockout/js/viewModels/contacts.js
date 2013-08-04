function contactsViewModel() {
    var self = this;

    self.newFirstName = ko.observable();
    self.newLastName = ko.observable();
    self.newCompany = ko.observable();
    self.newAddress = ko.observable();
    self.newCity = ko.observable();
    self.newState = ko.observable();
    self.newZip = ko.observable();
    self.newPhone = ko.observable();
    self.newHaveMet = ko.observable();

    self.remove = function(contact) {
        self.contacts.remove(contact);
        localStorage.setItem("koContacts", ko.toJSON(self.contacts()))
    };

    self.addContact = function() {
        self.contacts.push(new contact({
            firstName: self.newFirstName(),
            lastName: self.newLastName(),
            company: self.newCompany(),
            address: self.newAddress(),
            city: self.newCity(),
            state: self.newState(),
            zip: self.newZip(),
            phone: self.newPhone()
        }));
        localStorage.setItem("koContacts", ko.toJSON(self.contacts()))
        self.newFirstName("");
        self.newLastName("");
        self.newCompany("");
        self.newAddress("");
        self.newCity("");
        self.newState("");
        self.newZip("");
        self.newPhone("");
    }

    self.initialJSONContacts = localStorage.getItem("koContacts") ? JSON.parse(localStorage.getItem("koContacts")) : [];

    self.initialContacts = [];

    _.each(self.initialJSONContacts, function(item){
        self.initialContacts.push(new contact(item));
    });

    self.contacts = ko.observableArray(self.initialContacts);
}
