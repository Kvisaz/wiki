# Entry

Точка входа, точка начала сборки. Webpack может брать несколько точек входа.

[Источник](https://webpack.js.org/concepts/entry-points/)

```javascript
module.exports = {
  //...
  entry: {
    app: "./app.js", // точка входа как строка
    home: {
      // точка входа как объект
      import: "./contact.js", // собственно точка входа
      filename: "pages/[name][ext]", // имя выходного файла
      dependOn: ["reactvendors"], // общий модуль
    },
    about: {
      import: "./about.js",
      filename: "pages/[name][ext]",
      dependOn: ["reactvendors"], // общий модуль
    },
    reactvendors: {
      import: ["react", "react-dom"],
      runtime: "runtime", // название runtime chunk
    },
  },
};
```
