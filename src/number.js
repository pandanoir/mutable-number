export default class MutableNumber {
    constructor(number) {
        this.value = number;
    }
    plus(n) {
        this.value += n;
    }
    minus(n) {
        this.value -= n;
    }
    multiple(n) {
        this.value *= n;
    }
    divide(n) {
        this.value /= n;
    }
    mod(n) {
        this.value %= n;
    }
    power(n) {
        this.value = Math.exp(Math.log(this.value) * n);
    }
    increment() {
        return this.value++;
    }
    decrement() {
        return this.value--;
    }
    equals(n) {
        return n instanceof MutableNumber && n.value == this.value;
    }
}
const abbr = {
    'add': 'plus',
    'subtract': 'minus',
    'mul': 'multiple',
    'div': 'divide',
    'pow': 'power',
    'inc': 'increment',
    'dec': 'decrement',
    'eq': 'equals',
};
for (const key of Object.keys(abbr)) {
    MutableNumber.prototype[key] = MutableNumber.prototype[abbr[key]];
}
