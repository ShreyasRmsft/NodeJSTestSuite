var assert = require('assert');
var sleep = require('system-sleep');
 
describe('sampleUnitTests', function () {
    
    this.timeout(120000);

    before(function () {
        
    });
  
    after(function () {
        
    });

    it('Test method 1', function (done) {
        sleep(100);
        throw("error");
    });

    it('Test method 2', function (done) {
        sleep(100);
        done("hello across \n multiple lines \n here");
    });

    it('Test method 3', function (done) {
        this.skip();
    });

    it('Test method 4', function (done) {
        sleep(10);
        done("some stack trace");
    });

    it('Test method 5', function() {
        throw("some big error\n of multiple lines");
    });
});