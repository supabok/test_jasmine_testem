describe('saySomething', function(){
    it('should say something', function(){
        expect(saySomething()).toBe('welcome someone');
    });
    it('should say welcome cat', function(){
        expect(saySomething('cat')).toBe('welcome cat');
    });
});