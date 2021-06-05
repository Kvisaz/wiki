# Примеры кат 8 уровня

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
