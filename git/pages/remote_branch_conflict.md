# Конфликт с удаленной веткой

Ситуация: изменения сделаны и в локальной, и в удаленной ветке. Git пишет

```sh
error: failed to push some refs to 'https://github.com/Kvisaz/wiki.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Решение

1. `git fetch origin` - получаем изменения
2. `git merge origin/<название_ветки>` - мержим удаленную копию в локальную. Если надо решаем конфликты. Если конфликтов нет то все решается сразу