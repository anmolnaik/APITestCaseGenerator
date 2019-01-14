'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user', function() {
    describe('tests for post', function() {
        it('should respond default for "successful operation"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/user', { 
                'body': {"phone":"esse laboris quis exercitation","userStatus":-35227857,"email":"non sed cupi","id":-91380676},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            return chakram.wait();
        });    
    });
});