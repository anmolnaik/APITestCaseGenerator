'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/createWithList', function() {
    describe('tests for post', function() {
        it('should respond default for "successful operation"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/user/createWithList', { 
                'body': [{"userStatus":-88197663,"username":"aliqua ad veniam Excepteur","password":"ea ullamco velit","firstName":"ad esse enim consequat","phone":"fugiat","id":5606285},{"id":92992921,"email":"aliquip","lastName":"id eu deserunt anim","userStatus":-46840730,"firstName":"reprehenderit culpa amet et","username":"dolore pariatur dolor"}],
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            return chakram.wait();
        });    
    });
});