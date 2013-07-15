function Contacts() {

    var ENTER_KEY = 13;

    // a custom binding to handle the enter key (could go in a separate library)
    ko.bindingHandlers.enterKey = {
        init: function (element, valueAccessor, allBindingsAccessor, data) {
            var wrappedHandler, newValueAccessor;

            // wrap the handler with a check for the enter key
            wrappedHandler = function (data, event) {
                if (event.keyCode === ENTER_KEY) {
                    valueAccessor().call(this, data, event);
                }
            };

            // create a valueAccessor with the options that we would want to pass to the event binding
            newValueAccessor = function () {
                return {
                    keyup: wrappedHandler
                };
            };

            // call the real event binding's init function
            ko.bindingHandlers.event.init(element, newValueAccessor, allBindingsAccessor, data);
        }
    };

    function contact(firstName, lastName, haveMet, company, address, city, state, zip, phone) {
        var self = this;
        self.firstName = ko.observable(firstName);
        self.lastName = ko.observable(lastName);
        self.haveMet = ko.observable(haveMet);
        self.company = ko.observable(company);
        self.address = ko.observable(address);
        self.city = ko.observable(city);
        self.state = ko.observable(state);
        self.zip = ko.observable(zip);
        self.phone = ko.observable(phone);
    }

    function contactsViewModel() {
        var self = this;

        self.current = ko.observable();

        self.remove = function(contact) {
            self.contacts.remove(contact);
        };

        self.addContact = function() {
            console.log(self.current);
        }

        self.contacts = ko.observableArray([
            new contact("Matt", "Wood", true, "Mentor Graphics", "555 Address", "Wilsonville", "OR", "97214", "5035551212"),
            new contact("Matt22", "Wood", false, "Mentor Graphics", "555 Address", "Wilsonville", "OR", "97214", "5035551212")
        ]);
    }

    ko.applyBindings(new contactsViewModel());
}
Contacts();
