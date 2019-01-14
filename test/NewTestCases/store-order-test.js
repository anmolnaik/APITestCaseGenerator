'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /store/order', function() {
    describe('tests for post', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/store/order', { 
                'body': {"status":"delivered","petId":-31867799},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.have.schema({"properties":{"id":{"type":"integer","format":"int64"},"petId":{"type":"integer","format":"int64"},"quantity":{"type":"integer","format":"int32"},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","enum":["placed","approved","delivered"]},"complete":{"type":"boolean","default":false}},"type":"object","xml":{"name":"Order"}});
            return chakram.wait();
        });

        it('should respond 400 for "Invalid Order"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/store/order', { 
                'body': {"complete":false,"quantity":46708420,"shipDate":"2986-07-23T22:32:32.821Z","petId":-18443493,"status":"delivered"},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });    
    });
});