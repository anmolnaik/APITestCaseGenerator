'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/{petId}/uploadImage', function() {
    describe('tests for post', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/pet/0/uploadImage', { 
                'formData': {"additionalMetadata":"aliqua minim","file":"{fileUpload}"},
                'headers': {"GlobalShow":"global","PathOverride":"global","OpOverrideFromGlobal":"global","StatusCodeOverrideFromGlobal":"global","Content-Type":"multipart/form-data","Accept":"application/json"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.have.schema({"properties":{"code":{"type":"integer","format":"int32"},"type":{"type":"string"},"message":{"type":"string"}},"type":"object"});
            return chakram.wait();
        });    
    });
});