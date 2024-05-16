#CORS

Как заставить  Хром плевать на CORS проблемы (годится для запуска с прода)
Работающий пока рецепт - запустить Хром с особым флагом
годится для десктопа
MacOS

```
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

Win
```
C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
```

https://alfilatov.com/posts/run-chrome-without-cors/ (more information and Linux commands)
https://medium.com/@beligh.hamdi/run-chrome-browser-without-cors-872747142c61


