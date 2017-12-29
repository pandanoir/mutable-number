const assert = require('assert');
const MutableNumber = require('../dist/mutable-number.js');
describe('MutableNumber', () => {
    describe('#add()', () => {
        it('should mutate itself', () => {
            const n = new MutableNumber(3);
            n.add(3);
            assert.equal(n.value, 6);
            n.add(6);
            assert.equal(n.value, 12);
        });
        it('is alias of #plus()', () => {
            assert.ok(MutableNumber.prototype.add === MutableNumber.prototype.plus);
        });
    });
    describe('#minus()', () => {
        it('should mutate itself', () => {
            const n = new MutableNumber(12);
            n.minus(3);
            assert.equal(n.value, 9);
            n.minus(6);
            assert.equal(n.value, 3);
        });
        it('is alias of #subtract()', () => {
            assert.ok(MutableNumber.prototype.minus === MutableNumber.prototype.subtract);
        });
    });
    describe('#mul()', () => {
        it('should mutate itself', () => {
            const n = new MutableNumber(3);
            n.mul(3);
            assert.equal(n.value, 9);
            n.mul(3);
            assert.equal(n.value, 27);
        });
        it('is alias of #multiple()', () => {
            assert.ok(MutableNumber.prototype.mul === MutableNumber.prototype.multiple);
        });
    });
    describe('#div()', () => {
        it('should mutate itself', () => {
            const n = new MutableNumber(12);
            n.div(3);
            assert.equal(n.value, 4);
            n.div(2);
            assert.equal(n.value, 2);
        });
        it('is alias of #divide()', () => {
            assert.ok(MutableNumber.prototype.div === MutableNumber.prototype.divide);
        });
    });
    describe('#inc()', () => {
        it('should mutate itself', () => {
            const n = new MutableNumber(3);
            n.inc();
            assert.equal(n.value, 4);
            n.inc();
            assert.equal(n.value, 5);
        });
        it('is alias of #increment()', () => {
            assert.ok(MutableNumber.prototype.inc === MutableNumber.prototype.increment);
        });
    });
    describe('#dec()', () => {
        it('should mutate itself', () => {
            const n = new MutableNumber(5);
            n.dec();
            assert.equal(n.value, 4);
            n.dec();
            assert.equal(n.value, 3);
        });
        it('is alias of #increment()', () => {
            assert.ok(MutableNumber.prototype.dec === MutableNumber.prototype.decrement);
        });
    });
    describe('#pow()', () => {
        it('should mutate itself', () => {
            const n = new MutableNumber(12);
            n.pow(2);
            assert.equal(n.value, 144);
            n.pow(1/2);
            assert.equal(n.value, 12);
        });
        it('is alias of #power()', () => {
            assert.ok(MutableNumber.prototype.pow === MutableNumber.prototype.power);
        });
    });
});
