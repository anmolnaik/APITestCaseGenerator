'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /store/inventory', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/store/inventory', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/json"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.have.schema({"type":"object","additionalProperties":{"type":"integer","format":"int32"}});
            return chakram.wait();
        });    
    });
});