# Линейный конгруэнтный метод получения псевдослучайных числе

- https://github.com/bit101/lcg
- [wiki Ru](https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D1%83%D1%8D%D0%BD%D1%82%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4)
- [wiki En](https://en.wikipedia.org/wiki/Linear_congruential_generator)


```
var lcg = {
  seed: Date.now(),
  a: 1664525,
  c: 1013904223,
  m: Math.pow(2, 32),
  
  setSeed: function(seed) {
    this.seed = seed;
  },
  
  nextInt: function() {
    // range [0, 2^32)
    this.seed = (this.seed * this.a + this.c) % this.m;
    return this.seed;
  },
  
  nextFloat: function() {
    // range [0, 1)
    return this.nextInt() / this.m;
  },
  
  nextBool: function(percent) {
    // percent is chance of getting true
    if(percent == null) {
      percent = 0.5;
    }
    return this.nextFloat() < percent;
  },
  
  nextFloatRange: function(min, max) {
    // range [min, max)
    return min + this.nextFloat() * (max - min);
  },
  
  nextIntRange: function(min, max) {
    // range [min, max)
    return Math.floor(this.nextFloatRange(min, max));
  },
  
  nextColor: function() {
    // range [#000000, #ffffff]
    var c = this.nextIntRange(0, Math.pow(2, 24)).toString(16).toUpperCase();
    while(c.length < 6) {
      c = "0" + c;
    }
    return "#" + c;
  }
};
```