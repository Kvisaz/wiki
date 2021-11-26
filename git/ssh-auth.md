# GitHub требует пароль, хотя настроен SSH

Нужно открыть .git/config в проекте и указать remote через `git@github.com:`

Или команда
`git remote set-url origin git@github.com:<Username>/<Project>.git`
