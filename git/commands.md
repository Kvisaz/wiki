
# Команды Git


Выписать на локальный компьютер удаленную ветку

`git fetch && git checkout additional_pushes`

Просмотреть локальные ветки

`git branch`

## Merge без промежуточных коммитов

В ветке `dev-branch` дофига промежуточных коммитов. Нужно, чтобы при merge они записались как один.

```
git checkout main-branch
git merge --squash dev-branch
git commit -m "Merged dev-branch"
```


## Удалить локальную ветку

Безопасное - для смерженных

`git branch -d <branch>`

Небезопасное, подавляет предупреждения для не смерженных

`git branch -D <branch>`