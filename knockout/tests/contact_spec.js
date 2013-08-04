describe("Contact Model", function() {
    describe("Contact", function() {
        var aContact;
        var aContactViewModel;
        beforeEach(function(){
            aContact = new contact({
                firstName: 'Matt',
                lastName: 'Wood'
            });
            aContactViewModel = new contactsViewModel();
        });
        it("new contact first name should be Matt", function(){
            expect(aContact.firstName()).toBe('Matt');
        });
        it("new contact full name should be Matt Wood", function(){
            expect(aContact.fullName()).toBe('Matt Wood');
        });
        it("new contact initials should be MW", function(){
            expect(aContact.initials()).toBe('MW');
        });
        /*
        it("new contact view model inits with 2 contacts", function(){
            expect(aContactViewModel.contacts().length).toBe(2);
        });
        */
        it("addContact adds a contact with name TestFirst TestLast", function(){
            var len = aContactViewModel.contacts().length;
            aContactViewModel.newFirstName("TestFirst");
            aContactViewModel.newLastName("TestLast");
            aContactViewModel.addContact();
            expect(aContactViewModel.contacts().length).toBe(len + 1);
            expect(aContactViewModel.contacts()[len].firstName()).toBe("TestFirst");
            expect(aContactViewModel.contacts()[len].lastName()).toBe("TestLast");
        });
        
    });
});
