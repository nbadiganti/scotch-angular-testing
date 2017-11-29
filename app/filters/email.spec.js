describe('Users factory', function() {

    beforeEach(angular.mock.module('api.filters'));

    var filter;
    beforeEach(inject(function($filter){
        filter = $filter('validateEmail', {});
    }));

    it('gmail domain', function() {
        expect(filter('test@gmail.com')).toBe(true);
    });

    it('outlook domain', function() {
        expect(filter('test@outlook.com')).toBe(true);
    });

    it('non domain', function() {
        expect(filter('nag@.com')).toBe(false); // no domain
    });
    
});