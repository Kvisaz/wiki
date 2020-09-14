# Merge без промежуточных коммитов

В ветке `dev-branch` дофига промежуточных коммитов. Нужно, чтобы при merge они записались как один.

```
git checkout main-branch
git merge --squash dev-branch
git commit -m "Merged dev-branch"
```