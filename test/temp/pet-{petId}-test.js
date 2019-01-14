'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/{petId}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/321', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.have.schema({"required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"type":"object","xml":{"name":"Category"}},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"name":"photoUrl","wrapped":true},"items":{"type":"string"}},"tags":{"type":"array","xml":{"name":"tag","wrapped":true},"items":{"properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"type":"object","xml":{"name":"Tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"type":"object","xml":{"name":"Pet"}});
            return chakram.wait();
        });

        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/123', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "Pet not found"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/123', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });    
    });
    
    describe('tests for post', function() {
        it('should respond 405 for "Invalid input"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/pet/0', { 
                'formData': {"name":"ad commodo esse ex","status":"labore"},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/x-www-form-urlencoded","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(405)
            return chakram.wait();
        });    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for "Invalid pet value"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/pet/0', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml","api_key":"Duis"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });    
    });
});