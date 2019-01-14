'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet', function() {
    describe('tests for post', function() {
        it('should respond 201 for "Successfully added pet"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"prateek","photoUrls":["Anmol","url2","Hansaj"]},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(201)
            return chakram.wait();
        });

        it('should respond 405 for "Invalid input"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"Ut dolor sit","photoUrls":["elit aute"]},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(405)
            return chakram.wait();
        });    
    });
    
    describe('tests for put', function() {
        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"occaecat in ","photoUrls":["officia ut"],"category":{"name":"laboris dolor dolore"}},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "Pet not found"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"consequat e","photoUrls":["et qui dolore","cillum magna ea","fugiat"],"tags":[{"name":"ut"}]},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });

        it('should respond 405 for "Validation exception"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"nisi non voluptate","photoUrls":["amet in fugiat in","ipsum"],"category":{},"status":"sold","id":52555898},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(405)
            return chakram.wait();
        });    
    });
});