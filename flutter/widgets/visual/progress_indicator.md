# ProgressIndicator в Flutter

Есть линейный и круговой индикаторы: LinearProgressIndicator и CircularProgressIndicator.
Оба они просто крутятся, не отображая прогресс.

```dart
isLoading ? new PrimaryButton(
                      key: new Key('login'),
                      text: 'Login',
                      height: 44.0,
                      onPressed: setState((){isLoading = true;}))
                  : Center(
                      child: CircularProgressIndicator(),
                    ),
```


[<------------ Визуальные Виджеты Flutter](README.md)
