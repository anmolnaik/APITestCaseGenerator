'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/createWithList', function() {
    describe('tests for post', function() {
        it('should respond default for "successful operation"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/user/createWithList', { 
                'body': [{"firstName":"Duis nisi cupidatat","email":"sit Duis quis Excepteur","password":"quis labore"},{"lastName":"Duis dolore et ve","username":"aute qui culpa eu"},{"username":"in","firstName":"dolore","email":"exercitation","password":"Excepteur ad deserunt est","id":-53270474}],
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            return chakram.wait();
        });    
    });
});