# Роутинг в Flutter

Route === экран, страница. Роуты в разных системах 
- Android: Activity
- iOS: ViewController
- Flutter: виджет

Все виджеты создаются горизонтально (с) Р.

Чтобы использовать роуты, нужен виджет Navigator. В MaterialApp он, видимо, включен автоматически. В навигатор надо завернуть остальные роуты.

## Активити, Фрагменты, Интенты?
Их нет. Для навигации между экранами используются классы Navigator и Route.

В Flutter - одна активити? Красота. )

Есть Navigator (навигатор) и Routes (маршруты). Приложение на Flutter напоминает single-activity приложение, где разные экраны представляют собой разные фрагменты, а управляет ими FragmentManager. Navigator похож на FragmentManager по принципу работы. Он может сделать push() или pop() указанному вами маршруту. Route — это своего рода Fragment, но во Flutter его принято сравнивать с экраном или страницей.

[Статья на Хабре](https://habr.com/ru/company/funcorp/blog/442432/#view_analog)

## Material App

В виджете MaterialApp есть аргумент `home` - это виджет, который будет базовым роутом. Он может меняться в зависимости от state.

Можно вместо home настроить поля роутов, то есть соответствие имен экранов разным виджетам.

```dart
// так настраиваются роуты в MaterialApp
void main() {
  runApp(MaterialApp(
    home: MyAppHome(), // becomes the route named '/'
    routes: <String, WidgetBuilder> {
      '/a': (BuildContext context) => MyPage(title: 'page A'),
      '/b': (BuildContext context) => MyPage(title: 'page B'),
      '/c': (BuildContext context) => MyPage(title: 'page C'),
    },
  ));
}
```

## Widget
В виджете отдельного экрана можно вызывать Navigator
```dart
Navigator.of(context).pushNamed('/b');
``` 

## Вернуть данные из экрана

Можно стартовать экран такой строчкой

```dart
Map coordinates = await Navigator.of(context).pushNamed('/location');
```

а внутри экрана вызвать Navigator.pop с аргументами
```dart
Navigator.of(context).pop({"lat":43.821757,"long":-79.226392});
```