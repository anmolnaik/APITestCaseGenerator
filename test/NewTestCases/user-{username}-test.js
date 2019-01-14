'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/{username}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/irure anim enim dolore', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.have.schema({"properties":{"id":{"type":"integer","format":"int64"},"username":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","format":"int32","description":"User Status"}},"type":"object","xml":{"name":"User"}});
            return chakram.wait();
        });

        it('should respond 400 for "Invalid username supplied"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/sint laboris dolor', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "User not found"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/Lorem eu ad', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });    
    });
    
    describe('tests for put', function() {
        it('should respond 400 for "Invalid user supplied"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/user/magna commodo', { 
                'body': {"userStatus":-26364986,"phone":"ipsum eiusmod","email":"esse aute ut","lastName":"tempor officia dol","password":"laboris in exercitation","id":53016894},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "User not found"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/user/reprehenderit sit', { 
                'body': {"lastName":"sunt culpa laboris dolor","firstName":"Lorem reprehenderit do in","username":"laboris dolor ut"},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for "Invalid username supplied"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/user/reprehenderit voluptate', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "User not found"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/user/labore qui nulla pariatur', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });    
    });
});