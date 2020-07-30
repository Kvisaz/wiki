# Простое приложение

[<------------ Flutter ](README.md)

```dart

// сначала импорт Material - единой библиотеки виджетов для веба и мобилок
import 'package:flutter/material.dart';

// стартовая функция Dart. Можно писать стрелочном виде, как JS
void main() => runApp(MyApp()); // runApp - запускающая функция Flutter. Подключает виджет-аргумент к экрану 

// Приложение - виджет. 'Все виджет'
// в данном случае - стейтлесс, то есть не меняется
class MyApp extends StatelessWidget {
    
   // обязательный метод build, 
   // который должен вернуть какой-то виджет
   // аргумент - BuildContext context
   // он описывает, где вы в дереве виджетов
   // у каждого виджета свой экземпляр
   // можно использовать для обращения не к своим детям
   // к примеру, к виджету окна - чтобы показать снекбар
    // Scaffold.of(context).showSnackBar(mySnackBar)
  @override
  Widget build(BuildContext context) {
    return MaterialApp(  //родительский виджет нужный для материальных виджетов  
      title: 'Welcome to Flutter',
      home: Scaffold( // 'строительные леса', скафолд. Обертка для экрана
        appBar: AppBar(  // виджет AppBar
          title: Text('Welcome to Flutter'),
        ),
        body: Center(  // выравнивающий виджет!
          child: Text('Hello World'), // виджет текста
        ),
      ),
    );
  }
}
```


[<------------ Flutter ](README.md)
