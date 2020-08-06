# Имя пользователя в Git

В локально установленном Git есть имя пользователя, которым отмечаются коммиты. Оно существует отдельно и независимо от username на GitHub и других сервисах.

Посмотреть текущий username.

```bash
git config --global user.name
```

Изменить  - то же самое, но добавить username в кавычках.

```bash
git config --global user.name "Mona Lisa"
```