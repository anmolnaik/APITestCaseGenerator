'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/{username}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/cillum nulla', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.have.schema({"properties":{"id":{"type":"integer","format":"int64"},"username":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","format":"int32","description":"User Status"}},"type":"object","xml":{"name":"User"}});
            return chakram.wait();
        });

        it('should respond 400 for "Invalid username supplied"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/in', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "User not found"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/proident Ut mollit', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });    
    });
    
    describe('tests for put', function() {
        it('should respond 400 for "Invalid user supplied"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/user/dolo', { 
                'body': {"phone":"adipisicing","email":"ipsum reprehenderit ea","id":-96094686,"userStatus":-24806502,"username":"nisi ut aliquip","lastName":"cillum"},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "User not found"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/user/commodo nostrud', { 
                'body': {"firstName":"magna consectetur","password":"exercitation dolo","email":"sunt quis","lastName":"sit anim laborum","userStatus":-67058266,"username":"enim"},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for "Invalid username supplied"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/user/ea', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "User not found"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/user/quis eu', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });    
    });
});