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
                'body': {"name":"pariatur","photoUrls":["laborum sed et"],"id":30631003},
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
                'body': {"name":"nostrud","photoUrls":["amet","pariatur ex quis sunt","sint qui eu","consectetur"],"id":-53956465,"category":{"name":"elit sit inc"}},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "Pet not found"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"magna in dolore sunt","photoUrls":["commodo"]},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });

        it('should respond 405 for "Validation exception"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"ea dolore","photoUrls":["veniam","adipisicing"]},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(405)
            return chakram.wait();
        });    
    });
});