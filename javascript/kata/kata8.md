# Примеры кат 8 уровня

## Приветствие

```javascript
const greet = (name) => `Hello, ${name} how are you doing today?`;
```

```javascript
function greet(name) {
  return `\x48\x65\x6c\x6c\x6f\x2c\x20${name}\x20\x68\x6f\x77\x20\x61\x72\x65\x20\x79\x6f\x75\x20\x64\x6f\x69\x6e\x67\x20\x74\x6f\x64\x61\x79\x3f`;
}
```

## multiplication table

for number that is always an integer from 1 to 10.

```javascript
function multiTable(number) {
  let numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push(`${i} * ${number} = ${i * number}`);
  }
  return numbers.join("\n");
}
```

Чужие решения

```javascript
function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
    .join("\n");
}
```

## BMI определитель

Write function bmi that calculates body mass index (bmi = weight / height^2).

- if bmi <= 18.5 return "Underweight"
- if bmi <= 25.0 return "Normal"
- if bmi <= 30.0 return "Overweight"
- if bmi > 30 return "Obese"

```javascript
function bmi(weight, height) {
  const bmi = weight / Math.pow(height, 2);
  if (bmi <= 18.5) return "Underweight";
  if (bmi <= 25) return "Normal";
  if (bmi <= 30) return "Overweight";
  return "Obese";
}
```

Чужие решения

```javascript
const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
```

## Сортировка с аргументом

```javascript
const flip = (d, a) => {
  // a перед b
  if (d == "R") return a.sort((a, b) => a - b);
  // b перед a
  else return a.sort((a, b) => b - a);
};
```

Компактное решение `const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);`

## Повторить строку N раз.

Мое решение

```javascript
function repeatStr(n, s) {
  return [...new Array(n)].map((_) => s).join("");
}
```

Другие решения

```javascript
// ну это стандартное API, полезно уметь и самому делать такой алгоритм - для языков, в которых такого API нет
function repeatStr(n, s) {
  return s.repeat(n);
}
```

```javascript
// классика на цикле - вот это пригодится для других языков
function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++) str += s;
  return str;
}
```
