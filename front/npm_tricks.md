# NPM tricks


## Локальное тестирование библиотеки без публикации в node

есть библиотека `@my/skill-exerciser-web-core`
она используется в `@my/skill-exerciser-web` через собственный NPM реестр.

Чтобы ускорить разработку, можно тестировать библиотеку локально

1. В папке `@my/skill-exerciser-web-core` запускаем команду `npm link`
2. в `@my/skill-exerciser-web` - `npm link @my/skill-exerciser-web-core`

После этого второй пакет будет иметь доступ к локальным билдам библиотеки на этом же компьютере. Чтобы убрать линк, допустим для теста имеющейся библиотеки, надо запустить 
в `@my/skill-exerciser-web` - `npm unlink @my/skill-exerciser-web-core`
после этого скорее всего надо будет сделать `npm i @my/skill-exerciser-web-core` чтобы получить свежую версию из реестра NPM

