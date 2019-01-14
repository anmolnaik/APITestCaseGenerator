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
                'body': {"name":"velit nisi aute","photoUrls":["ut"],"status":"pending"},
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
                'body': {"name":"laborum Duis consectetur","photoUrls":["mollit","in Lorem eu Excepteur","dolor in aliquip nulla"],"category":{"name":"culpa sunt occaecat"}},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "Pet not found"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"proident","photoUrls":["ad occaecat adipisicing laborum","id ","ut irure"]},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });

        it('should respond 405 for "Validation exception"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"anim minim velit","photoUrls":["exercitation consequat","ipsum velit"]},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(405)
            return chakram.wait();
        });    
    });
});