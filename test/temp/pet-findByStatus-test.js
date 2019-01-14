'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/findByStatus', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/findByStatus', { 
                'qs': {"status":["anmol"]},
                'headers': {"GlobalShow":"global","PathOverride":"path","OpOverrideFromGlobal":"op","StatusCodeOverrideFromGlobal":"statusCode","PathShow":"path","OpOverrideFromPath":"op","StatusCodeOverrideFromPath":"statusCode","OpShow":"op","StatusCodeOverrideFromOp":"statusCode","StatusCodeShow":"statusCode","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.comprise.of.json([{"name":"sparky","photoUrls":["url1","url2","url3"]},{"name":"champ","photoUrls":["url4","url5","url6"]}]);
            return chakram.wait();
        });

        it('should respond 400 for "Invalid status value"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/findByStatus', { 
                'qs': {"status":["notanenum1","notanenum2"]},
                'headers': {"GlobalShow":"global","PathOverride":"path","OpOverrideFromGlobal":"op","StatusCodeOverrideFromGlobal":"statusCode","PathShow":"path","OpOverrideFromPath":"op","StatusCodeOverrideFromPath":"statusCode","OpShow":"op","StatusCodeOverrideFromOp":"statusCode","StatusCodeShow":"statusCode","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });    
    });
});