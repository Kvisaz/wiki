# Потоки в Flutter

В Dart реализована **однопоточная модель исполнения**, которая работает на изоляциях (Isolates). Для асинхронного выполнения используется async/await, с которым вы, возможно, знакомы из C#, JavaScript или Kotlin coroutines.

Чтобы не блокировать поток - вызываем [`await`](async.md)

Чтобы обновить UI - надо вызвать setState() и виджет перерисуется (в StateFul Widget).

[Статья на Хабре](https://habr.com/ru/company/funcorp/blog/442432/#run_on_ui_analog)


[<------------ Индекс ](README.md)
