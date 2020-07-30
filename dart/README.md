# Dart - ключевые особенности

В этой статье могут быть отсылки к Java/JavaScript/TypeScript, так как мне надо понять, чем Dart отличается.

Для работы c Dart - можно использовать только Flutter, отдельно dart-cli ставить не нужно. В будущие релизы Flutter обещают добавить команду `dart`

Любое приложение на языке Dart должно иметь функцию, которая называется main. Эта функция имеет тип void и не принимает никаких параметров, поэтому после названия функции идут пустые скобки.

```dart
void main() {
    print("Hello Dart!");
}
```

- [Пакеты в Dart](packages.md)

## Важные концепции
- Все, что можно поместить в переменную - объект (инстанс класса). Даже null, не говоря о числах. Общий родитель Object
- Типы можно не указывать - Dart может вычислить их из присваивания. Если нет инициализации, тип будет `dynamic` - это все объекты Dart
- Есть дженерики `List<int>`
- Функции можно писать без объектов. Можно писать внутри функций. 
- Есть глобальные переменные (top-level). 
- Приватность только для библиотек. Обозначается через `_` в начале названия.

## Похожесть на Java
- обязательна главная функция main как в Java
- типы пишутся перед функцией

## Отличия от TypeScript 
- деструктуринга нет
- спреадинга нет


```dart
main() {
  var dog1 = "Max"; // variable

  final maleDogs = ["Milo"]; // нельзя поменять переменную, можно изменить поля
  maleDogs.add("Cooper"); // ✅
  maleDogs = ["Cooper"]; // ❌

  const femaleDogs = ["Luna", "Bella"]; // compile-time константа 
  femaleDogs.add("Winona"); // ❌
  femaleDogs = ["Winona"]; // ❌

  // можно ставить перед литералами
  walkingTimes(const [7, 9, 11]);  // ✅
  walkingTimes(const [DateTime.now()]);  // ❌
}
```

### Операции с null
Undefined переменные это null. Ну, как в Java.  

Операции с проверкой на null

```dart
    var bones;
    bones ??= 1; // равно bones или 1, если bones null
    var bimbo = bones ?? 2; // равно bones или 2, если bones == null
```

Присваивание с проверкой 
```dart
    // name получит name, только если все поля перед этим будут ненулевыми
    var name = address?.street?.name;
```

### Функции
Литерал как в JavaScript, за исключением того, что var
```dart 
var bday = (age) => age + 1;
```

Аргументы по умолчанию передаются в фигурных скобках (curly braces)
```dart
    var greet = ({ name = 'Rocky' }) => "Woof! My name is ${name}";
```
### Строки

Строковый шаблон с обычными кавычками
```dart
    var name = 'Vanya'
    var greet = "Woof! My name is ${name}";
```

### Коллекции
Вместо Array - List. Вместо объекта - Map
```dart
    main() {
        var dogList = ["Lucy", "Cooper", "Zeus"]; // List литерал
        var dogMap = { 'first': "Lucy", 'second': "Cooper" }; // Map литерал. could use #first symbol instead
        var dogSet = { "Lucy", "Cooper", "Zeus" };  // Set литерал

        print(dogList.length); // 3
        print(dogMap.length); // 2
        print(dogSet.length); // 3
}
```

[<------------ Индекс ](../README.md)