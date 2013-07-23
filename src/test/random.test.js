/*global Math describe beforeEach spyOn it expect */
describe('util.random', function () {
    'use strict';

    beforeEach(function () {
        spyOn(Math, 'random').andReturn(0.85);
    });

    describe('randomBelow', function () {

        it('should multiply correctly', function () {
            expect(Math.randomBelow(6)).toBe(5);
            expect(Math.randomBelow(1)).toBe(0);
        });
        it('should validate its arguments', function () {
            expect(function () { Math.randomBelow(0); }).toThrow('invalid argument: 0');
        });
    });
});

//basic nothing test
describe('addition', function () {
    'use strict';

    it('should return 4 when adding 2 and 2', function () {
        expect(3 + 3).toBe(6);
    });
});

