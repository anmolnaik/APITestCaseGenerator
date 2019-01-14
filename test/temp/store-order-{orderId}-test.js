'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /store/order/{orderId}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/store/order/Lorem Ut', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.have.schema({"properties":{"id":{"type":"integer","format":"int64"},"petId":{"type":"integer","format":"int64"},"quantity":{"type":"integer","format":"int32"},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","enum":["placed","approved","delivered"]},"complete":{"type":"boolean","default":false}},"type":"object","xml":{"name":"Order"}});
            return chakram.wait();
        });

        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/store/order/consequat', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "Order not found"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/store/order/in occaecat Excepteur', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/store/order/est', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400)
            return chakram.wait();
        });

        it('should respond 404 for "Order not found"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/store/order/consequat voluptate', { 
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404)
            return chakram.wait();
        });    
    });
});