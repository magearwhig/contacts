function contact(options) {
    var defaults = {
        editing: false,
        firstName: "",
        lastName: "",
        haveMet: false,
        company: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
    };
    var args = _.extend(defaults, options);
    var self = this;

    self.editContact = function(){
        self.editing(true);
    }

    self.doneEditing = function(){
        self.editing(false);
    }

    self.firstName = ko.observable(args.firstName);
    self.lastName = ko.observable(args.lastName);
    self.haveMet = ko.observable(args.haveMet);
    self.company = ko.observable(args.company);
    self.address = ko.observable(args.address);
    self.city = ko.observable(args.city);
    self.state = ko.observable(args.state);
    self.zip = ko.observable(args.zip);
    self.phone = ko.observable(args.phone);
    self.editing = ko.observable(args.editing);
    self.fullName = ko.computed(function(){
        return self.firstName() + " " + self.lastName();
    }, self);
    self.initials = ko.computed(function(){
        return self.firstName().substring(0, 1) + self.lastName().substring(0, 1);
    }, self);
}

