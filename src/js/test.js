/**
 * Use this file to test if the ES6+ transpilation works correctly for IE.
 */

/* eslint-disable no-console */

// whatwg-fetch has to be imported manually, if you want to use the fetch API and need to support the IE
import 'whatwg-fetch';

const a = 'foobar';
console.log(a);

fetch('test.txt', {})
    .then((response) => {
        console.log(`status: ${response.status}`);
        return response.text();
    })
    .then(text => console.log(text));

const m = new Map();
m.set('foo', 'bar');
m.set('baz', 1234);
// eslint-disable-next-line no-restricted-syntax
for (const [key, value] of m) {
    console.log(key, value);
}

const p = new Promise((resolve) => {
    resolve('test');
});
p.then((foo) => {
    console.log(foo);
});

function* generate() {
    yield 42;
}
console.log(generate().next().value);
