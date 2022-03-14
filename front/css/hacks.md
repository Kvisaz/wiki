# CSS трюки

Сделать расстояние между элементами-соседями (замена gap, который не работает в Safari 2022)

```css
.elementClass:not(:first-of-type) {
  margin-left: 23px;
}
```

[--back to index](../readme.md)
