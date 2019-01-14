'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/createWithArray', function() {
    describe('tests for post', function() {
        it('should respond default for "successful operation"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/user/createWithArray', { 
                'body': [{"phone":"officia adipisicing sint","lastName":"sint irure","userStatus":65634467,"username":"id reprehenderit deserunt","password":"reprehenderit et esse cupidatat","id":-69810036},{"username":"ea eu","email":"culpa"},{"firstName":"aute"},{"firstName":"ad in ","lastName":"magna consequat nostrud minim","id":-9425690,"password":"exercitation Excepteur ut","email":"dolore","userStatus":29191715,"phone":"dolore"}],
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            return chakram.wait();
        });    
    });
});