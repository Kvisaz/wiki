# Merge без промежуточных коммитов

В ветке `dev-branch` дофига промежуточных коммитов. Нужно, чтобы при merge они записались как один.

```
git checkout main-branch
git merge --squash dev-branch
git commit -m "Merged dev-branch"
```


## Merge только нужных мержей dev->release

1. Взять хэш последнего коммита в dev, после которого можно черри-пикать, допустим сам номер релиза 

2. Прочитать список мержей в dev после этого коммита
` git log --merges --pretty --oneline 31542e4a0..dev`

Получится список вида 

```zsh
c5606cf03 Merged in feature/NSA-2068 (pull request #1791)
0fe03211f Merged in feature/NSA-1871 (pull request #1789)
4f7f97d0f Merge branch 'master' into feature/NSA-2068
699cf72c2 Merge branch 'dev' into feature/NSA-2068
a7c1e4254 Merge branch 'dev' into feature/NSA-2068
d7be4912c Merged in feature/NSA-2064 (pull request #1786)
```


3. Из них выбираем хэши мержей для задач со статусом ready
и составляем такой список

```zsh
git cherry-pick -m 1 468324294
git cherry-pick -m 1 c4154c3b7
git cherry-pick -m 1 0e00845a3
git cherry-pick -m 1 6e6224e9e
```

4. По очереди заряжаем эти команды в терминал в ветке release