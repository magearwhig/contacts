describe("Contact Model", function() {
    describe("Contact", function() {
        var contact;
        beforeEach(function(){
            contact = Contacts.Contact.createRecord({
                firstName: 'Matt',
                lastName: 'Wood'
            });
        });
        it("new contact first name should be Matt", function(){
            expect(contact.get('firstName')).to.be('Matt');
        });
        it("new contact full name should be Matt Wood", function(){
            expect(contact.get('fullName')).to.be('Matt Wood');
        });
    });
});
