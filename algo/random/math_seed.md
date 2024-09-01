#Math JavaScript - seed

Библиотека seedrandom добавляет в Math в JavaScript метод, который
- создает предсказуемый генератор через seed (через new)
- или делает все методы Math.random предсказуемым (без new)

https://github.com/davidbau/seedrandom


Внимание! Каждое создание или применение seedrandom - перезапускает случайную генерацию, так можно даже повторять случайные комбо в Math.random, просто запуская глобально Math.seedrandom([seed]).  Но лучше создавать генератор.

```
// Make a predictable pseudorandom number generator.
var myrng = new Math.seedrandom('hello.');
console.log(myrng());                // Always 0.9282578795792454
console.log(myrng());                // Always 0.3752569768646784

// Use "quick" to get only 32 bits of randomness in a float.
console.log(myrng.quick());          // Always 0.7316977467853576

// Use "int32" to get a 32 bit (signed) integer
console.log(myrng.int32());          // Always 1966374204

// Calling seedrandom with no arguments creates an ARC4-based PRNG
// that is autoseeded using the current time, dom state, and other
// accumulated local entropy.
var prng = new Math.seedrandom();
console.log(prng());                // Reasonably unpredictable.

// Seeds using the given explicit seed mixed with accumulated entropy.
prng = new Math.seedrandom('added entropy.', { entropy: true });
console.log(prng());                // As unpredictable as added entropy.

// Warning: if you call Math.seedrandom without `new`, it replaces
// Math.random with the predictable new Math.seedrandom(...), as follows:
Math.seedrandom('hello.');
console.log(Math.random());          // Always 0.9282578795792454
console.log(Math.random());          // Always 0.3752569768646784
```

calling Math.seedrandom('constant') without new will make Math.random() predictable globally, which is intended to be useful for derandomizing code for testing, but should not be done in a production library. If you need a local seeded PRNG, use myrng = new Math.seedrandom('seed') instead. 