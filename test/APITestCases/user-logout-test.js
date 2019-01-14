'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/logout', function() {
    describe('tests for get', function() {
        it('should respond default for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/logout', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            return chakram.wait();
        });    
    });
});