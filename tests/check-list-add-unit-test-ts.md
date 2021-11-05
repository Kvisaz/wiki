# Чек-лист по добавлению тестов в приложение Typescript для браузера

1. Ставим библиотеки из консоли (нужна Node на компьютере)
   `npm install jest --save-dev` - Jest
   `npm install @types/jest` - типы для Jest
   `npm install @types/jsdom` - типы для JsDom (внутри Jest)

   `npm install jest-environment-jsdom` - среда для тестирование браузера
   `npm install jest-environment-jsdom-global` - среда для тестирование браузера

Или одной командой
`npm i jest @types/jest @types/jsdom jest-environment-jsdom jest-environment-jsdom-global --save-dev`

2. В package.json ставим настройку jest для браузера - это просто надо скопировать

```json
 "jest": {
    "testEnvironment": "jest-environment-jsdom-global"
  }
```

3. В скриптах package.json добавляем команду с названием тест

```json
"scripts": {
    "test": "jest"
  },
```

После этого этапа можно писать тесты. Базовые принципы

4. Рядом с тестируемым файлов пишем файл с таким же именем, но добавляем test перед расширением. Если много, то можно создать папку tests, но рядом

```
myfunc.ts// моя функция
myfunc.test.ts // тесты для нее
```

5. Внутри теста пишем импорт нашей функции, класса и тд

6. Сам тест выглядит так

```typescript
// начало набора тестов
describe("TEST SUITE MARKER NAME ", () => {
  // начало одного теста
  it("TEST NAME", () => {
    // вызываем нашу функцию
    const result = myFunc();
    // подготавливаем идеальный результат
    const expected = {};

    // сердце теста - означает,
    // что params === expected
    expect(params).toEqual(expected);
  });
});
```
