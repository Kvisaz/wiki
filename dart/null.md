# Null в Dart

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



[<------------ Индекс ](README.md)