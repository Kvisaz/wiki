# Code Splitting

[Источник](https://webpack.js.org/guides/code-splitting/)

Три подхода

- Вручную разбиваем код через конфигурацию `entry`
- Защищаемся от дублей через Entry dependencies или SplitChunksPlugin
- Динамические импорты

## Entry Points

Мы просто указываем несколько entries.

```javascript
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

Но импортированные модули внутри разных entry будут повторяться, то есть включаться в оба бандла. Это можно исправить через

## Entry dependencies

Каждый entry - делаем объектом. Добавляем в каждый entry опцию `dependOn`.

```js
module.exports = {
  mode: "development",
  entry: {
    index: {
        impirt: "./src/index.js",
        dependOn: 'shared',
    }
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

То есть смысл в том, что одни entries зависят от каких-то общих entry.

В entry можно указать имя модуля или даже массив модулей

```js
module.exports = {
  //...
  entry: {
    app: { import: "./app.js", dependOn: "react-vendors" },
    "react-vendors": ["react", "react-dom", "prop-types"],
  },
};
```

По этой теме смотри [Entry](entry.md)
