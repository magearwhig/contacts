describe("Contact Model", function() {
    describe("Contact", function() {
        var aContact;
        beforeEach(function(){
            aContact = new contact({
                firstName: 'Matt',
                lastName: 'Wood'
            });
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
    });
});
