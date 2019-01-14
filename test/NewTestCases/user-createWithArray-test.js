'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/createWithArray', function() {
    describe('tests for post', function() {
        it('should respond default for "successful operation"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/user/createWithArray', { 
                'body': [{"userStatus":33239608,"username":"in","lastName":"ipsum amet voluptate ut","email":"ad deserunt Duis eiusmod","id":-47122314,"password":"culpa laboris","firstName":"et exercitation labore ut"},{"lastName":"ex cillum aute","phone":"aliquip","userStatus":68149016}],
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            return chakram.wait();
        });    
    });
});