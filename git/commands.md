# Команды Git

Выписать на локальный компьютер удаленную ветку

`git fetch && git checkout additional_pushes`

Просмотреть локальные ветки

`git branch`

Посмотреть в текущей ветке последние 10 вмерженных коммитов
`git log --merges --max-count=10`

Посмотреть в текущей ветке последние 20 вмерженных коммитов в кратком формате
`git log --merges  --pretty=format:'%h %s (%an)' --max-count=20`

Посмотреть и вывести в текстовый файл последние 30 вмерженных коммитов
`git log --merges  --pretty=format:'%h %s (%an)' --max-count=20 > merges.txt`

## Merge с переписыванием

Годно если конфликтуют только package-lock.json

The -Xours option tells Git to ignore any conflicts and simply use the content of the branch being merged in case of any conflicts. 

`git merge <branch_to_merge_from> -Xours -m 'dominate'`

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

## Удалить сразу несколько локальных веток

Во-первых, можно использовать grep для отбора нескольких веток по паттерну. Пример - показать ветки с названием начинающимся с 'bugfix/'

`git branch | grep "bugfix/*"`

Чтобы удалить надо к этому добавить еще xargs - команду, которая делает из списка исполняемую команду.

`git branch | grep "<pattern>" | xargs git branch -D`

Пример: удалить все bugfix/ ветки

`git branch | grep "bugfix/*" | xargs git branch -D`

Пример: удалить все feature/ ветки

`git branch | grep "feature/*" | xargs git branch -D`
