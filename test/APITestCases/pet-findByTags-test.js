'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/findByTags', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/findByTags', { 
                'qs': {"tags":["cillum occaecat consectetur ea","nostru","ullamco voluptate ex"]},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.have.schema({"type":"array","items":{"required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"type":"object","xml":{"name":"Category"}},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"name":"photoUrl","wrapped":true},"items":{"type":"string"}},"tags":{"type":"array","xml":{"name":"tag","wrapped":true},"items":{"properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"type":"object","xml":{"name":"Tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"type":"object","xml":{"name":"Pet"}}});
            return chakram.wait();
        });

        it('should respond 400 for "Invalid tag value"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/findByTags', { 
                'qs': {"tags":["do nostrud","Excepteur","aute","reprehenderit"]},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });    
    });
});