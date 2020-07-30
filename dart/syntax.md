# Синтакс  Dart

- `;` обязательны в конце строки
- `var` переменная (`let` не нужен - блок скоуп работает и так)
- `final` - аналог константы в JS. То есть поменять ссылку на другой объект нельзя, но можно в текущем объекте изменить поля
- `const` - полня иммутабельность объекта
-  можно указывать `const` перед литералами

Пример:
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



[<------------ Индекс ](README.md)