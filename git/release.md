# Release 


1. иду в Releases в Jira -  создаю релиз с новым номером - KidsArea 0.0.96
https://novakidschool.atlassian.net/projects/NSA?selectedItem=com.atlassian.jira.jira-projects-plugin%3Arelease-page

2. прохожу по задачам в Ready, ставлю номер релиза в Версии исправления - после этого они отражаются в релизе в Джире

3. нахожу хэш мержа в dev последней правильной задачи из прошлого релиза

4. составляю список мержей правильных задач после мержа af3261353 (последняя задача из прошлого релиза)

5. Прочитать список мержей в dev после этого коммита
` git log --merges --pretty --oneline 1a5147e0..dev`

Получится список вида 

```zsh
5c1796d55 (origin/dev, dev) Merged in feature/NSA-2120 (pull request #1803)
cb5d1f2c4 Merged in feature/NSA-2115 (pull request #1799)
e5b57d986 Merged in feature/NSA-2068 (pull request #1805)
8db4f5804 Merged in feature/NSA-1809 (pull request #1806)
2b3833a65 Merged in feature/NSA-1809 (pull request #1802)
d813fbcac Merged in feature/NSA-2068 (pull request #1801)
35c92f91e Merged in feature/NSA-1809 (pull request #1800)
8a72220ac Merged in feature/NSA-2068 (pull request #1795)
```


6. Из них выбираем хэши мержей для задач со статусом ready

cb5d1f2c4 Merged in feature/NSA-2115 (pull request #1799) ready
8db4f5804 Merged in feature/NSA-1809 (pull request #1806) ready
2b3833a65 Merged in feature/NSA-1809 (pull request #1802) ready
35c92f91e Merged in feature/NSA-1809 (pull request #1800) ready

и составляем из номеров список

git cherry-pick -m 1 cb5d1f2c4 
git cherry-pick -m 1 8db4f5804
git cherry-pick -m 1 2b3833a65
git cherry-pick -m 1 35c92f91e

7. По очереди в порядке СНИЗУ ВВЕРХ заряжаем эти команды в терминал в ветке release - это создаст такую же последовательность мержей с такими же названиями в release

7.1 возможно отдельно следует сделать ветку rc.vx.x.x
которую провести через мерж на битбакете в release

8. пошла сборка - https://cicd.novakidschool.com/job/frontend/job/kidoffice/job/release/
как будет все зеленое,

9.  перевести все задачи в релизе на released on canary

11. в release ветке запустить `npm run release`, там ответить на вопросы, пропушить результат и теги в repo

10. дать объяву в. it-release, скопировав инфу из релиза в Джире