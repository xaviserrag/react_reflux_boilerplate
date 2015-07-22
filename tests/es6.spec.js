/* global describe, it, expect */

'use strict';

describe('Babelify ES6 polyfill', function() {
    it('should work:', function() {
        expect(Array.from({0: 'foo', 1: 'bar', length: 2})).toEqual(['foo', 'bar']);
    });
});
