# Release 

с этим чек-листом время подготовки релиза составляет 40-45 минут

1. иду в Releases в Jira -  создаю релиз с новым номером - Project 0.0.96

2. прохожу по задачам в Ready, ставлю номер релиза в Версии исправления - после этого они отражаются в релизе в Джире

3. нахожу хэш мержа в dev последней правильной задачи из прошлого релиза - 5afeff281
    
    Для этого может пригодиться команда  N последних мержей в dev

    `git log --merges --pretty --oneline -n 10`

4. составляю список мержей правильных задач после мержа 5afeff281 (последняя задача из прошлого релиза)

5. Прочитать список мержей в dev после этого коммита
`git log --merges --pretty --oneline 460f8774..dev`

460f8774bfe6d891f23ff1c096e7d25176e1f424

Получится список вида 

```zsh
23d47be29 (HEAD -> dev, origin/dev) Merged in feature/NSA-2728 (pull request #2030)
5afeff281 Merged in bugfix/NSA-2714 (pull request #2028)
ae3028c5f Merged in bugfix/NSA-2734 (pull request #2029)
9116e848e Merged in bugfix/NSA-2741 (pull request #2026)
5049bcbfe Merged in bugfix/NSA-2729 (pull request #2025)
de44dfab8 Merged in feature/NSA-804 (pull request #2024)
0f13235fc Merged in bugfix/NSA-2734 (pull request #2023)
b4b3e32f4 Merged in bugfix/NSA-2726 (pull request #2022)
3e5e6fd28 Merged in feature/NFC-40 (pull request #2021)

```


6. Из них выбираем хэши мержей для задач со статусом ready

23d47be29 (HEAD -> dev, origin/dev) Merged in feature/NSA-2728 (pull request #2030)
5afeff281 Merged in bugfix/NSA-2714 (pull request #2028)    ready
ae3028c5f Merged in bugfix/NSA-2734 (pull request #2029)    ready
9116e848e Merged in bugfix/NSA-2741 (pull request #2026)    ready
5049bcbfe Merged in bugfix/NSA-2729 (pull request #2025)    ready
de44dfab8 Merged in feature/NSA-804 (pull request #2024)    can be released
0f13235fc Merged in bugfix/NSA-2734 (pull request #2023)    ready
b4b3e32f4 Merged in bugfix/NSA-2726 (pull request #2022)    ready

и составляем из номеров список СНИЗУ ВВЕРХ, чтобы порядок команд соответствовал их порядку применения

git cherry-pick -m 1 3e5e6fd28
git cherry-pick -m 1 b4b3e32f4
git cherry-pick -m 1 0f13235fc
git cherry-pick -m 1 de44dfab8
git cherry-pick -m 1 5049bcbfe
git cherry-pick -m 1 9116e848e
git cherry-pick -m 1 ae3028c5f
git cherry-pick -m 1 5afeff281
git cherry-pick -m 1 23d47be29

7. делаем от ветки release ветку chore/rc.vx.x.x

8. По очереди заряжаем эти команды в терминал в ветку chore/rc.vx.x.x - это создаст такую же последовательность мержей с такими же названиями в release

9. после мержа изменений  запустить `npm run release`, там ответить на вопросы, пропушить результат и теги в repo

10. сделать пулл-реквест в release, проверить конфликты и наличие всех задач 

11. если все ок - мержить в release

12. пошла сборка - https://cicd.novakidschool.com/job/frontend/job/kidoffice/job/release/
как будет все зеленое,

13.  перевести все задачи в релизе на released on canary

14. дать объяву в. it-release, скопировав инфу из релиза в Джире