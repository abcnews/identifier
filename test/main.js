/* globals describe,it */

var expect = require('expect.js');
var identifier = require('../index');

describe('identifier', function(){

	it('should be a function', function(){
		expect(identifier).to.be.a('function');
	});

	it('should return a function', function(){
		expect(identifier()).to.be.a('function');
	});

	describe('instance', function(){
		var instance = identifier('Test');

		it('should return its identity', function(){
			expect(instance()).to.be('Test');
		});

		it('should return a section string', function(){
			expect(instance('section')).to.be('Test-section');
		});

		it('should return a section string with state', function(){
			expect(instance('section', 'state')).to.be('Test-section--state');
		});

		it('should return an identity string with state', function(){
			expect(instance(null, 'state')).to.be('Test--state');
		});

		it('should return a prefixed identity string', function(){
			expect(instance(null, null, '.')).to.be('.Test');
		});

		it('should return an section string with state and prefix', function(){
			expect(instance('section', 'state', '.')).to.be('.Test-section--state');
		});
	});

});